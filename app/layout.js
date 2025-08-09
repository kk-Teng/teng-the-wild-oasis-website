import { Josefin_Sans } from "next/font/google";
import '@/app/_styles/globals.css'
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const josefin = Josefin_Sans({
    subsets: ['latin'],
    display: 'swap'
});

export const metadata = {
    title: {
        template: '%s The world wild oasis.',
        default: 'The world wild oasis',
    },
    description: "Luxurious cabin hotel, located in the center heart of Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
    return (
        <html lang={ "en" }>
            <body
                className={ `text-lg ${ josefin.className } antialiased flex flex-col text-slate-50 bg-slate-900 relative min-h-screen` }
            >
                <Header />
                <div className={'flex-1 px-8 py-12 grid'}>
                    <main className={ 'w-full mx-auto max-w-7xl' }>
                        { children }
                    </main>
                </div>
                <Footer />
            </body>
        </html>
    );
}
