import Section1 from "../app/components/section1"
import Section2 from "../app/components/section2"
import Section3 from "../app/components/section3"
import FAQ from "./components/faq"
import Contact from "./components/contact";
import Footer from "./components/footer";
import MobileNav from "./components/header-mobile";

export default function Home() {
  return (
    <div className="min-h-screen font-[Inter] flex flex-col ">
      <main className="">
        <MobileNav></MobileNav>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <FAQ></FAQ>
        <Contact></Contact>
      </main>
      <footer>
        <Footer></Footer>
        <div className="text-center py-[25px] text-[14px]">© Copyright <span className="font-semibold"> BAGH </span> All Rights Reserved</div>
      </footer>
    </div>
  );
}
