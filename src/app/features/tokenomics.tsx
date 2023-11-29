"use client";

import Link from "next/link";
import { Card } from "../components/card";
import { Section } from "../components/section";
import { useCopyToClipboard } from "../hooks/copyToClipboard";
import { type ProjectInfo } from "../models/project.model";
import Image from "next/image";

import data from "public/tokenomics.json";

export const Tokenomics = ({ config }: { config: ProjectInfo }) => {
    
    const { copied, copy } = useCopyToClipboard();

    return (
        <Section.Container id="tokenomics">
            <Section.Header  image={'/icons/iso.svg'} title="tokenomics" />
            <Section.Body>
                <div className="flex flex-row gap-5 xl:flex-nowrap lg:flex-nowrap flex-wrap">
                    <article className="xl:w-2/3 lg:w-2/3 flex flex-col gap-5 py-5">
                        <h3 className="text-5xl text-t1 font-accent text-center">{data.title}</h3>
                        <p className="font-body text-lg text-t2 text-center">{data.body}</p>
                    </article>
                    <ul className="xl:w-1/3 lg:w-1/3 w-full border-l-s3 border-l-[1px] flex flex-col justify-evenly items-start p-2">
                    {data.tokenData.map(props => <li key={props.key} className="font-body text-lg text-t2 text-center w-full">
                        <p className="text-left text-t3 font-accent">{props.key}</p>
                        <span className="flex flex-row justify-between">
                            <p className="text-left text-t2 font-body">{props.value}</p>
                            {props.isContractAddress && <button onClick={() => copy(config.contractAddress)}>
                                <p className={`${copied ? 'text-accent' : ''} transition-colors duration-300 font-body text-lg`}>copy</p>
                            </button>}
                        </span>
                        </li>)}
                    </ul>
                </div>
            </Section.Body>
            <div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap flex-row justify-between border-t-[1px] border-t-accent border-l-[1px] border-l-accent pb-20 p-5 gap-5">
                {data.children.map(child => (
                    <Card.Container key={child.title}>
                        <Card.Header heading={child.title} icon="/icons/gg.svg" />
                        <div className="w-full flex-1 flex-col flex gap-5 px-3 py-2">
                            {child.children.map(child => (
                                <span key={child.key} className="flex flex-row justify-between items-center">
                                    <p className="text-xl text-left font-body text-t3">{child.key}</p>
                                    {(child as { value: string | undefined})?.value && <p className="text-xl text-left font-body text-t1">{(child as { value: string | undefined})?.value}</p>}
                                    {(child as { href: string | undefined})?.href && 
                                        <Link className="hover:scale-105 transition-scale duration-300 hover:shadow-[rgba(255,255,255,0.2)] hover:shadow-lg px-2 py-1 flex flex-row gap-2 bg-accent bg-opacity-30 rounded-md" href="">
                                            <Image src="/icons/arrowlink.svg" alt="" height={17} width={17}/>
                                        </Link>
                                    }
                                </span>
                            ))}
                        </div>
                    </Card.Container>
                ))}
            </div>
        </Section.Container>
    )
}