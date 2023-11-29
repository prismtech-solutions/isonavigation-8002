import Image from "next/image";
import { ReactNode, type FC } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="overflow-clip relative flex max-w-[100vw] flex-col items-center justify-center border-s3 border-[1px] rounded bg-[#101010] bg-opacity-30 backdrop-blur-md text-t1 shadow-sm shadow-shadow w-full">
      {children}
    </div>
  );
};

const Header: FC<{ heading: string; icon?: string }> = ({ heading, icon }) => {
  return (
    <div className="flex w-full flex-row items-center justify-between py-2 px-3 bg-p1 border-b-s3 border-b-[1px]">
      <h3 className="font-heading text-lg text-t2">{heading}</h3>
      {icon && <Image alt="" src={icon} height={30} width={30} />}
    </div>
  );
};

const Article: FC<{
  body: string;
  link?: { title: string; href: string };
  title?: string;
}> = ({ body }) => {
  return (
    <article className="flex flex-1 items-center justify-center">
      <p className="font-body text-lg text-t1">{body}</p>
    </article>
  );
};

const Graphics: FC<{ src: string }> = ({ src }) => {
  return (
    <div className="flex-1">
      <Image src={src} height={150} width={400} alt="" />
    </div>
  );
};

export const Card = {
  Container,
  Header,
  Article,
  Graphics,
};
