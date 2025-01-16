import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/public/images/heroimage.png"
import "boxicons/css/boxicons.min.css"

export default function Hero() {
    return (
        
        <div className="container xl:w-full lg:min-h-[650px] md:grid-cols-2 w-[90%] md:mt-0 min-h-[500px] mx-auto 
        lg:pt-12 lg:pb-12 pt-8 px-0 pb-8 grid grid-cols-1 gap-4 items-center mt-16">
            <div className="md:order-none order-1">
                <h1 className="xl:text-5xl xl:leading-tight lg:text-3xl md:text-2xl text-xl font-extrabold text-maincolor">
                    Selamat datang di Kopisop<br />
                    Salam ngopi 😊
                </h1>
                <p className="max-w-[300px] xl:text-xl lg:text-lg md:text-base text-sm font-poppins mt-4 mb-6">
                    Nikmati kopi terenak se Indonesia, di jamin nagih terus deh
                </p>

                <Link href={""} className="max-w-[200px] p-2.5 flex items-center justify-center gap-x-2 bg-textcolor rounded-full">
                    <span className="text-bgcolor font-poppins uppercase">Beli Sekarang</span>
                    <i className="bx bx-up-arrow-alt text-xl bg-secondcolor rounded-full p-1 rotate-45 text-bgcolor"></i>
                </Link>
            </div>
            <Image src={HeroImage} alt="Hero Image" className="max-w-[560px] w-full" priority />
        </div >
    )
}