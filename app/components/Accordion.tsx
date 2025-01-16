"use client";

import { useState } from "react";

interface accordionProps {
    question: String,
    answer: String
}

export default function Accordion({ question, answer }: accordionProps) {
    const [accordionOpen, setAccordionOpen] = useState(false)

    const toggleAccordion = () => {
        setAccordionOpen(!accordionOpen)
    }

    return (
        <div>
            <div
                className="py-4 px-6 cursor-pointer flex items-center justify-between"
                onClick={toggleAccordion}>
                <span className="font-semibold font-poppins lg:text-base md:text-sm text-xs">{question}</span>
                <i className={`bx ${accordionOpen ? 'bx-chevron-up' : 'bx-chevron-down'} text-2xl`}></i>
            </div>

            <div className={`transition-all duration-300 ease-in-out 
                        ${accordionOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="p-4 border-t-2 border-textcolor">
                    <p className="font-poppins lg:text-base md:text-sm text-xs">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}