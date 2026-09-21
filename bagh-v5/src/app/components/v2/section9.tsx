import Link from "next/link"
import Image from "next/image"
export default function V2section8() {
    return (
        <section className="p-[20px] lg:p-0">
            <div className="max-w-[1320px] w-full m-auto items-center pt-[50px] lg:py-[187px]">
                <h2 className="font-['Montserrat'] font-extrabold text-[44px] leading-[54px] text-[#FAFAFA] text-center pb-[40px]">
                    BAGH Casino <span className="text-[#CC5529]">Licensing, Fair Play, and Security</span>
                </h2>
                <div className="line-divider h-[2px] bg-[linear-gradient(90deg,rgba(255,86,37,0)_0%,#FF5625_50%,rgba(255,86,37,0)_100%)] mb-[40px]"></div>
                <div className="flex flex-wrap gap-[20px] mb-[40px]">
                    <div className="p-[20px] gap-[20px] lg:max-w-[650px] w-full h-[173px] bg-[#1A1C1C] border border-[rgba(102,102,102,0.2)] shadow-[0_0_12px_rgba(102,102,102,0.4)] rounded-[16px]">
                        <div className="flex items-center  pb-[20px]">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.9 37.1L39.2 25.8L36.35 22.95L27.9 31.4L23.7 27.2L20.85 30.05L27.9 37.1ZM30 50C25.3667 48.8333 21.5417 46.175 18.525 42.025C15.5083 37.875 14 33.2667 14 28.2V16L30 10L46 16V28.2C46 33.2667 44.4917 37.875 41.475 42.025C38.4583 46.175 34.6333 48.8333 30 50Z" fill="#CC5529" />
                            </svg>
                            <h3 className="font-['Inter'] font-bold text-[16px] leading-[22px] tracking-[0.02em] text-[#EBEBEB] [text-shadow:0px_10px_15px_rgba(107,33,168,0.1),0px_4px_6px_rgba(107,33,168,0.1)] backdrop-blur-[2px]">Licensed Platform</h3>
                        </div>
                        <p className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[0.02em] text-[#FAFAFA] [text-shadow:0px_10px_15px_rgba(107,33,168,0.1),0px_4px_6px_rgba(107,33,168,0.1)] backdrop-blur-[2px]">
                            BAGH Casino operates as a licensed platform, following proper gaming standards to ensure safe and reliable operation.
                        </p>
                    </div>
                    <div className="p-[20px] gap-[20px] lg:max-w-[650px] w-full h-[173px] bg-[#1A1C1C] border border-[rgba(102,102,102,0.2)] shadow-[0_0_12px_rgba(102,102,102,0.4)] rounded-[16px]">
                        <div className="flex items-center  pb-[20px]">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 49V45H28V22.65C27.1333 22.35 26.3833 21.8833 25.75 21.25C25.1167 20.6167 24.65 19.8667 24.35 19H18L24 33C24 34.6667 23.3167 36.0833 21.95 37.25C20.5833 38.4167 18.9333 39 17 39C15.0667 39 13.4167 38.4167 12.05 37.25C10.6833 36.0833 10 34.6667 10 33L16 19H12V15H24.35C24.75 13.8333 25.4667 12.875 26.5 12.125C27.5333 11.375 28.7 11 30 11C31.3 11 32.4667 11.375 33.5 12.125C34.5333 12.875 35.25 13.8333 35.65 15H48V19H44L50 33C50 34.6667 49.3167 36.0833 47.95 37.25C46.5833 38.4167 44.9333 39 43 39C41.0667 39 39.4167 38.4167 38.05 37.25C36.6833 36.0833 36 34.6667 36 33L42 19H35.65C35.35 19.8667 34.8833 20.6167 34.25 21.25C33.6167 21.8833 32.8667 22.35 32 22.65V45H50V49H10ZM39.25 33H46.75L43 24.3L39.25 33ZM13.25 33H20.75L17 24.3L13.25 33ZM30 19C30.5667 19 31.0417 18.8083 31.425 18.425C31.8083 18.0417 32 17.5667 32 17C32 16.4333 31.8083 15.9583 31.425 15.575C31.0417 15.1917 30.5667 15 30 15C29.4333 15 28.9583 15.1917 28.575 15.575C28.1917 15.9583 28 16.4333 28 17C28 17.5667 28.1917 18.0417 28.575 18.425C28.9583 18.8083 29.4333 19 30 19Z" fill="#CC5529" />
                            </svg>

                            <h3 className="font-['Inter'] font-bold text-[16px] leading-[22px] tracking-[0.02em] text-[#EBEBEB] [text-shadow:0px_10px_15px_rgba(107,33,168,0.1),0px_4px_6px_rgba(107,33,168,0.1)] backdrop-blur-[2px]">Fair Gaming System</h3>
                        </div>
                        <p className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[0.02em] text-[#FAFAFA] [text-shadow:0px_10px_15px_rgba(107,33,168,0.1),0px_4px_6px_rgba(107,33,168,0.1)] backdrop-blur-[2px]">
                            A fair gaming system ensures that all games operate properly and consistently, giving players confidence in the experience.
                        </p>
                    </div>
                    <div className="p-[20px] gap-[20px] lg:max-w-[650px] w-full lg:h-[173px] bg-[#1A1C1C] border border-[rgba(102,102,102,0.2)] shadow-[0_0_12px_rgba(102,102,102,0.4)] rounded-[16px]">
                        <div className="flex items-center  pb-[20px]">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.75 50C17.7188 50 16.8359 49.627 16.1016 48.881C15.3672 48.1349 15 47.2381 15 46.1905V27.1429C15 26.0952 15.3672 25.1984 16.1016 24.4524C16.8359 23.7064 17.7188 23.3333 18.75 23.3333H20.625V19.5238C20.625 16.8889 21.5391 14.6429 23.3672 12.7857C25.1953 10.9286 27.4062 10 30 10C32.5938 10 34.8047 10.9286 36.6328 12.7857C38.4609 14.6429 39.375 16.8889 39.375 19.5238V23.3333H41.25C42.2812 23.3333 43.1641 23.7064 43.8984 24.4524C44.6328 25.1984 45 26.0952 45 27.1429V46.1905C45 47.2381 44.6328 48.1349 43.8984 48.881C43.1641 49.627 42.2812 50 41.25 50H18.75ZM30 40.4762C31.0312 40.4762 31.9141 40.1032 32.6484 39.3571C33.3828 38.6111 33.75 37.7143 33.75 36.6667C33.75 35.619 33.3828 34.7222 32.6484 33.9762C31.9141 33.2302 31.0312 32.8571 30 32.8571C28.9688 32.8571 28.0859 33.2302 27.3516 33.9762C26.6172 34.7222 26.25 35.619 26.25 36.6667C26.25 37.7143 26.6172 38.6111 27.3516 39.3571C28.0859 40.1032 28.9688 40.4762 30 40.4762ZM24.375 23.3333H35.625V19.5238C35.625 17.9365 35.0781 16.5873 33.9844 15.4762C32.8906 14.3651 31.5625 13.8095 30 13.8095C28.4375 13.8095 27.1094 14.3651 26.0156 15.4762C24.9219 16.5873 24.375 17.9365 24.375 19.5238V23.3333Z" fill="#CC5529" />
                            </svg>

                            <h3 className="font-['Inter'] font-bold text-[16px] leading-[22px] tracking-[0.02em] text-[#EBEBEB] [text-shadow:0px_10px_15px_rgba(107,33,168,0.1),0px_4px_6px_rgba(107,33,168,0.1)] backdrop-blur-[2px]">Data Securitym</h3>
                        </div>
                        <p className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[0.02em] text-[#FAFAFA] [text-shadow:0px_10px_15px_rgba(107,33,168,0.1),0px_4px_6px_rgba(107,33,168,0.1)] backdrop-blur-[2px]">
                            Strong security systems help protect user data and transactions. This keeps everything safe while players use the platform. It creates a secure environment for everyone.
                        </p>
                    </div>
                    <div className="p-[20px] gap-[20px] lg:max-w-[650px] w-full lg:h-[173px] bg-[#1A1C1C] border border-[rgba(102,102,102,0.2)] shadow-[0_0_12px_rgba(102,102,102,0.4)] rounded-[16px]">
                        <div className="flex items-center  pb-[20px]">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38 50C35.2333 50 32.875 49.025 30.925 47.075C28.975 45.125 28 42.7667 28 40C28 37.2333 28.975 34.875 30.925 32.925C32.875 30.975 35.2333 30 38 30C40.7667 30 43.125 30.975 45.075 32.925C47.025 34.875 48 37.2333 48 40C48 42.7667 47.025 45.125 45.075 47.075C43.125 49.025 40.7667 50 38 50ZM28 50C23.3667 48.8333 19.5417 46.175 16.525 42.025C13.5083 37.875 12 33.2667 12 28.2V16L28 10L44 16V27.35C43.1333 26.9167 42.1583 26.5833 41.075 26.35C39.9917 26.1167 38.9667 26 38 26C34.1333 26 30.8333 27.3667 28.1 30.1C25.3667 32.8333 24 36.1333 24 40C24 42.0667 24.3917 43.9333 25.175 45.6C25.9583 47.2667 26.95 48.7167 28.15 49.95C28.1167 49.95 28.0917 49.9583 28.075 49.975C28.0583 49.9917 28.0333 50 28 50ZM38 40C38.8333 40 39.5417 39.7083 40.125 39.125C40.7083 38.5417 41 37.8333 41 37C41 36.1667 40.7083 35.4583 40.125 34.875C39.5417 34.2917 38.8333 34 38 34C37.1667 34 36.4583 34.2917 35.875 34.875C35.2917 35.4583 35 36.1667 35 37C35 37.8333 35.2917 38.5417 35.875 39.125C36.4583 39.7083 37.1667 40 38 40ZM38 46C39.0333 46 39.9833 45.7583 40.85 45.275C41.7167 44.7917 42.4167 44.15 42.95 43.35C42.2167 42.9167 41.4333 42.5833 40.6 42.35C39.7667 42.1167 38.9 42 38 42C37.1 42 36.2333 42.1167 35.4 42.35C34.5667 42.5833 33.7833 42.9167 33.05 43.35C33.5833 44.15 34.2833 44.7917 35.15 45.275C36.0167 45.7583 36.9667 46 38 46Z" fill="#CC5529" />
                            </svg>

                            <h3 className="font-['Inter'] font-bold text-[16px] leading-[22px] tracking-[0.02em] text-[#EBEBEB] [text-shadow:0px_10px_15px_rgba(107,33,168,0.1),0px_4px_6px_rgba(107,33,168,0.1)] backdrop-blur-[2px]">Responsible Gaming</h3>
                        </div>
                        <p className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[0.02em] text-[#FAFAFA] [text-shadow:0px_10px_15px_rgba(107,33,168,0.1),0px_4px_6px_rgba(107,33,168,0.1)] backdrop-blur-[2px]">
                            BAGH Live supports responsible gaming. It encourages players to keep a balanced way of playing. It also provides simple guidance to help users play wisely.
                        </p>
                    </div>
                </div>
                <p className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[0.02em] text-[#FAFAFA] [text-shadow:0px_10px_15px_rgba(107,33,168,0.1),0px_4px_6px_rgba(107,33,168,0.1)] backdrop-blur-[2px] text-center">
                    These features strengthen its position as the best casino site in Bangladesh.
                </p>
            </div>
        </section>
    )
}