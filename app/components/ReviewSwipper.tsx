"use client"

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// images
import review01Image from "@/public/images/review01.png"
import review02Image from "@/public/images/review02.png"
import review03Image from "@/public/images/review03.png"
import Image from 'next/image';


const reviews = [
    {
        reviewImage: review01Image,
        name: "Basudara",
        subtitle: "Aroma kopinya berasa sempurna, cocok di mulut saya",
        description: "Kopi ini memiliki aroma yang kaya dan tekstur yang lembut, membuat pengalaman menikmati kopi semakin istimewa. Sangat direkomendasikan untuk pecinta kopi sejati."
    },
    {
        reviewImage: review02Image,
        name: "Yudi",
        subtitle: "Rasa yang autentik dan membuat hari saya lebih baik",
        description: "Dengan rasa yang khas dan konsistensi yang sempurna, kopi ini berhasil membawa kebahagiaan dalam setiap tegukannya. Sangat cocok untuk dinikmati di pagi hari."
    },
    {
        reviewImage: review03Image,
        name: "Lukas",
        subtitle: "Perpaduan rasa yang unik dan tak terlupakan",
        description: "Rasa kopinya begitu seimbang antara pahit dan manis, dengan sedikit sentuhan aroma kacang panggang. Ini benar-benar pengalaman baru bagi saya."
    }
]

export default function ReviewSwipper() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {reviews.map((review, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center text-center mb-[3.5rem]">
                                <Image
                                    className="w-[100px] h-[100px] rounded-[50%] object-cover object-center border-[7px] border-[#fff8f7] shadow-xl"
                                    src={review.reviewImage}
                                    alt="Review Image Alt" />
                                <h2 className="text-base text-maincolor font-poppins font-bold my-4">{review.name}</h2>
                                <span className="text-lg text-maincolor font-bold">{review.subtitle}</span>
                                <p className="text-sm font-poppins text-textaltercolor mt-4">{review.description}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}