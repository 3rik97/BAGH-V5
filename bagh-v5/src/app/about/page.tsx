import AboutHeader from "./header";
import AboutContent from "./section1About";
import AboutContent2 from "./section2About";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: "Experience the excitement  at BAGH Live Casino in Bangladesh",
        description: "BAGH Live is a growing gaming site in Bangladesh where you can enjoy casino games and sports betting in one place. Find more about the BAGH online platform here",
        alternates: {
            canonical: "https://bagh55.com/privacy-policy",

        },
        openGraph: {
            title: "Experience the excitement  at BAGH Live Casino in Bangladesh",
            description: "BAGH Live is a growing gaming site in Bangladesh where you can enjoy casino games and sports betting in one place. Find more about the BAGH online platform here",
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
            title: "Experience the excitement  at BAGH Live Casino in Bangladesh",
            description: "BAGH Live is a growing gaming site in Bangladesh where you can enjoy casino games and sports betting in one place. Find more about the BAGH online platform here",
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

export default function About() {
    return (
        <section>
            <AboutHeader />
            <AboutContent />
            <AboutContent2 />
        </section>
    );
}