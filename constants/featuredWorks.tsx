import { Work } from "@type/Work";
import {
  CharityCoIcon,
  EBloodIcon,
  YouWorkIcon,
} from "@components/icons/featured-works";

export const featuredWorks: Work[] = [
  {
    title: "YouWork",
    desc: "This is a mobile application that helps users locate spaces for personal or cooperate use. Users can use the mobile application to locate work spaces, spaces for bootcamps, meetings, seminars e.t.c",
    icon: <YouWorkIcon />,
    imgSrc: "/images/you-work.png",
    imgWidth: 407.89,
    imgHeight: 412,
    caseLink: "/",
    protoLink:
      "https://drive.google.com/file/d/1Lj0wex8iHPI8PoodByUHwozPuaaGEHV3/view?usp=drivesdk",
  },

  {
    title: "E-blood",
    desc: "This is a mobile application that eases the process of blood donation for users. The app also has some features  such as a tracking system, which allows users track the process of their donation and lots more.",
    icon: <EBloodIcon />,
    imgSrc: "/images/e-blood.png",
    imgWidth: 391,
    imgHeight: 398.57,
    caseLink: "https://www.behance.net/gallery/137583667/E-blood-case-study",
    iconBg: "#64529A",
    caseBg: "#A51111",
  },
  {
    title: "Charity.co",
    desc: "This is a website designed for the cause of humanity. Users can go on the website to search for different trusted charity organisations and make donations to help the needy. Users can also create account seamlessly on the website.",
    icon: <CharityCoIcon />,
    imgSrc: "/images/charity-co.png",
    imgWidth: 540.11,
    imgHeight: 290,
    caseLink:
      "https://www.behance.net/gallery/138193135/Charityco-UX-Case-study",
    caseBg: "#06194E",
    iconBg: "#AA9386",
  },
];
