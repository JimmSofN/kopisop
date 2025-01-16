import Accordion from "@/app/components/Accordion"
import { faq } from "@/constant/data"

export default function Faq() {

    return (
        <div className="container xl:w-full w-[90%] mx-auto lg:pt-12 pt-8 px-0 pb-8 mt-[6.25rem]">
            <div className="flex flex-col items-center text-center mb-8">
                <h1 className="text-4xl font-extrabold text-maincolor">FAQ</h1>
                <p className="max-w-[550px] w-full xl:text-xl lg:text-lg md:text-base text-sm font-poppins mt-4">
                    Ini adalah pertanyaan faq, semoga menjawab 😊🍵
                </p>
            </div>
            {faq.map((data, index) => (
                <div className="bg-[#e8d8cd] rounded-xl border-2 my-4 max-w-2xl mx-auto" key={index}>
                    <Accordion question={data.question} answer={data.answer} />
                </div>
            ))}
        </div >
    )
}
