import ReviewSwipper from "./ReviewSwipper";

export default function Review() {
    return (
        <section id="review" className="container xl:w-full w-[90%] mx-auto max-w-[550px] mb-8">
            <div className="flex flex-col items-center mb-8">
                <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-extrabold text-maincolor">Review Pelanggan</h2>
            </div>
            <ReviewSwipper />
        </section>
    )
}