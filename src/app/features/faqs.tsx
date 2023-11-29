"use client"

import { useState, type FC, useCallback, useEffect } from "react";
import { Section } from "../components/section";
import Image from "next/image";

import config from "public/faqs.json";

interface AccordianItemProps {
    id: string, 
    title: string, 
    body: string 
}

export const Faqs: FC = () => {

    const [active, setActive] = useState<string>('');

    const handleClick = (id: string) => setActive(prev => prev !== id ? id : '');

    return (
        <div className="border-b-[1px] border-b-s3">
        <Section.Container id="faqs">
          <Section.Header image={'/icons/iso.svg'} title="faqs"/>
            <div className="flex flex-col gap-5">
                {config.map(props => 
                    <AccordianItem 
                        {...props} 
                        key={props.id}
                        id={props.id} 
                        onClick={handleClick} 
                        active={active === props.id}/>
                )}
            </div>
        </Section.Container>
      </div>
    )
}

const AccordianItem: FC<AccordianItemProps & { id: string; active: boolean; onClick: (id: string) => void }> = ({ id, body, title, active, onClick }) => {
    const handleClick = useCallback(() => onClick(id), [onClick]);
    return (
            <button 
                onClick={handleClick} 
                className="transition-all duration-300 h-fit">
                    <div className="bg-p1 border-s3 border-[1px] rounded-md overflow-clip">
                        <div className="w-full p-3 flex flex-row items-center justify-between">
                            <h4 className="text-xl text-left font-heading text-t1">{title}</h4>
                            <Image className={`${active ? "" : "rotate-180"} transition-transform duration-300`} src="/icons/chevron.svg" alt="" height={15} width={15} />
                        </div>
                        <div className={`w-full transition-all duration-300 ${!active ? "opacity-0 h-0" : "h-40 p-3"}`}>
                            <p className="text-left text-md font-body text-t2">{body}</p>
                        </div>
                    </div>
            </button>
        )

}