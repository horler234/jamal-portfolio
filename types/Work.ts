import { ReactNode } from "react";

export type Work = {
  category: string;
  title: string;
  desc: string;
  caseLink?: string;
  protoLink?: string;
  imgSrc: string;
};
