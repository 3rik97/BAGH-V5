import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export async function generateMetadata(): Promise<Metadata> {

    return {
        title: "BAGH Live Privacy Policy for a Safe and Secure Online Play",
        description: "Read the BAGH Live Privacy Policy and learn how we protect your data. At BAGH Online Casino we prioritize your safety while giving you a smooth experience",
        alternates: {
            canonical: "https://bagh55.com/privacy-policy",

        },
        openGraph: {
            title: "BAGH Live Privacy Policy for a Safe and Secure Online Play",
            description: "Read the BAGH Live Privacy Policy and learn how we protect your data. At BAGH Online Casino we prioritize your safety while giving you a smooth experience",
            siteName: "BAGH55",
            images: [
                {
                    url: "/logo.png",
                    width: 600,
                    height: 400,
                    alt: "BAGH55 Online Bangladesh",
                },
            ],
            type: "website",
        },
        twitter: {
            title: "BAGH Live Privacy Policy for a Safe and Secure Online Play",
            description: "Read the BAGH Live Privacy Policy and learn how we protect your data. At BAGH Online Casino we prioritize your safety while giving you a smooth experience",
            images: [
                {
                    url: "/logo.png",
                    width: 600,
                    height: 400,
                    alt: "BAGH55 Online Bangladesh",
                },
            ],
        },
    };
}


export default function PrivacyPolicy() {
    return (
        <section className="hero pt-[72px]">
            <Image src={"/assets/policy.webp"} height={280} width={1920} alt="BAGH55" className="w-full m-auto hidden lg:block" />
            <Image src={"/assets/policymobile.webp"} height={280} width={1920} alt="BAGH55" className="w-full m-auto block lg:hidden" />
            <div className="max-w-[940px] m-auto p-[20px] lg:p-[40px]">
                <h1 className="font-inter font-black text-[32px] leading-[39px] text-[#E8E6E3] mb-[12px]">BAGH Privacy Policy</h1>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    At <Link href={"/about-us"} className="text-blue-500">BAGH Live Casino</Link>, we promise to respect your privacy. Adhering to the Digital Security Act 2018 and relevant data protection regulations, we this Privacy Policy describes how we collect, use, store, and secure your personal information. Using our services indicates you acknowledge and agree with the requirements mentioned below.
                </p>
                <h2 className="font-inter font-black text-[20px] leading-[24px] text-[#E8E6E3]">1. Policy Overview</h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    This policy covers every user of BAGH Live. Being transparent about how we treat your personal information and your rights as a user in Bangladesh helps us to establish a secure and reliable setting. This will give you an overview of how we keep our position as one of the top casinos in the <Link href={"https://www.bj.live/"} className="text-blue-500" target="_blank">trusted review websites.</Link>
                </p>
                <h2 className="font-inter font-black text-[20px] leading-[24px] text-[#E8E6E3]">2. Information Collected</h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    We gather some personal information, like your full name, mobile number, email address, date of birth, and payment information when you <Link href={"bagh.live/af/5pButO62/bagh55"} target="_blank" className="text-blue-500">sign up</Link> for the BAGH Betting site. Particularly in conformance with age restriction guidelines, we could also need a national ID or governmental documents to confirm your identification. Furthermore, automatically collected to assist us in improving your experience are technical details like your IP address, device information, and browsing activity on our site.
                </p>
                <h2 className="font-inter font-black text-[20px] leading-[24px] text-[#E8E6E3]">3. How the Data is Used</h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    Your data helps us process payments via safe channels like bKash, Nagad, and Rocket, generate and manage your player account, and send you service alerts or marketing campaigns. It also helps us to identify suspicious behavior, prevent fraud on your account, and guarantee complete adherence to Bangladeshi rules and legislation. Your data helps us to enhance our platform, offer a customized user experience, and provide customer service. Only if you have opted in will marketing communications be sent; you may opt out at any moment.
                </p>
                <h2 className="font-inter font-black text-[20px] leading-[24px] text-[#E8E6E3]">4. Data Sharing and Third Parties</h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    We do not rent or sell your information. However, we might transfer some information to authorized third parties like payment processors, ID verification companies, and government bodies if we are bound to do so by law. We also transfer data to regulatory bodies in compliance with checks and reporting for financial purposes.
                </p>
                <h2 className="font-inter font-black text-[20px] leading-[24px] text-[#E8E6E3]">5. Data Protection and Security</h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    To safeguard your data, we adhere to industry norms for security procedures. Included here are two-step verification, frequent system audits, SSL encryption, and secure server hosting. Restricted access to protected databases houses your personal information; our systems are constantly monitored to find and stop any kind of unwanted access or misapplication.
                </p>
                <h2 className="font-inter font-black text-[20px] leading-[24px] text-[#E8E6E3]">6. Cookies and Tracking Technologies</h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    Cookies help our website give a more seamless experience. These tiny files record your preferences, ensure safe sessions, and track your interactions with our features. Managing or disabling cookies in your browser preferences is possible. But disabling cookies could degrade the usability and performance of some features on <Link href={"https://www.bagh77.fun/"} target="_blank" className="text-blue-500">BAGH Online Casino.</Link>
                </p>
                <h2 className="font-inter font-black text-[20px] leading-[24px] text-[#E8E6E3]">7. Data Retention</h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    Your personal data collected upon the BAGH Casino login and registration process is stored until your account is active or as needed by Bangladeshi legislation. Personal data and dormant accounts are stored off-site and erased securely after a determined retention period, apart from where needed for fraud prevention, compliance audits, or judicial requests.
                </p>
                <h2 className="font-inter font-black text-[20px] leading-[24px] text-[#E8E6E3]">8. User Rights</h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    You, as a Bangladeshi user, have the right to ask for access to the personal data we have about you, ask for corrections if information is incorrect, and request deletion of your data if no longer required. At any moment, you can also revoke your authorization to get marketing communications. Please provide proof of identity to our support staff if you want to use any of these rights.
                </p>
                <h2 className="font-inter font-black text-[20px] leading-[24px] text-[#E8E6E3]">9. Age Restriction</h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    Strictly forbids those under the age of 18 from using BAGH Online Casino services. To verify a user&apos;s age, we conduct age verification processes and might ask for supporting documents, including a National ID. Accounts found to be held by minors will be closed permanently.
                </p>
                <h2 className="font-inter font-black text-[20px] leading-[24px] text-[#E8E6E3]">10. Changes to the Policy</h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    From time to time, we may amend this Privacy Policy to match legislative developments or improvements to our <Link href="/#" className="text-blue-500">BAGH service.</Link> With a modified effective date, all changes will be published on our website. Users will be informed of any major changes either via direct alerts or banners on our site.
                </p>
                <h2 className="font-inter font-black text-[20px] leading-[24px] text-[#E8E6E3]">11. Contact Information</h2>
                <p className="font-['Inter'] font-normal text-[16px] leading-[19px] text-left text-[#E8E6E3] mb-[24px]">
                    Should you have any queries regarding this Privacy Policy, or if you want to exercise your rights under this policy. You can visit our BAGH Help Page or contact the <Link href="https://bagh44.com/" target="_blank" className="text-blue-500">BAGH1</Link> support team for any concerns regarding your account, funds, and information.
                </p>
            </div>
        </section>
    )
}