import Link from "next/link";
import Image from "next/image";
export default function Section2() {
  return (
    <div
      className="max-w-[1440px] p-[15px] lg:p-[120px] lg:pt-0 flex flex-col gap-10 justify-self-center mx-auto"
      id="about"
    >
      <div className="p-[15px] m-auto">
        <p className="font-extrabold text-[36px] leading-[44px] text-[#E8E6E3] text-center mb-[10px]">
          <span>About</span>
        </p>
        <p className="not-italic font-normal text-[20px] leading-[24px] text-[#E8E6E3] text-center">
          BAGH is a new online gaming platform in Bangladesh. It is designed to
          offer a fun and safe gaming experience. It also provides top security
          to protect players. Players can enjoy many types of casino games. BAGH
          offers traditional table games, slots, and live dealer games for all
          players.
        </p>
        <p className="not-italic font-normal text-[20px] leading-[24px] text-[#E8E6E3] text-center">
          One of its standout features is its exclusive game collection. BAGH
          games are designed to deliver exciting gameplay, captivating graphics,
          and a real game experience. To deliver world-class entertainment to
          Bangladeshi players, BAGH casino site promises a secure and enjoyable
          experience for everyone to access their favorite games.
        </p>
        <p className="not-italic font-normal text-[20px] leading-[24px] text-[#E8E6E3] text-center">
          Discover the universe of BAGH games and indulge yourself in
          Bangladesh&apos;s new online betting experience.
        </p>
      </div>
      <div className="sm:flex m-auto py-[50px]">
        <div className="sm:w-full lg:w-[45%] sm:order-2 order-1">
          <Image
            src="/Cards1.webp"
            alt="Rich Game Variety"
            width={526}
            height={356}
            priority
            quality={100}
            className="m-auto"
          />
        </div>
        <div className="sm:w-full lg:w-[55%] sm:order-1 order-2 flex flex-col justify-center gap-[20px]">
          <p className="title not-italic font-bold text-[20px] leading-[30px] text-[#E8E6E3]">
            Rich Game Variety
          </p>
          <p className="italic font-normal text-[12px] leading-[24px] text-[#E8E6E3]">
            BAGH online casino site offers many games for all kinds of players.
            From slots to live dealer games. There is always something new to
            try. Every game is made to be fun and exciting. New games are added
            often so you always have choices.
          </p>
          <button className="box-border flex flex-row justify-center items-center py-[12px] gap-[10px] w-[100%] md:w-[216px] h-[52px] border border-[#E8E6E3] drop-shadow-[0px_4px_4px_#000000]">
            <Link 
              href="https://bagh.live/af/5pButO62/bagh55"
              title="Explore BAGH's rich game variety - slots, live dealer games and more"
              aria-label="Learn more about BAGH's extensive collection of casino games"
            >
              Know More
            </Link>{" "}
          </button>
        </div>
      </div>
      <div className="sm:flex m-auto py-[50px]">
        <div className="sm:w-full lg:w-[45%] sm:order-1 order-2">
          <Image
            src="/cards2.webp"
            alt="Exclusive Bonuses & Promotions"
            width={526}
            height={356}
            priority
            quality={100}
            className="m-auto"
          />
        </div>
        <div className="sm:w-full lg:w-[55%] sm:order-2 order-1 flex flex-col justify-center gap-[20px]">
          <p className="title not-italic font-bold text-[20px] leading-[30px] text-[#E8E6E3]">
            Exclusive Bonuses & Promotions
          </p>
          <p className="italic font-normal text-[12px] leading-[24px] text-[#E8E6E3]">
            At BAGH, thrilling bonuses and promotions are awaiting you. From the
            welcome reward to daily and weekly offers, there is something extra
            to look out for all the time. These bonuses provide you with
            additional winning opportunities and keep you playing longer. Watch
            for updates so you never miss an offer.
          </p>
          <button className="box-border flex flex-row justify-center items-center py-[12px] gap-[10px] w-[100%] md:w-[216px] h-[52px] border border-[#E8E6E3] drop-shadow-[0px_4px_4px_#000000] ">
            <Link 
              href="https://bagh.live/af/5pButO62/bagh55"
              title="Discover BAGH's exclusive bonuses and promotional offers"
              aria-label="Learn more about welcome bonuses, daily and weekly promotions at BAGH casino"
            >
              Know More
            </Link>
          </button>
        </div>
      </div>
      <div className="sm:flex m-auto py-[50px]">
        <div className="sm:w-full lg:w-[45%] sm:order-2 order-1">
          <Image
            src="/cards3.webp"
            alt="24/7 Customer Support"
            width={526}
            height={356}
            priority
            quality={100}
            className="m-auto"
          />
        </div>
        <div className="sm:w-full lg:w-[55%] sm:order-1 order-2 flex flex-col justify-center gap-[20px]">
          <p className="title not-italic font-bold text-[20px] leading-[30px] text-[#E8E6E3]">
            24/7 Customer Support
          </p>
          <p className="italic font-normal text-[12px] leading-[24px] text-[#E8E6E3]">
            Assistance is always within reach at BAGH. Our support staff stands
            by to assist you day and night. Get quick help when you need it.
            They are always ready to assist. Enjoy a smooth play at
            Bangladesh&apos;s best online casino.
          </p>
          <button className="box-border flex flex-row justify-center items-center py-[12px] gap-[10px] w-[100%] md:w-[216px] h-[52px] border border-[#E8E6E3] drop-shadow-[0px_4px_4px_#000000] ">
            <Link 
              href="https://bagh.live/af/5pButO62/bagh55"
              title="Get 24/7 customer support at BAGH casino"
              aria-label="Learn more about BAGH's round-the-clock customer service and support"
            >
              Know More
            </Link>
          </button>
        </div>
      </div>
      <div className="sm:flex m-auto py-[50px]">
        <div className="sm:w-full lg:w-[45%] sm:order-1 order-2">
          <Image
            src="/cards4.webp"
            alt="Safe and Fast Transactions"
            width={526}
            height={356}
            priority
            quality={100}
            className="m-auto"
          />
        </div>
        <div className="sm:w-full lg:w-[55%] sm:order-2 order-1 flex flex-col justify-center gap-[20px]">
          <p className="title not-italic font-bold text-[20px] leading-[30px] text-[#E8E6E3]">
            Safe and Fast Transactions
          </p>
          <p className="italic font-normal text-[12px] leading-[24px] text-[#E8E6E3]">
            Your security is paramount at BAGH Casino. We employ secure systems
            for holding your information and funds. Deposits and withdrawals are
            fast and convenient so you can play without a care. Have peace of
            mind with each transaction.
          </p>
          <button className="box-border flex flex-row justify-center items-center py-[12px] gap-[10px] w-[100%] md:w-[216px] h-[52px] border border-[#E8E6E3] drop-shadow-[0px_4px_4px_#000000] ">
            <Link 
              href="https://bagh.live/af/5pButO62/bagh55"
              title="Experience safe and fast transactions at BAGH casino"
              aria-label="Learn more about secure deposits, withdrawals and payment methods at BAGH"
            >
              Know More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
