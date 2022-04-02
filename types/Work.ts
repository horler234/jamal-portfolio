import { ReactNode } from "react";

export type Work = {
  title: string;
  icon: ReactNode;
  iconBg?: string;
  desc: string;
  caseBg?: string;
  caseLink: string;
  protoLink?: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
};
