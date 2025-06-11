import Link from "next/link"
export default function Section() {
    return <section className="section1" id="#">
        <div className="relative pt-[80px] m-auto text-white  max-w-[1440px]">
            <img src="/Dice separated.png" alt="dice" className="w-[80vw] sm:w-[35vw] m-auto " />
            <div className="bottom-0 flex flex-col justify-center gap-2">
                <h1 className="text-center font-extrabold text-[36px] leading-[44px] text-[#E8E6E3] font-['Inter']">BAGH Casino Online: Bangladesh&apos;s New Online Betting Platform</h1>
                <p className="text-center font-medium text-[20px] leading-[24px] text-[#E8E6E3] font-['Inter']">Step into the world of Bagh Casino Online, Bangladesh&apos;s new online gaming site created for enjoyment, fairness, and continuous action. Whether you like slots, live dealers, or sportsbook action, Bagh provides a seamless and thrilling experience built for Bangladesh players. Experience a secure setting, local assistance, and games that will leave you wanting more. Your future big win may be a single click away—begin your adventure with Bagh today!</p>
                <div className="btn-container m-auto flex gap-[20px] mt-[25px] mb-[80px]">
                    <button className="py-3 sm:w-[216px] w-[190px] sm:h-[52px] h-190px bg-[#F47521] border-2 border-[#F47521]"><Link href="https://bagh.live/af/5pButO62/bagh55">Join Us</Link></button>
                    <button className="py-3 sm:w-[216px] w-[190px] sm:h-[52px] h-190px border-white border-2"><Link href="https://bagh.live/af/5pButO62/bagh55">Learn More</Link></button>
                </div>
            </div>

        </div>
    </section>
}