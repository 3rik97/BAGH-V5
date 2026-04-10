import Link from "next/link"
import Image from "next/image"

export default function AboutContent2() {
    return (
        <section className="pt-[60px] lg:pt-[155px] bg-[#161516EB] bg-[url('/assets/bg.webp')] bg-blend-multiply bg-cover bg-center bg-no-repeat" >
            <div className="flex flex-wrap flex-col ">
                <div className="max-w-[1240px] m-auto mb-[60px] lg:mb-[155px]">
                    <h2 className="border-b-2 border-[rgba(232,230,227,0.12)] font-[Inter] font-black text-[28px] leading-[44px] text-[#E8E6E3] mb-[32px] px-[20px]">Who We Are</h2>
                    <div className="flex flex-wrap gap-[20px] justify-center mb-[32px]">
                        <div className="card bg-[#00000080] max-w-[400px] p-[24px]">
                            <Image src={"/assets/market.svg"} height={32} width={32} alt="BAGH55" className="mb-[24px]" />
                            <h3 className="font-[Inter] font-black text-[20px] leading-[24px] text-[#E8E6E3] mb-[12px]">Local Payment Support</h3>
                            <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[32px]">
                                We support bKash, Nagad, Rocket, and more, so your deposits and withdrawals are fast and stress-free. No hassle, just smooth play.
                            </p>
                        </div>
                        <div className="card bg-[#00000080] max-w-[400px] p-[24px]">
                            <Image src={"/assets/check.svg"} height={32} width={32} alt="BAGH55" className="mb-[24px]" />
                            <h3 className="font-[Inter] font-black text-[20px] leading-[24px] text-[#E8E6E3] mb-[12px]">Licensed and Secure</h3>
                            <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[32px]">
                                We’re licensed under Curacao and Anjouan eGaming, which means everything you see here is fair, secure, and professionally managed. Moreover, we always rank at the top of some reputable <Link href={"https://www.bj.live/"} className="text-blue-500" target="_blank">casino review sites</Link>.
                            </p>
                        </div>
                        <div className="card bg-[#00000080] max-w-[400px] p-[24px]">
                            <Image src={"/assets/card.svg"} height={32} width={32} alt="BAGH55" className="mb-[24px]" />
                            <h3 className="font-[Inter] font-black text-[20px] leading-[24px] text-[#E8E6E3] mb-[12px]">Games for Every Player</h3>
                            <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[32px]">
                                Cricket fan? Card games? Live dealer games? We’ve got all that and more. BAGH game lobby is loaded with games that match your style, and they all come with chances to <Link href={"https://www.bagh22.com/"} className="text-blue-500" target="_blank">win real money</Link>.
                            </p>
                        </div>
                        <div className="card bg-[#00000080] max-w-[400px] p-[24px]">
                            <Image src={"/assets/money 8.svg"} height={32} width={32} alt="BAGH55" className="mb-[24px]" />
                            <h3 className="font-[Inter] font-black text-[20px] leading-[24px] text-[#E8E6E3] mb-[12px]">Real Bonuses and Rewards</h3>
                            <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[32px]">
                                We know how to keep it exciting. From 277% Welcome Bonus, 560% Reload Bonus, 20% cashback, free spins, VIP perks, referral prizes, and more, there’s always something to claim.
                            </p>
                        </div>
                        <div className="card bg-[#00000080] max-w-[400px] p-[24px]">
                            <Image src={"/assets/heart.svg"} height={32} width={32} alt="BAGH55" className="mb-[24px]" />
                            <h3 className="font-[Inter] font-black text-[20px] leading-[24px] text-[#E8E6E3] mb-[12px]">Your Safety Comes First</h3>
                            <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[32px]">
                                Only players 18 years old and above are allowed; we strictly check IDs. And you can manage your limit to play that best fits you. More information on how we safeguard your data is available in our <Link href={"/privacy-policy"} className="text-blue-500" >Privacy Policy</Link>.
                            </p>
                        </div>
                        <div className="card bg-[#00000080] max-w-[400px] p-[24px]">
                            <Image src={"/assets/contact.svg"} height={32} width={32} alt="BAGH55" className="mb-[24px]" />
                            <h3 className="font-[Inter] font-black text-[20px] leading-[24px] text-[#E8E6E3] mb-[12px]">Join Us and Be Part of the BAGH Online Community!</h3>
                            <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[32px]">
                                Need help? The BAGH1 online support team is here 24/7, ready to assist in both Bangla and English, with fast replies, friendly service assistants.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0e0e0e83]  p-[20px] lg:py-[100px]">
                    <h2 className="border-b-2 border-[rgba(232,230,227,0.12)] font-[Inter] font-black text-[28px] leading-[44px] text-[#E8E6E3] mb-[12px] text-center w-fit m-auto">Join Us and Be Part of the BAGH Online Community!</h2>
                    <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-center text-[#E8E6E3] mb-[12px]">
                        At BAGH Live, it’s not just about playing. <br />
                        It&apos;s about belonging to a community growing every day across Bangladesh. <br />
                        We&apos;re here to deliver you the thrill, rewards, and excitement that&apos;s personal and local.
                    </p>
                    <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-center text-[#E8E6E3] mb-[12px]">
                        Join now, bet on your favorite game, and find out why everyone&apos;s talking about BAGH Online Casino.
                    </p>
                    <button className="w-full lg:w-[230px] h-[56px] py-[14px] px-0 flex items-center justify-center gap-[10px] bg-[#F47521] shadow-[0px_4px_4px_rgba(0,0,0,0.5)] cursor-pointer m-auto mb-[12px]"><Link href={"https://bagh.live/af/5pButO62/bagh55"} target="_blank">Join Now</Link></button>
                </div>
            </div>
        </section>
    )
}