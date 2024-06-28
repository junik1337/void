import Articles from "@/components/Articles";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Subjects from "@/components/Subjects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <Hero />
      <Projects />
      <Subjects />
      <Articles />
    </div>
  );
}
