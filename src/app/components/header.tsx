"use client";

import { useState, type FC, useCallback } from "react";
import { useSectionElements } from "../hooks/pageSections.hook";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { type ProjectInfo } from "~/app/models/project.model";

export const Header: FC<{ layout: string; config: ProjectInfo }> = ({
  layout,
  config,
}) => {
  const [menu, setMenu] = useState<boolean>(false);
  const sections = useSectionElements();
  const toggleMenu = useCallback(() => setMenu((prev) => !prev), [setMenu]);
  const router = useRouter();
  const navigate = useCallback(
    (href: string) => {
      router.push(href);
      setMenu(false);
    },
    [router, setMenu],
  );
  return (
    <div
      className={`${layout} fixed left-0 right-0 top-0 flex flex-row z-50 py-2 shadow-sm shadow-shadow bg-p1 bg-opacity-30`}
    >
      <div className="flex flex-1 flex-col justify-center">
        <Link className="flex flex-row gap-5 justify-start items-center" href="/">
          <Image src="" alt="" height={40} width={40} />
          <p className="text-2xl font-body text-t1">ISONAVIGATION</p>
        </Link>
      </div>
      <div className="flex-1" />
      <div className="hidden flex-1 flex-row items-center justify-evenly gap-5 md:flex lg:flex xl:flex">
        {sections?.map((section) => (
          <Link className="group" key={section.title} href={section.href}>
            <h3 className="font-body text-lg text-t2">{section.title.toUpperCase()}</h3>
            <div className={`h-[1px] bg-accent group-hover:w-full w-0 transition-all duration-300`}/>
          </Link>
        ))}
        <Button href={config.dextools} text="CHART" />
      </div>
      <div className="flex flex-1 flex-row items-center justify-end md:hidden lg:hidden xl:hidden">
        <button
          className="flex h-10 w-10 items-center justify-center rounded bg-s2"
          type="button"
          onClick={toggleMenu}
        >
          <Image src="/icons/bars.svg" alt="" height={20} width={20} />
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 h-screen w-screen transition-opacity duration-300 md:hidden lg:hidden xl:hidden ${
          menu ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 top-20 bg-s2 text-t2">
            <header className="flex w-full flex-row items-center justify-between p-5 bg-s2 border-b-[1px] border-s3">
              <p className="font-body text-2xl text-t2">{config.meta.title}</p>
              <button
                className="flex h-10 w-10 items-center justify-center rounded"
                type="button"
                onClick={toggleMenu}
              >
                <Image src="/icons/x.svg" alt="" height={20} width={20} />
              </button>
            </header>
            <div className="relative flex flex-col gap-5 p-5">
              <Button href={config.dextools} text="CHART"/>
              {sections?.map((section) => (
                <button
                  className="flex flex-row items-center justify-center"
                  type="button"
                  onClick={() => navigate(section.href)}
                  key={section.title}
                >
                  <h3 className="font-body text-2xl text-t2">{section.title}</h3>
                </button>
              ))}
              <div id="nav-menu-bg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
