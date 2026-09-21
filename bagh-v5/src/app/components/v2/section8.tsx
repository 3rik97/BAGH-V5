
import Link from "next/link"
import Image from "next/image"
export default function V2section8() {
    return (
        <section className="p-[20px] lg:p-0">
            <div className="max-w-[1320px] w-full m-auto items-center pt-[50px] lg:py-[187px]">
                <h2 className="font-['Montserrat'] font-extrabold text-[44px] leading-[54px] text-[#FAFAFA] text-center pb-[40px]">
                    BAGH Casino <span className="text-[#CC5529]">Exciting Bonuses</span>
                </h2>
                <div className="line-divider h-[2px] bg-[linear-gradient(90deg,rgba(255,86,37,0)_0%,#FF5625_50%,rgba(255,86,37,0)_100%)] mb-[40px]"></div>
                <div className="flex flex-wrap gap-[30px] pb-[40px]">
                    <div className="max-w-[420px] w-[420px] h-[180px] flex flex-col p-[20px] gap-[20px] bg-[#1A1C1C] border border-[rgba(102,102,102,0.2)] shadow-[0_0_12px_rgba(102,102,102,0.4)] rounded-[16px] items-center">

                        <h3 className="font-['Montserrat'] font-bold text-[20px] leading-[24px] text-center text-[#C7C7C7]">Fast Withdrawals</h3>
                        <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] text-center">
                            BAGH Casino offers fast withdrawals. Players can access their winnings quickly. There are no unnecessary delays when cashing out.
                        </p>

                    </div>
                    <div className="max-w-[420px] w-[420px] h-[180px] flex flex-col p-[20px] gap-[20px] bg-[#1A1C1C] border border-[rgba(102,102,102,0.2)] shadow-[0_0_12px_rgba(102,102,102,0.4)] rounded-[16px] items-center">

                        <h3 className="font-['Montserrat'] font-bold text-[20px] leading-[24px] text-center text-[#C7C7C7]">Mobile Optimization</h3>
                        <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] text-center">
                            The platform works well on mobile devices. BAGH players can enjoy smooth gameplay on smartphones and tablets. It runs smoothly on smaller screens without any issues.
                        </p>

                    </div>
                    <div className="max-w-[420px] w-[420px] h-[180px] flex flex-col p-[20px] gap-[20px] bg-[#1A1C1C] border border-[rgba(102,102,102,0.2)] shadow-[0_0_12px_rgba(102,102,102,0.4)] rounded-[16px] items-center">

                        <h3 className="font-['Montserrat'] font-bold text-[20px] leading-[24px] text-center text-[#C7C7C7]">Smooth User Experience</h3>
                        <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] text-center">
                            Everything on the platform is built to be simple. Pages load fast and are easy to use. Users can move between sections without getting confused.
                        </p>

                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="p-[20px] lg:pl-[40px] border-l-[6px] border-l-[#CC5529] border-l-solid mb-[40px] w-full lg:max-w-[50%] lg:w-[50%] flex flex-col gap-[12px] h-fit ">
                        <h3 className="font-['Montserrat'] font-bold text-[20px] leading-[24px] text-[#C7C7C7]">
                            Local Payment Methods
                        </h3>
                        <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] ">
                            BAGH Live supports popular payment methods in Bangladesh:
                        </p>
                        <ul className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] list-disc pl-[20px]">
                            <li>bKash</li>
                            <li>Nagad</li>
                            <li>Rocket</li>
                            <li>Bank transfer</li>
                            <li>Mobile banking services</li>
                        </ul>
                        <p className="font-['Inter'] font-normal text-[16px] leading-[19px] tracking-[2px] text-[#C7C7C7] ">
                            These options make deposits and withdrawals simple and familiar for local players.
                        </p>
                    </div>
                    <div className="p-[20px] w-full lg:max-w-[50%] lg:w-[50%] flex flex-row flex-wrap gap-[12px]">
                        <div className="flex w-full  lg:max-w-[304px] lg:w-[304px]  h-[76px] items-center border-[1px] border-solid border-[#CD562933] rounded-[12px]">
                            <Image src={"/v2/SVG/bkash.svg"} width={52} height={52} alt="payment" />
                            <p>bKash</p>
                        </div>
                        <div className="flex w-full  lg:max-w-[304px] lg:w-[304px]  h-[76px] items-center border-[1px] border-solid border-[#CD562933] rounded-[12px]">
                            <Image src={"/v2/SVG/Nagad.svg"} width={52} height={52} alt="payment" />
                            <p>Nagad</p>
                        </div>
                        <div className="flex w-full  lg:max-w-[304px] lg:w-[304px]  h-[76px] items-center border-[1px] border-solid border-[#CD562933] rounded-[12px]">
                            <Image src={"/v2/SVG/Rocket.svg"} width={52} height={52} alt="payment" />
                            <p>Rocket</p>
                        </div>
                        <div className="flex w-full  lg:max-w-[304px] lg:w-[304px] h-[76px] items-center border-[1px] border-solid border-[#CD562933] rounded-[12px]">
                            <Image src={"/v2/SVG/LocalBankTransfer.svg"} width={52} height={52} alt="payment" />
                            <p>Local Bank Transfer</p>
                        </div>
                        <div className="flex w-full  lg:max-w-[304px] lg:w-[304px] h-[76px] items-center border-[1px] border-solid border-[#CD562933] rounded-[12px]">
                            <Image src={"/v2/SVG/Mobilebankingservices.svg"} width={52} height={52} alt="payment" />
                            <p>Mobile banking services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}