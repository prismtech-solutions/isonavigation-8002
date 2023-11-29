import Image from "next/image";
import { type FC, type ReactNode } from "react";
import { ButtonThree } from "./button";

const Container: FC<{ id: string; children: ReactNode }> = ({
  id,
  children,
}) => {
  return (
    <section className="flex w-full flex-col gap-5 xl:py-40 lg:py-40 py-20" id={id}>
      {children}
    </section>
  );
};

const Header: FC<{ title: string, image: string }> = ({ title, image }) => {
  return (
    <div className="flex w-full flex-row items-center gap-3">
      <Image src={image} alt="" height={20} width={20} />
      <h2 className="font-heading text-lg text-t3">
        {title.toUpperCase()}
      </h2>
    </div>
  );
};

const Body: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative flex overflow-clip flex-row xl:flex-nowrap lg:flex-nowrap flex-wrap items-center justify-center gap-5 lg:justify-evenly xl:justify-evenly border-s3 border-[1px] bg-p1 p-5 rounded-md">
      {children}
    </div>
  );
};

const Article: FC<{
  body: string;
  link?: { title: string; href: string };
  title?: string;
  buttons?: { href: string; text: string }[]
}> = ({ body, title, buttons }) => {
  return (
    <article className="flex w-[500px] max-w-[100vw] flex-col items-start justify-center gap-5 font-body">
      <h2 className="text-4xl text-t1 font-accent">{title?.toUpperCase()}</h2>
      <p className="font-body text-lg text-t2">{body}</p>
      {buttons && <div className="flex flex-row w-full">
        {buttons.map((button, idx) => (<ButtonThree key={`${button.text}${idx}`} {...button} />))}
      </div>}
    </article>
  );
};

const Graphics: FC<{
  src: string;
  height: number;
  width: number;
  alt: string;
}> = ({ src, alt }) => {
  return (
    <div className={`flex w-[500px] max-w-[90vw] flex-row`}>
      <Image src={src} height={300} width={500} alt={alt} />
    </div>
  );
};

export const Section = {
  Container,
  Header,
  Article,
  Graphics,
  Body,
};
