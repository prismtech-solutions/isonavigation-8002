import { type FC } from "react";
import { Socials } from "./socials";
import { type ProjectInfo } from "~/app/models/project.model";

export const Footer: FC<{ config: ProjectInfo }> = ({
  config,
}) => {
  return (
    <footer
    className={`flex min-h-[20rem] w-full flex-col justify-center gap-5`}
    >
      <div className="flex flex-col xl:items-end lg:items-end items-center">
        <Socials config={config} />
        <p className="text-md font-body text-t3">© 2023 ISONAVIGATION. All rights reserved.</p>
      </div>
    </footer>
  );
};
