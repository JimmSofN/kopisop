import Link from "next/link";

const about = [
    { href: "/about", name: "Cerita Kami" },
    { href: "/faq", name: "FAQ" },
    { href: "/#", name: "Karir" }
]

const resource = [
    { href: "/#", name: "Menu" },
    { href: "/#", name: "Lokasi" },
    { href: "/#", name: "Bantuan" }
]

const service = [
    { href: "/#", name: "Opsi Pembayaran" },
    { href: "/#", name: "Refund" }
]



export default function Footer() {
    return (
        <div className="container lg:w-full md:grid-cols-2 w-[90%] mx-auto pt-12 px-0 pb-8 bg-textcolor rounded-t-3xl">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-between px-16">
                <div>
                    <Link href={"/"} className="text-bgcolor font-playfair text-xl">Kopispop</Link>
                </div>
                <div className="flex flex-col lg:justify-self-center text-bgcolor font-poppins">
                    <h3 className="font-bold mb-4">Tentang Kami</h3>
                    {about.map((about, index) => (
                        <Link key={index} href={about.href} className="font-medium text-sm">{about.name}</Link>
                    ))}
                </div>
                <div className="flex flex-col lg:justify-self-center text-bgcolor font-poppins">
                    <h3 className="font-bold mb-4">Resource</h3>
                    {resource.map((resource, index) => (
                        <Link key={index} href={resource.href} className="font-medium text-sm">{resource.name}</Link>
                    ))}
                </div>
                <div className="flex flex-col lg:justify-self-center text-bgcolor font-poppins">
                    <h3 className="font-bold mb-4">Layanan</h3>
                    {service.map((service, index) => (
                        <Link key={index} href={service.href} className="font-medium text-sm">{service.name}</Link>
                    ))}
                </div>
            </div>
            <p className="text-bgcolor font-poppins font-medium text-center pt-8 text-sm">@Copyright Kopisop | 2024</p>
        </div>
    )
}