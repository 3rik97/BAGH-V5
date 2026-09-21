import Section1 from "../app/components/section1"
import Section2 from "../app/components/section2"
import Section3 from "../app/components/section3"
import FAQ from "./components/faq"
import Contact from "./components/contact";
import Herosection from "./components/v2/hero";
import V2section1 from "./components/v2/section1";
import V2section2 from "./components/v2/section2";
import V2section3 from "./components/v2/section3";
import V2section4 from "./components/v2/section4";
import V2section5 from "./components/v2/section5";
import V2section6 from "./components/v2/section6";
import V2section7 from "./components/v2/section7";
import V2section8 from "./components/v2/section8";
import V2section9 from "./components/v2/section9";
import V2section10 from "./components/v2/section10";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[Inter] flex flex-col  scroll-smooth">
      <main className="">
        <Herosection />
        <Image src="/v2/WEBP/herosection.webp" alt="BAGH" className="blog lg:hidden" width={440} height={300} />
        <V2section1 />
        <V2section2 />
        <Image src="/v2/WEBP/bangladesh.webp" alt="BAGH" className="blog lg:hidden" width={440} height={300} />
        <V2section3 />
        <V2section4 />
        <V2section5 />
        <Image src="/v2/WEBP/cricket.webp" alt="BAGH" className="blog lg:hidden" width={440} height={300} />
        <V2section6 />
        <V2section7 />
        <Image src="/v2/WEBP/roullette.webp" alt="BAGH" className="blog lg:hidden" width={440} height={300} />
        <V2section8 />
        <V2section9 />
        <V2section10 />

        {/* <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <FAQ></FAQ>
        <Contact></Contact> */}
      </main>
    </div>
  );
}
