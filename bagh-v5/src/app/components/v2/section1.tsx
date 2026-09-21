import Image from "next/image"
import Link from "next/link"

export default function V2section1() {
    return (
        <section className="p-[20px] lg:p-0">
            <div className="max-w-[1320px] w-full m-auto items-center pt-[50px] lg:py-[187px]">
                <h2 className="font-['Montserrat'] font-extrabold text-[44px] leading-[54px] text-[#FAFAFA] text-center pb-[40px]">
                    BAGH Live - <span className="text-[#CC5529]">Best Casino Site in Bangladesh</span>
                </h2>
                <div className="line-divider h-[2px] bg-[linear-gradient(90deg,rgba(255,86,37,0)_0%,#FF5625_50%,rgba(255,86,37,0)_100%)] mb-[40px]"></div>
                <div className="flex flex-col gap-[40px]">
                    <p className="font-['Inter'] font-semibold text-[20px] leading-[24px] text-center tracking-[1px] text-[#FAFAFA]">
                        The <Link href='/about' className="text-[#CC5529]">BAGH Live</Link> platform is designed to be simple and easy to use.
                    </p>
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="p-[20px] lg:pl-[40px] border-l-[6px] border-l-[#CC5529] border-l-solid w-full lg:w-[50%]">
                            <p className="font-['Inter'] font-normal text-[16px] leading-[24px] tracking-[0.01em] text-[#C7C7C7]">
                                It gives players a smooth experience. The design is clean and easy to use. BAGH players can quickly find what they need.
                            </p>
                            <p className="font-['Inter'] font-normal text-[16px] leading-[24px] tracking-[0.01em] text-[#C7C7C7]">
                                It becomes easy for users to switch from slot games to live casinos, sports betting on cricket, and bonus sections. All these are presented in an organized manner and will be suitable even for new players.
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:grid lg:grid-rows-2 grid-cols-2 gap-[20px] w-full lg:w-[50%]">
                            <div className="w-full flex items-center justify-center gap-[12px] border-[1px] border-[#FF450033] rounded-[8px] px-[36px] py-[12px]">
                                <Image src={"/v2/SVG/slotgames.svg"} height={48} width={48} alt="bagh" />
                                <p>Slot Games</p>
                            </div>
                            <div className="w-full flex items-center justify-center gap-[12px] border-[1px] border-[#FF450033] rounded-[8px] px-[36px] py-[12px]">
                                <Image src={"/v2/SVG/LiveGames.svg"} height={48} width={65} alt="bagh" />
                                <p>Live Games</p>
                            </div>
                            <div className="w-full flex items-center justify-center gap-[12px]  border-[1px] border-[#FF450033] rounded-[8px] px-[36px] py-[12px]">
                                <Image src={"/v2/SVG/CricketGames.svg"} height={48} width={48} alt="bagh" />
                                <p>Cricket Sections</p>
                            </div>
                            <div className="w-full flex items-center justify-center gap-[12px]  border-[1px] border-[#FF450033] rounded-[8px] px-[36px] py-[12px]">
                                <Image src={"/v2/SVG/Icon.svg"} height={48} width={48} alt="bagh" />
                                <p>Bonus Sections</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[40px] p-10 bg-[rgba(25,26,26,0.4)] border border-[rgba(255,69,0,0.2)] rounded-2xl items-center">
                        <div className="w-[40px]">
                            <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1303_1387)">
                                    <path d="M36.1232 43.75C37.1232 44.75 38.4147 45.2396 39.9979 45.2188C41.5811 45.1979 42.7477 44.625 43.4976 43.5L57.4965 22.5L36.4982 36.5C35.3733 37.25 34.7796 38.3958 34.7171 39.9375C34.6546 41.4792 35.1233 42.75 36.1232 43.75ZM39.9979 15C42.456 15 44.8204 15.3437 47.0911 16.0312C49.3617 16.7188 51.497 17.75 53.4968 19.125L48.7472 22.125C47.3723 21.4167 45.9453 20.8854 44.4663 20.5312C42.9873 20.1771 41.4978 20 39.9979 20C34.4567 20 29.7384 21.9479 25.8428 25.8438C21.9473 29.7396 19.9996 34.4583 19.9996 40C19.9996 41.75 20.2391 43.4792 20.7183 45.1875C21.1974 46.8958 21.8744 48.5 22.7494 50H57.2465C58.2047 48.4167 58.9026 46.7708 59.3401 45.0625C59.7775 43.3542 59.9963 41.5833 59.9963 39.75C59.9963 38.25 59.8192 36.7917 59.465 35.375C59.1109 33.9583 58.5797 32.5833 57.8714 31.25L60.8712 26.5C62.1211 28.4583 63.1106 30.5417 63.8397 32.75C64.5688 34.9583 64.9542 37.25 64.9958 39.625C65.0375 42 64.7667 44.2708 64.1834 46.4375C63.6001 48.6042 62.746 50.6667 61.6211 52.625C61.1628 53.375 60.5379 53.9583 59.7463 54.375C58.9547 54.7917 58.1214 55 57.2465 55H22.7494C21.8744 55 21.0412 54.7917 20.2496 54.375C19.458 53.9583 18.833 53.375 18.3747 52.625C17.2915 50.75 16.4582 48.7604 15.8749 46.6562C15.2916 44.5521 15 42.3333 15 40C15 36.5417 15.6562 33.3021 16.9686 30.2812C18.281 27.2604 20.0725 24.6146 22.3431 22.3438C24.6138 20.0729 27.2698 18.2812 30.3112 16.9688C33.3526 15.6563 36.5815 15 39.9979 15Z" fill="#CD5629" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_1303_1387" x="0" y="0" width="80" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="7.5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.270588 0 0 0 0 0 0 0 0 0.4 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1303_1387" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1303_1387" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <p className="font-['Inter'] italic font-light text-[16px] leading-[19px] tracking-[1px] text-[#C7C7C7]">
                            The other reason why it is referred to as the best casino website in Bangladesh is the fact that it is very stable. It has fast-loading pages with no downtime at all.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}