import Link from "next/link"
import Image from "next/image"
export default function Herosection() {
    return (
        <section className="lg:h-[900px] bg-none lg:bg-[url('/v2/WEBP/BAGHCasinoBangladesh.webp')] bg-cover bg-no-repeat bg-center p-[20px]">
            <div className=" max-w-[1320px] w-full m-auto items-center pt-[50px] lg:pt-[100px]">
                <div className="lg:max-w-[700px] w-full lg:w-[700px]">
                    <h1 className="font-['Montserrat'] font-extrabold text-[52px] lg:text-[56px] leading-[50px] lg:leading-[68px] tracking-[-4px] text-[#FAFAFA] pt-[30px] lg:pt-0">
                        BAGH Casino Bangladesh: <br /> <span className="text-[#CC5529] text-[40px] lg:text-[44px] ">Slot Games, Cricket Betting & Big Bonuses

                        </span>
                    </h1>
                    <div className="flex flex-col gap-[40px]">
                        <p className="font-['Inter'] font-bold text-[20px] leading-[24px] tracking-[0.01em] text-[#FAFAFA]">
                            <Link href={"/"} className="text-[#CC5529] underline">BAGH Casino</Link> has become a popular choice among local users.
                            It has all the features of slots, cricket betting, and bonuses.
                        </p>
                        <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] p-[20px] lg:pl-[40px] border-l-[6px] border-l-[#CC5529] border-l-solid">
                            Online casino gaming in Bangladesh is growing fast. More players are joining every day. People now prefer platforms that are easy to use and give good rewards. They also consider it to be the best casino site in Bangladesh due to its smooth performance and availability of multiple games.
                        </p>
                        <p className="font-['Inter'] italic font-light text-[16px] leading-[19px] tracking-[1px] text-[#C7C7C7]">
                            This guide will explain everything about BAGH Casino, including its features, services, registration process, games, betting options, and security system.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-[20px] pt-[40px]">
                        <button className="px-4 py-3 w-full lg:w-[200] bg-[#FF4500] bg-[linear-gradient(0deg,#FF4500,#FF4500),#FFFFFF] shadow-[0px_0px_25px_rgba(255,69,0,0.6),inset_0px_0px_15px_rgba(255,69,0,0.2)] rounded-[8px]">JOIN NOW</button>
                        <button className="px-4 py-3  w-full lg:w-[200] border border-[#FF4500] shadow-[inset_0px_0px_15px_rgba(255,69,0,0.2)] drop-shadow-[0px_0px_25px_rgba(255,69,0,0.6)] rounded-[8px]">EXPLORE GAMES</button>
                    </div>
                </div>

            </div>
        </section>
    )
}