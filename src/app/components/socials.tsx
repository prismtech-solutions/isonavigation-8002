import { FC } from "react";
import { icons } from "./icons";
import { ProjectInfo } from "../models/project.model";
import { randomUUID } from "crypto";

export const Socials: FC<{ config: ProjectInfo }> = ({ config }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-5 py-2">
      {icons.map((icon) => <div key={randomUUID()} className="flex hover:scale-105 duration-300">{icon({ fill: "#ffffff", config })}</div>)}
    </div>
  );
};
