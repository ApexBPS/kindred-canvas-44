import { useEffect, useRef } from "react";

/**
 * Lightweight WebGL "3D" gradient wave background.
 * Renders a flowing, layered noise-driven color field using a single
 * fragment shader on a fullscreen quad. Falls back gracefully if WebGL
 * is unavailable (CSS gradient in body::before still shows through).
 */
const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2  u_res;
uniform float u_time;

// Palette tuned to Apex BPS (warm sand + sky + cocoa)
vec3 cA = vec3(0.96, 0.84, 0.55); // warm cream
vec3 cB = vec3(0.55, 0.74, 0.93); // sky blue
vec3 cC = vec3(0.85, 0.55, 0.35); // cocoa/sand
vec3 cD = vec3(0.15, 0.18, 0.30); // deep navy

// Smooth value noise
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i+vec2(0.0,0.0)), hash(i+vec2(1.0,0.0)), u.x),
             mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 5; i++){
    v += a * noise(p);
    p *= 2.05;
    a *= 0.5;
  }
  return v;
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*u_res) / u_res.y;
  float t = u_time * 0.06;

  // Pseudo-3D wave field: warp uv with layered fbm
  vec2 q = vec2(fbm(uv*1.6 + vec2(t, -t*0.7)),
                fbm(uv*1.6 + vec2(-t*0.8, t*1.1)));
  vec2 r = vec2(fbm(uv*2.0 + 2.4*q + vec2(1.7, 9.2) + t*0.5),
                fbm(uv*2.0 + 2.4*q + vec2(8.3, 2.8) - t*0.4));
  float f = fbm(uv*1.4 + 1.8*r);

  vec3 col = mix(cD, cB, smoothstep(0.0, 0.6, f));
  col      = mix(col, cA, smoothstep(0.4, 0.95, dot(r, vec2(0.6))));
  col      = mix(col, cC, smoothstep(0.55, 1.1, length(q)*0.8));

  // Subtle vertical gradient + vignette so content stays readable
  col *= mix(0.78, 1.05, smoothstep(0.0, 1.0, gl_FragCoord.y / u_res.y));
  float vig = smoothstep(1.2, 0.2, length(uv));
  col *= mix(0.65, 1.0, vig);

  gl_FragColor = vec4(col, 1.0);
}
`;

export const GradientWaveBackground = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor(window.innerHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      if (!reduced) raf = requestAnimationFrame(tick);
    };
    tick(start);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
};

export default GradientWaveBackground;
