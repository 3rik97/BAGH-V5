import Image from "next/image"
import Link from "next/link"

export default function V2section5() {
    return (
        <section className="p-[20px] lg:p-0 bg-none lg:bg-[url('/v2/WEBP/CricketBetting.webp')] bg-cover bg-center">
            <div className="max-w-[1320px] w-full flex flex-col m-auto items-end pt-[50px] lg:py-[187px] ">
                <div className=" w-full lg:w-[660px] ">
                    <h2 className="font-['Montserrat'] font-extrabold text-[40px] leading-[49px] text-[#CC5529]">Cricket Betting</h2>
                    <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] p-[20px] lg:pl-[40px] border-l-[6px] border-l-[#CC5529] border-l-solid mb-[40px]">
                        Cricket is popular in Bangladesh. Many people follow it and support their favorite teams. It is one of the most loved sports in the country. BAGH Live has a dedicated section for cricket betting. The platform is easy to use and simple to understand.
                    </p>
                    <div className="pb-[40px]">
                        <div className="flex items-center gap-[12px]">
                            <div className="line-divider w-[50px] h-[2px] bg-[#CC5529]"></div>
                            <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[29px] text-center text-[#FAFAFA] ">Live Cricket Betting</h3>
                        </div>
                        <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] pt-[22px]">
                            Live betting on cricket enables players to place their bet while the game is still in action. It becomes more fun as users can make decisions depending on what's happening in the ongoing match.
                            <br /><br />
                            The odds change along the way, and therefore it provides an opportunity for making informed decisions.
                        </p>
                    </div>
                    <div className="pb-[40px]">
                        <div className="flex items-center gap-[12px]">
                            <div className="line-divider w-[50px] h-[2px] bg-[#CC5529]"></div>
                            <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[29px] text-center text-[#FAFAFA] ">Pre-Match Betting Options</h3>
                        </div>
                        <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] pt-[22px]">
                            Before-match betting allows you to place your bet prior to commencement of play. It is best suited for those users who enjoy analyzing the performances of teams and their players and the overall game scenario.
                            <br />
                            It is much more organized than live betting.
                        </p>
                    </div>
                    <div className="pb-[40px]">
                        <div className="flex items-center gap-[12px]">
                            <div className="line-divider w-[50px] h-[2px] bg-[#CC5529]"></div>
                            <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[29px] text-center text-[#FAFAFA] ">Competitive Odds and Markets</h3>
                        </div>
                        <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] pt-[22px]">
                            Competitive odds and a number of different betting options have been included in BAGH Live for the purpose of giving players different ways to bet according to their choice.
                            <br />
                            Odds displayed clearly make it easier for users to make their decisions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}