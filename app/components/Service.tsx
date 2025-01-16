import Image from "next/image";
import ServiceImage1 from "@/public/images/service1.png"
import ServiceImage2 from "@/public/images/service2.png"
import ServiceImage3 from "@/public/images/service3.png"
import ServiceImage4 from "@/public/images/service4.png"
import ServiceImage5 from "@/public/images/service5.png"

const service = [
    { image: ServiceImage1, alt: "Service Image 1", name: "Kopi Alami" },
    { image: ServiceImage2, alt: "Service Image 2", name: "Kopi Hangat" },
    { image: ServiceImage3, alt: "Service Image 3", name: "Kopi Americano" },
    { image: ServiceImage4, alt: "Service Image 4", name: "Biji Kopi" },
    { image: ServiceImage5, alt: "Service Image 5", name: "Sides" }
]

export default function Service() {
    return (
        <div className="container xl:w-full w-[90%] mx-auto lg:pt-12 pt-8 px-0 pb-8">
            <div className="flex flex-col items-center text-center mb-8">
                <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-extrabold text-maincolor">
                    Menyediakan berbagai jenis kopi <br />
                    Pelayanan Joss
                </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] justify-between gap-16">
                {service.map((service, index) => (
                    <div key={index} className="bg-maincolor flex flex-col items-center gap-y-4 py-16 px-5 rounded-3xl">
                        <Image src={service.image} alt={service.alt} className="object-contain h-28 w-28" priority />
                        <p className="text-containercolor">{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}