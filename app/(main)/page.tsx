import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Infromation from "@/components/Information";
import Projects from "@/components/Projects";
import Rapport from "@/components/Rapport";
import Subjects from "@/components/Subjects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <Hero />
      <Projects />
      <Subjects />
      <Articles />
      <Infromation />
      <Rapport />
      <Contact />
    </div>
  );
}
