import Link from "next/link"
import { Button, ButtonTwo } from "../components/button"
import { randomUUID } from "crypto"
import Image from "next/image"
import { type ProjectInfo } from "../models/project.model"
import { type FC } from "react"

export const Landing: FC<{ config: ProjectInfo }> = ({ config }) => {
    return (
        <>
            <div className="flex flex-col gap-12">
                <p className="text-xl font-body text-t3">ISONAVIGATION</p>
                <h1 className="xl:text-7xl lg:text-7xl text-5xl font-accent text-t1">THE FIRST <span className="text-accent">OPPORTUNITY & DISCOVERY</span> RADAR FOR DEFI INVESTORS</h1>
                <p className="text-lg font-body text-t2 xl:w-1/2 lg:w-1/2">Make more profit, save a ton of time, and become a successful investor. The future looks a lot like <span className="text-accent font-accent">$ENXS</span>, with our ecosystem approach to uncovering and investing in DeFi projects with great long-term potential, without the hassle or steep learning curve.</p>
                <div className="xl:w-1/3 lg:w-1/3 flex flex-row gap-5">
                    <Button href="" text="Telegram" />
                    <ButtonTwo href="" text="Twitter" />
                </div>
            </div>
            <div className="w-full flex flex-row py-8 border-y-t3 border-y-[1px]">
                <div className="flex-1 flex items-center justify-evenly flex-row flex-wrap gap-5">
                    {[
                        { src: "/brands/uniswapLong.svg", href: config.uniswap, height: 10, width: 120 }, 
                        { src: "/brands/dextoolsLong.svg", href: config.dextools, height: 10, width: 100 }, 
                        { src: "/brands/cmcLong.svg", href: '/', height: 10, width: 130 }, 
                        { src: "/brands/cgLong.svg", href: '/', height: 10, width: 120 }
                    ].map(props => 
                    <Link key={randomUUID()}  href={props.href}>
                        <Image alt="" {...props}/>
                    </Link> 
                    )}
                </div>
            </div>
        </>
    )
}