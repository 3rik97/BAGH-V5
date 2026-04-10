import Link from "next/link"

export default function AboutHeader() {
    return (
        <section className="h-dvh bg-[url('/assets/hero-bg.webp')] bg-cover bg-center bg-no-repeat p-[20px]">
            <div className="max-w-[1238px] m-auto pt-[90%] lg:pt-[30%]">
                <h1 className="font-['Inter'] w-full font-black text-[36px] lg:text-[60px] leading-[36px] lg:leading-[73px] text-center text-[#E8E6E3] mb-[24px]">
                    BAGH Live: A Growing
                    <br />
                    Community of Smart, Local Players
                </h1>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-center text-[#E8E6E3]">
                    Welcome to BAGH Live, proudly built for South Asian players to give pure fun and exciting rewards.

                </p>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-center text-[#E8E6E3] mb-[24px]">
                    We’re not just another gaming platform. We’re a space where your excitement meets trust, and every play could bring you a new win.
                </p>
                <div className="flex justify-center items-center gap-[32px]">
                    <button className="w-full lg:w-[230px] h-[56px] py-[14px] px-0 flex items-center justify-center gap-[10px] bg-[#F47521] shadow-[0px_4px_4px_rgba(0,0,0,0.5)] cursor-pointer"><Link href={"#about-us"}>Get Started</Link></button>
                    <button className="w-full lg:w-[240px] h-[56px] py-[14px] px-0 flex items-center justify-center gap-[10px] bg-[rgba(255,255,255,0.01)] border border-[#E8E6E3] shadow-[0px_4px_4px_rgba(0,0,0,0.5)] cursor-pointer"><Link href={"https://bagh.live/af/5pButO62/bagh55"} target="_blank">Learn More</Link></button>
                </div>
            </div>
        </section>
    )
}