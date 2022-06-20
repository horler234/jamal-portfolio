import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EmailIcon, PhoneIcon } from "./icons/social";
import Image from "next/image";
import Link from "next/link";

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 72px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;

    svg {
      margin-right: 30px;
    }

    a:last-child {
      margin-left: 40px;
    }
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    /* @media (max-width: 690px) { */
    flex-wrap: wrap;

    div {
      font-size: 14px;
      line-height: 22px;

      &:first-child {
        /* margin-bottom: 43px; */
      }
    }
  }

  @media (max-width: 631px) {
    div:last-child {
      margin-top: 43px;
    }
  }
  @media (max-width: 509px) {
    div:first-child {
      margin-bottom: 43px;
    }

    div:last-child {
      margin-top: 0;
    }
  }
`;

const variant = {
  visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.6 } },
  hidden: { opacity: 0, y: 100 },
};

const middleVariant = {
  middleVisible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", delay: 0.1, duration: 0.6 },
  },
  middleHidden: { opacity: 0, y: 100 },
};
const rightVariant = {
  rightVisible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", delay: 0.2, duration: 0.6 },
  },
  rightHidden: { opacity: 0, y: 100 },
};

export const ContactInfo = () => {
  /** animation hook for left section */
  const control = useAnimation();
  const [ref, inView, entry] = useInView();

  /** animation hook for middle section */
  const middleControl = useAnimation();
  const [middleRef, inMiddleView, middleEntry] = useInView();

  /** animation hook for right section */
  const rightControl = useAnimation();
  const [rightRef, inRightView, rightEntry] = useInView();

  useEffect(() => {
    //@ts-ignore
    if (entry?.boundingClientRect?.y > 0) {
      if (entry?.isIntersecting) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }
  }, [control, inView]);

  useEffect(() => {
    //@ts-ignore
    if (rightEntry?.boundingClientRect?.y > 0) {
      if (rightEntry?.isIntersecting) {
        rightControl.start("rightVisible");
      } else {
        rightControl.start("rightHidden");
      }
    }
  }, [rightControl, inRightView]);

  useEffect(() => {
    //@ts-ignore
    if (middleEntry?.boundingClientRect?.y > 0) {
      if (middleEntry?.isIntersecting) {
        middleControl.start("middleVisible");
      } else {
        middleControl.start("middleHidden");
      }
    }
  }, [middleControl, inMiddleView]);
  return (
    <ContactInfoContainer>
      <motion.div
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={control}
      >
        <EmailIcon />
        abdulqadiradebayo331@gmail.com
      </motion.div>

      <motion.div
        ref={middleRef}
        variants={middleVariant}
        initial="middleHidden"
        animate={middleControl}
      >
        <PhoneIcon />
        +2348139011252
      </motion.div>

      <motion.div
        ref={rightRef}
        variants={rightVariant}
        initial="rightHidden"
        animate={rightControl}
      >
        <a
          href="https://www.behance.net/adebayoabujamal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/behance.png"
            alt="Behance"
            width={35}
            height={35}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/abdulqadir-adebayo-196797184"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/linkedin.png"
            alt="Linkedin"
            width={35}
            height={35}
          />
        </a>
      </motion.div>
    </ContactInfoContainer>
  );
};
