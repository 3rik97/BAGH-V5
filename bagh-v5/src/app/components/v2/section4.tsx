import Image from "next/image"
import Link from "next/link"

export default function V2section4() {
    return (
        <section className="p-[20px] lg:p-0">
            <div className="max-w-[1320px] w-full m-auto items-center pt-[50px] lg:py-[187px]">
                <h2 className="font-['Montserrat'] font-extrabold text-[44px] leading-[54px] text-[#FAFAFA] text-center pb-[40px]">
                    BAGH Casino <span className="text-[#CC5529]">Top Casino Games</span>
                </h2>
                <div className="line-divider h-[2px] bg-[linear-gradient(90deg,rgba(255,86,37,0)_0%,#FF5625_50%,rgba(255,86,37,0)_100%)] mb-[40px]"></div>

                <div className="flex flex-wrap gap-[32px]">
                    {/* col1 */}
                    <div className="box-border w-[418px] bg-[#1A1C1C] border border-[rgba(102,102,102,0.2)] shadow-[0px_0px_12px_rgba(102,102,102,0.4)] rounded-[20px] overflow-hidden">
                        <Image src={"/v2/WEBP/SlotGames.webp"} height={418} width={440} alt="" className="w-[418px]"></Image>
                        <div className="p-[20px]">
                            <div className="flex items-center gap-[12px]">
                                <div className="line-divider w-[50px] h-[2px] bg-[#CC5529]"></div>
                                <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[29px] text-center text-[#FAFAFA] ">Slot Games</h3>
                            </div>

                            <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] pt-[22px]">
                                <Link href={"https://www.elonbet.live/slot"} target="_blank" className="text-[#CC5529]">Slot games</Link> are among the best features in BAGH Casino. There are numerous themes, designs, and styles of gameplay that you get to choose from here. Playing these slot machines requires very few skills because they are easy to understand, and thus suitable for everyone regardless of skill level.
                                <br /><br />
                                There are amazing graphics and great gameplay; you have an option to play for long or even take short sessions when playing them.
                            </p>
                        </div>
                    </div>

                    <div className="box-border w-[418px] bg-[#1A1C1C] border border-[rgba(102,102,102,0.2)] shadow-[0px_0px_12px_rgba(102,102,102,0.4)] rounded-[20px] overflow-hidden">
                        <Image src={"/v2/WEBP/TableGames.webp"} height={418} width={440} alt="" className="w-[418px]"></Image>
                        <div className="p-[20px]">
                            <div className="flex items-center gap-[12px]">
                                <div className="line-divider w-[50px] h-[2px] bg-[#CC5529]"></div>
                                <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[29px] text-center text-[#FAFAFA] ">Table Games</h3>
                            </div>

                            <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] pt-[22px]">
                                Table games give players a more classic casino feel. They are a bit more challenging and often need some strategy to play well. This makes them a good choice for players who enjoy using their skills while playing.
                                <br /><br />
                                The interface is neat and simple, providing the player with all he or she needs.
                            </p>
                        </div>
                    </div>

                    <div className="box-border w-[418px] bg-[#1A1C1C] border border-[rgba(102,102,102,0.2)] shadow-[0px_0px_12px_rgba(102,102,102,0.4)] rounded-[20px] overflow-hidden">
                        <Image src={"/v2/WEBP/LiveCasinoGames.webp"} height={418} width={440} alt="" className="w-[418px]"></Image>
                        <div className="p-[20px]">
                            <div className="flex items-center gap-[12px]">
                                <div className="line-divider w-[50px] h-[2px] bg-[#CC5529]"></div>
                                <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[29px] text-center text-[#FAFAFA] ">Live Casino Games</h3>
                            </div>

                            <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] pt-[22px]">
                                Live casino games provide a real-time element to the software. BAGH players can join a live table and play with real dealers online. This makes the experience feel more like a real casino.
                                <br /><br />
                                It is perfect for those players who like to watch live dealers and take part in action games.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}