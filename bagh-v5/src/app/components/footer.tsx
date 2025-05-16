import Link from "next/link"
export default function Footer() {
    return <div className="max-w-[1440px] w-full flex flex-col md:flex-row flex-wrap lg:flex-nowrap  gap-[25px] lg:gap-[20px] justify-self-center justify-around p-[20px] border-b-1">
        <div className="column1">
            <img src="/BAGH.png" alt="logo" className="w-[179px] h-[116] pb-[20px]" />
            <strong className="font-bold text-[12px] leading-[21px] text-[#F9F8F8] font-['Inter']">Phone: <span className="font-normal text-[12px] leading-[21px] text-[#F9F8F8] font-['Inter']">+1 5589 55488 55</span></strong>
            <br />
            <strong className="font-bold text-[12px] leading-[21px] text-[#F9F8F8] font-['Inter']">Email: <span className="font-normal text-[12px] leading-[21px] text-[#F9F8F8] font-['Inter']">info@example.com</span></strong>
            <ul className="flex flex-nowrap gap-[10px] pt-[20px]">
                <li><Link href=""><img src="/link.png" alt="x" /></Link></li>
                <li><Link href=""><img src="/link-1.png" alt="facebook" /></Link></li>
                <li><Link href=""><img src="/link-2.png" alt="instagram" /></Link></li>
                <li><Link href=""><img src="/link-3.png" alt="linkedin" /></Link></li>
            </ul>
        </div>
        <div className="column2 ">
            <div className="title">
                <p className="font-bold text-[16px] leading-[19px] text-[#F9F8F8] font-['Inter']">Useful Links</p>
                <ul className="flex flex-col gap-[15px] pt-[15px]">
                    <li className="font-normal text-[14px] leading-[14px] text-[#F9F8F8] font-['Inter']">Home</li>
                    <li className="font-normal text-[14px] leading-[14px] text-[#F9F8F8] font-['Inter']">About us</li>
                    <li className="font-normal text-[14px] leading-[14px] text-[#F9F8F8] font-['Inter']">Services</li>
                    <li className="font-normal text-[14px] leading-[14px] text-[#F9F8F8] font-['Inter']">Terms of services</li>
                    <li className="font-normal text-[14px] leading-[14px] text-[#F9F8F8] font-['Inter']">Privacy policy</li>
                </ul>
            </div>
        </div>
        <div className="column3">
            <div className="title">
                <p className="font-bold text-[16px] leading-[19px] text-[#F9F8F8] font-['Inter']">Our Services</p>
                <ul className="flex flex-col gap-[15px] pt-[15px]">
                    <li className="font-normal text-[14px] leading-[14px] text-[#F9F8F8] font-['Inter']">Lorem Ipsum</li>
                    <li className="font-normal text-[14px] leading-[14px] text-[#F9F8F8] font-['Inter']">Lorem Ipsum</li>
                    <li className="font-normal text-[14px] leading-[14px] text-[#F9F8F8] font-['Inter']">Lorem Ipsum</li>
                    <li className="font-normal text-[14px] leading-[14px] text-[#F9F8F8] font-['Inter']">Lorem Ipsum</li>
                    <li className="font-normal text-[14px] leading-[14px] text-[#F9F8F8] font-['Inter']">Lorem Ipsum</li>
                </ul>
            </div>
        </div>
        <div className="column4 lg:w-[30%]">
            <p className="font-bold text-[16px] leading-[19px] text-[#F9F8F8] font-['Inter']">Our Newsletter</p>
            <p className="font-normal text-[12px] leading-[21px] text-[#F9F8F8] font-['Inter'] pt-[23px]">Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <div className="pt-[19px]">
                <form action="" className="flex gap-[12px]">
                    <input type="text" className="max-w-[272px] w-[full] h-[44px] bg-white border border-[rgba(33,37,41,0.2)]" />
                    <button className="w-[116px] h-[44px] px-[20px] py-[10px] gap-[10px] bg-[#F47521] ">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
}