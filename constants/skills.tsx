import { UIIcon, UXIcon, WritingIcon } from "@components/icons/skillset";
import { Skill } from "@type/Skill";

export const skills: Skill[] = [
  {
    icon: <UIIcon />,
    title: "UI Design",
    desc: "I’m skilled in designing eye-catching and attractive interfaces that automatically gets users interested in using the products. ",
  },

  {
    icon: <UXIcon />,
    title: "UX Design",
    desc: "I’m skilled in making UX Designs that retain users as I understand that a good UX Design makes users glued to the product",
  },

  {
    icon: <WritingIcon />,
    title: "Writing",
    desc: "As a UI/UX Designer, writing is necessary in creating contents that attracts users. I’m skilled in making good copy contents.",
  },
];
