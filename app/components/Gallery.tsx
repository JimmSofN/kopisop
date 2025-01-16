import Image from "next/image"
import GalleryImage1 from "@/public/images/gallery1.jpg"
import GalleryImage2 from "@/public/images/gallery2.jpg"
import GalleryImage3 from "@/public/images/gallery3.jpg"
import GalleryImage4 from "@/public/images/gallery4.jpg"
import GalleryImage5 from "@/public/images/gallery5.jpg"
import GalleryImage6 from "@/public/images/gallery6.jpg"

const gallery = [
    { image: GalleryImage1, alt: "Gallery Image 1" },
    { image: GalleryImage2, alt: "Gallery Image 2" },
    { image: GalleryImage3, alt: "Gallery Image 3" },
    { image: GalleryImage4, alt: "Gallery Image 4" },
    { image: GalleryImage5, alt: "Gallery Image 5" },
    { image: GalleryImage6, alt: "Gallery Image 6" },
]

export default function Gallery() {
    return (
        <div className="container xl:w-full w-[90%] mx-auto pt-12 px-0 pb-8">
            <div className="flex flex-col items-center text-center mb-8">
                <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-extrabold text-maincolor">Tempat Yang Menarik</h2>
                <p className="max-w-[550px] w-full xl:text-xl lg:text-lg md:text-base text-sm font-poppins mt-4">
                    “Ketika semua kata tidak lagi banyak berbicara, maka secangkir kopi dapat
                    menjadi perantara dan mencairkan semua suasana.” -kelazz
                </p>
            </div>


            <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
                {gallery.map((gallery, index) => (
                    <div key={index} className="mb-4 break-inside-avoid">
                        <Image src={gallery.image} alt={gallery.alt} className="w-full object-cover rounded-xl" priority></Image>
                    </div>
                ))}
            </div>

        </div>
    )
}