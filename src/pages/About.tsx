import { Navbar } from "@/components/layout/Navbar";
import { BackButton } from "@/components/layout/BackButton";
import { Footer } from "@/components/layout/Footer";

const About = () => (
  <div className="min-h-dvh">
    <Navbar />
      <BackButton />
    <main className="pt-32 px-6">
      {/* Section 1 */}
      <section className="max-w-4xl mx-auto animate-fade-in">
        <h1
          className="font-playfair text-gradient leading-[0.95] text-center"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
        >
          What is Apex BPS?
        </h1>

        <div className="font-garamond text-base md:text-lg text-foreground/90 leading-relaxed mt-12 space-y-6">
          <p>
            Apex BPS (Business Pitch Summit) is a distinguished student-led business event designed to
            support young innovators by providing a professional platform to present their pre-prepared
            business ideas and entrepreneurial visions. It brings together AMBITIOUS students who are
            passionate about leadership, strategy, and innovation, allowing them to showcase not only
            their concepts but also their understanding of what it takes to build and sustain a
            successful business. Participants are challenged to demonstrate creativity, practicality,
            financial awareness, and strong presentation skills while defending the value and feasibility
            of their ideas before experienced evaluators and industry-aware mentors.
          </p>
          <p>
            More than just an event, Apex BPS serves as an environment that encourages confidence,
            critical thinking, and meaningful collaboration. It aims to bridge the gap between academic
            potential and real-world business application by exposing students to professional standards,
            constructive feedback, and high-level discussion. Through this experience, participants
            develop a stronger entrepreneurial mindset, refine their communication abilities, and gain
            valuable recognition for their innovation and dedication. Apex BPS stands as a symbol of
            ambition, excellence, and the belief that student ideas have the power to create REAL impact.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-w-3xl mx-auto mt-32 mb-16 text-center animate-fade-in">
        <h2 className="font-playfair text-gradient" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
          Dates &amp; Venue
        </h2>
        <div className="gradient-line my-8 max-w-md mx-auto" />
        <p className="font-playfair text-foreground/95" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          To Be Announced
        </p>
        <div className="gradient-line my-8 max-w-md mx-auto" />
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
