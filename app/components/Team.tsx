import Image from "next/image"

import TeamImage1 from "@/public/images/team1.jpg"
import TeamImage2 from "@/public/images/team2.jpg"
import TeamImage3 from "@/public/images/team3.jpg"
import TeamImage4 from "@/public/images/team4.jpg"


const team = [
    { image: TeamImage1, alt: "Team Image 1", name: "Dayren Lafly Gunawan", position: "Owner", description: "Barista Bangkit Academy, dengan skill latte art murni dari perguruan Oditiy yang menghasilkan karya seni terbaik" },
    { image: TeamImage2, alt: "Team Image 2", name: "Kevin Sanjaya", position: "Investor", description: "Pengusaha Hong Kong, dari vegas ke macau semua nya telah di taklukan terutama di bidang perekonomian valuta asing" },
    { image: TeamImage3, alt: "Team Image 3", name: "Jimmy Putra Alam", position: "Kebersihan", description: "Membuat Tempat Nyaman, menata tempat ekslusif bagi para pelanggan agar nyaman dan tetap terjaga" },
    { image: TeamImage4, alt: "Team Image 4", name: "Fedriko Anggola", position: "Keamanan", description: "Menjaga Tempat dan wilayah, dengan pengalaman yang lengkap di lapangan maka sudah pasti kopisop aman" }
]

export default function Team() {
    return (
        <div className="container xl:w-full w-[90%] mx-auto pt-12 px-0 pb-8">
            <div className="flex flex-col items-center text-center mb-8">
                <h2 className="text-4xl font-extrabold text-maincolor">Tim Kami</h2>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
                {team.map((team, index) => (
                    <div key={index}>
                        <Image src={team.image} alt={team.alt} className="w-full h-[400px] object-cover rounded-xl" priority></Image>
                        <h2 className="text-base font-poppins mt-4 text-maincolor font-bold">{team.name}</h2>
                        <span className="text-sm font-poppins text-textaltercolor">{team.position}</span>
                        <p className="text-sm font-poppins">{team.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}