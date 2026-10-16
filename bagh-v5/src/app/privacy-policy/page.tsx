import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export async function generateMetadata(): Promise<Metadata> {

    return {
        title: "BAGH Live Privacy Policy for a Safe and Secure Online Play",
        description: "Read the BAGH Live Privacy Policy and learn how we protect your data. At BAGH Online Casino we prioritize your safety while giving you a smooth experience",
        alternates: {
            canonical: "https://www.bagh55.com/privacy-policy",

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

        <section className="h-[280px] lg:h-[auto]   bg-cover bg-center bg-no-repeat">
            <Image src={"/v2/WEBP/privacy.webp"} width={1920} height={640} alt="bagh hero" className=" w-full hidden lg:block"></Image>
            <Image src={"/v2/WEBP/privacymobile.webp"} width={1920} height={640} alt="bagh hero" className=" w-full block lg:hidden pt-[60px]"></Image>
            <div className="max-w-[1320px] m-auto p-[20px] lg:py-[80px]">
                <h1 className="font-montserrat font-extrabold text-[40px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    Baji BAGH <span className="text-[#CC5529]">Privacy Policy</span>
                </h1>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[40px]">
                    <Link href='https://www.bagh55.com/' className="text-[#CC5529] underline">Baji BAGH</Link> Bangladesh is committed to protecting user privacy. It works to keep a safe and secure online gaming space for players in Bangladesh. Personal data safety is taken very seriously. Every effort is made to handle user information with care. This Privacy Policy explains how data is collected. It also explains how data is used and stored on the platform. Users can learn about their rights through this policy. The goal is to provide a smooth and trusted gaming experience in Bangladesh.
                </p>
                <h2 className="font-montserrat font-extrabold text-[36px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    Information We Collect and <span className="text-[#CC5529]">How It Is Used on BAGH Live</span>
                </h2>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7]">
                    We collect basic user information to provide a smooth and personalized experience on BAGH Live. This helps us manage accounts, process transactions, and improve overall platform performance for local users.
                    <br /><br />
                    When users register at BAGH App, we may collect personal details such as name, email address, phone number, and login credentials. We may also collect payment-related information to handle deposits and withdrawals safely and efficiently using available payment options in Bangladesh.
                    <br /><br />
                    We use this information for several important purposes, including:
                </p>
                <ul className="font-inter font-bold text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] list-disc pl-[20px] pb-[24px]">
                    <li>Create and manage user accounts</li>
                    <li>Support secure BAGH Login access</li>
                    <li>Process payments using local options</li>
                    <li>Improve services and platform features</li>
                    <li>Provide customer support</li>
                </ul>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[40px]">
                    This data is collected only to improve service quality and ensure a better user experience on Baji BAGH.
                </p>
                <h2 className="font-montserrat font-extrabold text-[36px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    <span className="text-[#CC5529]">How We Protect</span> Your Personal Data
                </h2>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[40px]">
                    Baji Bagh Bangladesh uses strong security systems to protect all personal data. Information shared during registration or BAGH Login is secured.
                    <br /><br />
                    We apply multiple layers of security at BAGH, including encrypted data transmission, secure servers, and restricted access to sensitive information. Only authorized systems and personnel can access limited data when necessary.
                    <br /><br />
                    BAGH Casino checks its systems often to keep users safe in Bangladesh. Updates are done on a regular basis. This helps protect personal data. It also keeps the platform secure at all times.
                </p>
                <h2 className="font-montserrat font-extrabold text-[36px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    Cookies and Tracking Technologies Policy
                </h2>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    Baji BAGH uses cookies to improve how the website works. These cookies help the site run smoothly for users. They remember user choices and settings. This makes it easier to move around the platform. Cookies also help improve the experience for users in Bangladesh after BAGH Login.
                </p>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7]">
                    Cookies are mainly used for:
                </p>
                <ul className="font-inter font-bold text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] list-disc pl-[20px] pb-[24px]">
                    <li>
                        Keeping users logged in securely
                    </li>
                    <li>
                        Saving game settings and preferences
                    </li>
                    <li>
                        Analyzing website performance
                    </li>
                    <li>
                        Improving loading speed and usability
                    </li>
                </ul>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[40px]">
                    BAGH Casino checks its systems often to keep users safe in Bangladesh. Updates are done on a regular basis. This helps protect personal data. It also keeps the platform secure at all times.
                </p>
                <h2 className="font-montserrat font-extrabold text-[36px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    <span className="text-[#CC5529]">BAGH Casino Data Sharing</span> and Third-Party Services
                </h2>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[40px]">
                    While at <Link href={"https://www.bagh77.fun/"} target="_blank" className="text-[#CC5529] underline">BAGH Casino</Link>, user privacy is our priority; therefore, we do not share any personal details with any third party. At times, there is a need to share some amount of data with the service providers.
                    <br /><br />
                    These third parties may include payment processors that support local transactions, security providers, and technical service partners.
                </p>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7]">
                    Important points about data sharing:
                </p>
                <ul className="font-inter font-bold text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] list-disc pl-[20px] pb-[24px]">
                    <li>
                        Data is shared only when necessary
                    </li>
                    <li>
                        Partners must follow strict confidentiality rules
                    </li>
                    <li>
                        Information is used only for service-related purposes
                    </li>
                    <li>
                        Security standards are maintained at all times
                    </li>
                </ul>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[40px]">
                    BAGH Live Bangladesh ensures that all third-party partners handle data responsibly and securely.
                </p>
                <h2 className="font-montserrat font-extrabold text-[36px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    <span className="text-[#CC5529]">User Rights</span> and Data Control Options
                </h2>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[40px]">
                    Users in Bangladesh have full control over their personal data on Baji BAGH. We believe in transparency and allow users to manage their information easily.
                </p>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7]">
                    Users can:
                </p>
                <ul className="font-inter font-bold text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] list-disc pl-[20px] pb-[24px]">
                    <li>
                        View their personal account information
                    </li>
                    <li>
                        Update or correct details when needed
                    </li>
                    <li>
                        Request account deletion if required
                    </li>
                    <li>
                        Manage communication preferences
                    </li>
                </ul>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[40px]">
                    To manage data, users can log into their account using <Link href={"https://bagh44.com/"} target="_blank" className="text-[#CC5529] underline">BAGH Login</Link>, go to settings, and make necessary changes. Support is also available for additional assistance.
                </p>
                <h2 className="font-montserrat font-extrabold text-[36px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    <span className="text-[#CC5529]">Account Security</span> and User Responsibility
                </h2>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    While Baji BAGH provides strong security systems, users also play an important role in protecting their accounts.
                    <br /><br />
                    It is important to keep BAGH Login details private and secure at all times. Users should avoid sharing passwords or account access with others.
                </p>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7]">
                    To improve account safety, users should:
                </p>
                <ul className="font-inter font-bold text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] list-disc pl-[20px] pb-[24px]">
                    <li>
                        Use strong and unique passwords
                    </li>
                    <li>
                        Avoid sharing login credentials
                    </li>
                    <li>
                        Log out after using shared devices
                    </li>
                    <li>
                        Report any suspicious activity immediately
                    </li>
                </ul>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[40px]">
                    These steps help ensure a safer gaming experience for BAGH users in Bangladesh.
                </p>
                <h2 className="font-montserrat font-extrabold text-[36px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    Payment Information and <span className="text-[#CC5529]">Transaction Safety</span>
                </h2>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    All financial transactions on Baji BAGH are processed through secure systems designed to protect user funds and personal information.
                    <br /><br />
                    We use encrypted payment channels and trusted processing systems to ensure safe deposits and withdrawals, including options suitable for Bangladeshi users where available.
                </p>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7]">
                    Key security features include:
                </p>
                <ul className="font-inter font-bold text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] list-disc pl-[20px] pb-[24px]">
                    <li>
                        Secure payment gateways
                    </li>
                    <li>
                        Encrypted financial data transfer
                    </li>
                    <li>
                        Fraud detection systems
                    </li>
                    <li>
                        Fast and reliable processing
                    </li>
                </ul>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[40px]">
                    Users are advised to use only the BAGH Live <Link href={"https://www.bagh55.com/about"} className="text-[#CC5529] underline">official payment methods</Link> provided on the platform.
                </p>
                <h2 className="font-montserrat font-extrabold text-[36px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    Data Retention and <span className="text-[#CC5529]">Storage Policy</span>
                </h2>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    User data is stored as long as it is required to offer services or to fulfill any legal requirements within Bangladesh and other relevant territories. Data that is not required is securely destroyed or made anonymous.
                    <br /><br />
                    BAGH Live data storage is managed carefully to maintain both system efficiency and user privacy. Inactive accounts may be reviewed periodically.
                </p>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7]">
                    The main goals of our data retention policy are:
                </p>
                <ul className="font-inter font-bold text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] list-disc pl-[20px] pb-[24px]">
                    <li>
                        Maintain service quality
                    </li>
                    <li>
                        Protect user privacy
                    </li>
                    <li>
                        Improve system performance
                    </li>
                    <li>
                        Comply with operational requirements
                    </li>
                </ul>
                <h2 className="font-montserrat font-extrabold text-[36px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    <span className="text-[#CC5529]">Updates and Changes</span> to Privacy Policy
                </h2>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    The Privacy Policy of Baji BAGH Bangladesh may be amended regularly. This could be done because of upgrades to our services, compliance with legal regulations of Bangladesh, or security considerations.
                    <br /><br />
                    Upon amendment, it will be posted online. It is recommended that users check this page regularly. Continued use of the platform means users accept any updated terms.
                </p>
                <h2 className="font-montserrat font-extrabold text-[36px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    <span className="text-[#CC5529]">Contact Us for Privacy</span> and Data Concerns
                </h2>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    If users have any questions or concerns regarding privacy, data handling, or account security, they can contact BAGH Casino support team for assistance.
                </p>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7]">
                    Our support team is available to help users in Bangladesh with:
                </p>
                <ul className="font-inter font-bold text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] list-disc pl-[20px] pb-[24px]">
                    <li>
                        Account and BAGH Login issues
                    </li>
                    <li>
                        Privacy and data questions
                    </li>
                    <li>
                        Security concerns
                    </li>
                    <li>
                        General platform support
                    </li>
                </ul>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    We aim to respond quickly and provide clear solutions.
                    <br /><br />
                    Baji BAGH guarantees a safe and reliable gaming platform for all users in Bangladesh. The objective of this Privacy Policy is to guide the players as to what would happen to their information on this gaming platform. Being a player at Baji BAGH Gaming Platform, you should observe this Privacy Policy.
                    <br /><br />
                    We are constantly upgrading our platforms for the benefit of our players and maintaining your trust through security. <Link href="https://bagh.live/af/5pButO62/bagh55" target="_blank" className="text-[#CC5529] underline">Join Baji BAGH today</Link> and enjoy a secure online gaming experience with full confidence.
                </p>
                <h2 className="font-montserrat font-extrabold text-[36px] leading-[49px] text-[#FAFAFA] pb-[24px]">
                    Baji BAGH <span className="text-[#CC5529]">FAQ</span>
                </h2>
                <h3 className="font-inter text-[18px] font-bold leading-[22px] tracking-[2px] text-[#C7C7C7] self-stretch">
                    1. What information do you collect from users at BAGH?
                </h3>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    We collect basic account details, contact info, and transaction data to run the service.
                </p>
                <h3 className="font-inter text-[18px] font-bold leading-[22px] tracking-[2px] text-[#C7C7C7] self-stretch">
                    2. Is my personal data safe?
                </h3>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    Yes, we use <Link href={"https://www.nagad888.site/en-bd"} target="_blank" className="text-[#CC5529] underline">strong security systems</Link> to keep all user data safe.
                </p>
                <h3 className="font-inter text-[18px] font-bold leading-[22px] tracking-[2px] text-[#C7C7C7] self-stretch">
                    3. Do you share my personal information at BAGH Casino?
                </h3>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    BAGH only shares limited data with trusted service providers needed for payments and platform operations.
                </p>
                <h3 className="font-inter text-[18px] font-bold leading-[22px] tracking-[2px] text-[#C7C7C7] self-stretch">
                    4. Can I update or delete my account information?
                </h3>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    Yes, users can update their data or request changes through the BAGH App account settings or support.
                </p>
                <h3 className="font-inter text-[18px] font-bold leading-[22px] tracking-[2px] text-[#C7C7C7] self-stretch">
                    5. Why are cookies used on BAGH Live?
                </h3>
                <p className="font-inter font-light text-[16px] leading-[19px] tracking-[2px]  text-[#C7C7C7] pb-[24px]">
                    Cookies help improve performance, save user preferences, and enhance the overall BAGH experience.
                </p>
            </div>
        </section>

    )
}