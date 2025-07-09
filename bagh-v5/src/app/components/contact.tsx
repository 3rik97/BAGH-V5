import Image from 'next/image';

export default function Contact() {
  return (
    <div className="max-w-[1440px] lg:p-[90px] lg:pt-0 flex flex-col gap-10 justify-self-center mx-auto">
      <div className="p-[15px] m-auto">
        <p className="font-extrabold text-[36px] leading-[44px] text-[#E8E6E3] text-center mb-[10px]">
          <span>Contact</span>
        </p>
        <p className="not-italic font-normal text-[20px] leading-[24px] text-[#E8E6E3] text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="flex flex-wrap justify-self-center justify-center gap-[63px] items-start">
        <div className="flex flex-col justify-center gap-[38px]">
          {/* <div className="flex items-center gap-[20px]">
            <div className="icon">
              <img src="/address.svg" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="title">
                <p>Address</p>
              </div>
              <div className="content">
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
          </div> */}
          <div className="flex items-center gap-[20px]">
            <div className="icon">
              <Image src="/telephone.svg" alt="Phone icon" width={20} height={20} />
            </div>
            <div>
              <div className="title">
                <p>Call Us</p>
              </div>
              <div className="content">
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="icon">
              <Image src="/email.svg" alt="Email icon" width={20} height={20} />
            </div>
            <div>
              <div className="title ">
                <p>Email Us</p>
              </div>
              <div className="content">
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="message flex justify-center p-[20px] pt-0">
          <form
            action=" "
            className="flex flex-col flex-wrap gap-[24px] justify-center "
          >
            <div className="flex flex-row flex-wrap gap-[20px] ">
              <input
                type="text"
                placeholder="Name"
                className="w-[376px] md:w-full lg:w-[376px] h-[41px] bg-[rgba(232,230,227,0.2)] border border-[rgba(33,37,41,0.2)]"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="w-[376px] md:w-full lg:w-[376px]  h-[41px] bg-[rgba(232,230,227,0.2)] border border-[rgba(33,37,41,0.2)]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-[376px] md:w-full h-[41px] bg-[rgba(232,230,227,0.2)] border border-[rgba(33,37,41,0.2)]"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-[376px] md:w-full h-[146px] bg-[rgba(232,230,227,0.2)] border border-[rgba(33,37,41,0.2)] flex items-start"
            />
            <button className="w-[376px] h-[44px] bg-[#F47521] ">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
