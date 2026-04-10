import Section1 from "../app/components/section1"
import Section2 from "../app/components/section2"
import Section3 from "../app/components/section3"
import FAQ from "./components/faq"
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="min-h-screen font-[Inter] flex flex-col  scroll-smooth">
      <main className="">
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <FAQ></FAQ>
        <Contact></Contact>
      </main>
    </div>
  );
}
