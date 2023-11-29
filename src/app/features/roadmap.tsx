import { type FC } from "react";
import { type ProjectInfo } from "../models/project.model";
import { Section } from "../components/section";
import Image from "next/image";
import { randomUUID } from "crypto";

import data from "public/roadmap.json"

enum RoadmapItemStatus {
    PENDING,
    IN_PROGRESS,
    COMPLTETE
}

const icons = {
    [RoadmapItemStatus.PENDING] : '/icons/iso-grey.svg',
    [RoadmapItemStatus.IN_PROGRESS] : '/icons/iso-yellow.svg',
    [RoadmapItemStatus.COMPLTETE] : '/icons/iso-green.svg',
}
export const Roadmap: FC<{ config: ProjectInfo }> = ({ config }) => {
    return (
        <div className="border-y-[1px] border-y-s3">
            <Section.Container id="roadmap">
            <Section.Header title="roadmap" image="/icons/iso.svg"/>
            <h3 className="text-4xl font-accent text-t1 text-center">WHAT ARE OUR NEXT STEPS?</h3>
                <div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap flex-row justify-between border-b-[1px] border-b-accent border-r-[1px] border-r-accent pb-20 p-5 gap-5">
                    {data.map(props => <RoadmapItem key={randomUUID()} {...props}/>)}
                </div>
            </Section.Container>
        </div>
    )
}

const RoadmapItem: FC<{ title: string, subHeading: string, children: { key: string; value: RoadmapItemStatus; }[]}> = ({ title, subHeading, children }) => {
    return (
        <div className="hover:scale-105 transition-scale duration-300 hover:shadow-[rgba(255,255,255,0.2)] hover:shadow-lg overflow-clip relative flex max-w-[100vw] flex-col items-center justify-start border-s3 border-[1px] rounded bg-[#101010] bg-opacity-30 text-t1 shadow-sm shadow-shadow w-full">
            <span className="text-left w-full p-2 border-b-[1px] border-b-s3 bg-s3 bg-opacity-30">
                <h4 className="font-heading text-md text-t3">{title}</h4>
                <h5 className="font-accent text-2xl text-t1">{subHeading}</h5>
            </span>
            <ul className="w-full p-2 flex flex-col gap-2 pb-5">
                {children.map(child => <li key={randomUUID()} className="flex flex-row justify-between items-center">
                    <p className="font-body text-md text-t3">{child.key}</p>
                    <Image src={icons[child.value]} alt='' width={15} height={15} />
                    </li>)}
            </ul>
        </div>
    )
} 