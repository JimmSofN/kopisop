import Image from "next/image"
import ProductImage1 from "@/public/images/product1.jpg"
import ProductImage2 from "@/public/images/product2.jpg"
import ProductImage3 from "@/public/images/product3.jpg"
import ProductImage4 from "@/public/images/product4.jpg"
import ProductImage5 from "@/public/images/product5.jpg"
import ProductImage6 from "@/public/images/product6.jpg"

const product = [
    { image: ProductImage1, alt: "Product Image 1", name: "Coffe De Latte", title: "", price: "Rp. 35.000,00" },
    { image: ProductImage2, alt: "Product Image 2", name: "Mitsubishi Latte", title: "", price: "Rp. 40.000,00" },
    { image: ProductImage3, alt: "Product Image 3", name: "Picolo Uzumaki", title: "", price: "Rp. 45.000,00" },
    { image: ProductImage4, alt: "Product Image 4", name: "Yosimitsu", title: "", price: "Rp. 45.000,00" },
    { image: ProductImage5, alt: "Product Image 5", name: "Paquito Latte", title: "", price: "Rp. 45.000,00" },
    { image: ProductImage6, alt: "Product Image 6", name: "Zoffe Carpucino", title: "", price: "Rp. 50.000,00" }
]

export default function Product() {
    return (
        <section id="menu" className="container xl:w-full w-[90%] mx-auto pt-12 px-0 pb-8">
            <div className="flex flex-col items-center text-center mb-8">
                <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-extrabold text-maincolor">Produk Terlaris Kami</h2>
                <p className="max-w-[550px] w-full xl:text-xl lg:text-lg md:text-base text-sm font-poppins mt-4">
                    Berikut ini adalah produk the best of the best di kopisop guys,
                    kalian harus cobain yang ada di list produk ini di jamin bisa
                    bikin kalian nagih terus.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-between bg-[#e8d8cd] py-10 px-16 rounded-3xl">
                {product.map((product, index) => (
                    <div key={index} className="bg-[#fff8f7] p-5 w-[250px] rounded-3xl flex flex-col justify-self-center">
                        <Image src={product.image} alt={product.alt} className="w-full h-[200px] rounded-3xl object-cover"></Image>

                        <div className="flex flex-col mt-4">
                            <h2 className="font-bold font-poppins size text-base text-center">{product.name}</h2>
                            <div className="flex justify-between items-center mt-4 w-full">
                                <span className="text-maincolor">{product.price}</span>
                                <i className="bx bx-shopping-bag bg-secondcolor text-bgcolor p-[8px] rounded-full cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}