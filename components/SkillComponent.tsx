import { Skill } from "@type/Skill";
import { Spin } from "keyframes/Spin";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";

const SkillCard = styled.div`
  max-width: 380px;
  width: 100%;
  height: 204px;
  background: rgba(51, 40, 85, 0.3);
  padding: 23px 28px;
  padding-bottom: 0;

  div {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 37px;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 17px;

    svg {
      margin-right: 20px;
      animation: ${Spin} 5s linear infinite;
    }
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
  }

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 40px;
  }

  @media (max-width: 1230px) {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    height: 145px;
    padding: 16.35px 20px 0;

    p {
      font-size: 12.8136px;
      line-height: 20px;
      width: 100%;
      text-align: center;
    }

    div {
      font-size: 17.201px;
      line-height: 27px;
      justify-content: center;

      svg {
        width: 17.86px;
        height: 17.77px;
      }
    }
  }
`;

const SkillCardMobile = styled(SkillCard)`
  display: none;

  @media (max-width: 1230px) {
    display: block;
  }
`;

/** animation variant for left section */
const leftVariant = {
  visible: {
    rotate: 0,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
  hidden: { rotate: -10, y: 35 },
};

/** animation variant for image section */
const rightVariant = {
  rightVisible: {
    rotate: 0,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
  rightHidden: { rotate: 10, y: 35 },
};

interface ISkillComponent extends Skill {
  index: number;
}

export const SkillComponent = ({
  icon,
  title,
  desc,
  index,
}: ISkillComponent) => {
  /** animation hooks for left section */
  const control = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 1 });

  /** animation hooks for right section */
  const rightControl = useAnimation();
  const [rightRef, inRightView, rightEntry] = useInView({ threshold: 1 });

  /** animation hooks for mobile section */
  const mobileControl = useAnimation();
  const [mobileRef, inMobileView, mobileEntry] = useInView();

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

  /** img section */
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

  /** mobile card */
  useEffect(() => {
    //@ts-ignore
    if (mobileEntry?.boundingClientRect?.y > 0) {
      if (mobileEntry?.isIntersecting) {
        mobileControl.start("mobileVisible");
      } else {
        mobileControl.start("mobileHidden");
      }
    }
  }, [mobileControl, inMobileView]);
  return (
    <>
      {index === 0 ? (
        <SkillCard>
          <div>
            {icon}
            {title}
          </div>

          <p>{desc}</p>
        </SkillCard>
      ) : index === 1 ? (
        <SkillCard>
          <div>
            {icon}
            {title}
          </div>

          <p>{desc}</p>
        </SkillCard>
      ) : (
        index === 2 && (
          <SkillCard>
            <div>
              {icon}
              {title}
            </div>

            <p>{desc}</p>
          </SkillCard>
        )
      )}
      <motion.div
        ref={mobileRef}
        variants={{
          mobileVisible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, type: "spring", delay: index * 0.1 },
          },
          mobileHidden: { opacity: 0, y: 60 },
        }}
        initial={"mobileHidden"}
        animate={mobileControl}
      >
        <SkillCardMobile>
          <div>
            {icon}
            {title}
          </div>

          <p>{desc}</p>
        </SkillCardMobile>
      </motion.div>
    </>
  );
};
