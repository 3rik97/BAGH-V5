import Link from "next/link"
import Image from "next/image"

export default function AboutContent() {
    return (
        <section id="about-us" className="mt-[80px] mb-[24px] p-[20px]">
            <div className="max-w-[1240px] flex flex-wrap flex-row m-auto bg-[#161516]">
                <div className="w-full lg:max-w-[477px]">
                    <Image src={"/assets/BaghIconCard.webp"} width={477} height={600} alt="BAGH 55" />
                </div>
                <div className="w-full lg:max-w-[760px] p-[20px]">
                    <h2 className="border-b-2 border-[rgba(232,230,227,0.12)] font-[Inter] font-black text-[20px] leading-[24px] text-[#E8E6E3] mb-[32px]">Who We Are</h2>

                    <div className="w-[48px] h-[48px] border-[1px] border-[#E8E6E31F] border-solid rounded-[4px] p-[12px] mb-[12px]">
                        <Image src={"/assets/bagh casino.svg"} width={24} height={24} alt="BAGH55" />
                    </div>
                    <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[32px]">
                        BAGH Casino is a trusted online betting platform built for players who want exciting games, real rewards, and a secure experience. We focus on delivering high-quality play with local payment support, fast service, and bonuses.
                    </p>
                    <div className="w-[48px] h-[48px] border-[1px] border-[#E8E6E31F] border-solid rounded-[4px] p-[12px] mb-[12px]">
                        <Image src={"/assets/Our platform meets.svg"} width={24} height={24} alt="BAGH55" />
                    </div>
                    <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[32px]">
                        Our platform meets demanding requirements to maintain everything fair and safe; we are authorized by well-known international bodies.
                    </p>
                    <div className="w-[48px] h-[48px] border-[1px] border-[#E8E6E31F] border-solid rounded-[4px] p-[12px] mb-[12px]">
                        <Image src={"/assets/With 247 assistance.svg"} width={24} height={24} alt="BAGH55" />
                    </div>
                    <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[32px]">
                        With 24/7 assistance in both Bangla and English, we are honored to provide players throughout South Asia with the quality <Link href={"/#services"} className="text-blue-500">services we offer</Link>, especially in Bangladesh.
                    </p>
                    <div className="w-[48px] h-[48px] border-[1px] border-[#E8E6E31F] border-solid rounded-[4px] p-[12px] mb-[12px]">
                        <Image src={"/assets/At BAGH Live,.svg"} width={24} height={24} alt="BAGH55" />
                    </div>
                    <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3]">
                        At BAGH Live, we are a rising community that plays smart, wins big, and enjoys every minute!
                    </p>
                </div>
            </div>

            <div className="max-w-[1240px] flex flex-wrap flex-row m-auto bg-[#161516]">
                <div className="max-w-[477px] w-[477px] flex justify-center items-center">
                    <div className="max-w-[381px] p-[20px]">
                        <h2 className="border-b-2 border-[rgba(232,230,227,0.12)] font-[Inter] font-black text-[20px] leading-[24px] text-[#E8E6E3] mb-[32px]">Our Vision</h2>
                        <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3]">
                            To give you and the Bangladeshi players the best gaming experience possible and to be the most trusted casino site in Bangladesh. Fast payouts, local payment support, exciting events, and non-stop bonuses, that’s what BAGH is all about.
                        </p>
                    </div>
                </div>
                <div className="max-w-[763px]">
                    <Image src={"/assets/contentbanner.webp"} width={763} height={346} alt="BAGH55" />
                </div>
            </div>
        </section>
    )
}