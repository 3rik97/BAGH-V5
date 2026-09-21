import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return (
        <section>
            <nav className="flex flex-wrap justify-between max-w-[1320px] m-auto items-center p-[23px]">
                <div>
                    <Link href='' className="cursor-pointer"><Image src={'/v2/WEBP/Navbar.webp'} width={124} height={80} alt="BAGH"></Image></Link>
                </div>
                <div>
                    <ul className="flex flex-wrap font-['Inter'] font-normal text-[16px] leading-[30px] text-center tracking-[1px] uppercase text-[#FAFAFA] [text-shadow:0px_0px_25px_rgba(255,255,255,0.6)] gap-[40px]">
                        <li className="cursor-pointer hover:text-[#FF6A33] hover:[text-shadow:0px_0px_25px_#FF450099]">
                            <Link href="/">HOME</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[#FF6A33] hover:[text-shadow:0px_0px_25px_#FF450099]">
                            <Link href='/about'></Link>ABOUT US
                        </li>
                        <li className="cursor-pointer hover:text-[#FF6A33] hover:[text-shadow:0px_0px_25px_#FF450099]">
                            <Link href={"#"}>SERVICES</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[#FF6A33] hover:[text-shadow:0px_0px_25px_#FF450099]">
                            <Link href=''>PRIVACY POLICY</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[#FF6A33] hover:[text-shadow:0px_0px_25px_#FF450099]">
                            BLOGS
                        </li>
                    </ul>
                </div>
                <div className="">
                    <button className="px-4 py-3 gap-5 w-[200px] h-[54px] bg-[#F7941D] shadow-[0px_0px_25px_rgba(255,69,0,0.6),inset_0px_0px_15px_rgba(255,69,0,0.2)] rounded-[8px] text-black cursor-pointer">SIGN UP</button>
                </div>
            </nav>
        </section>
    )
}