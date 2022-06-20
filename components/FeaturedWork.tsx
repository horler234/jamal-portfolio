import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Work } from "@type/Work";
import { Spin } from "keyframes/Spin";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { DisplayAtMedia } from "./DisplayAtMedia";

/** animation variant for left section */
const leftVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, scale: 0 },
};

/** animation variant for image section */
const imgVariant = {
  imgVisible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  imgHidden: { opacity: 0, scale: 0, y: 200 },
};

/** animation variant for mobile buttons */
const buttonVariant = {
  buttonVisible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "string" },
  },
  buttonHidden: { opacity: 0, scale: 0, y: 200 },
};

export const WorkFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 120px;

  @media (max-width: 1030px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    margin-top: 117px;
  }
`;

const WorkImage = styled.div`
  margin-top: 50px;

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    margin: 0 auto;
    max-width: 230px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

const WorkContentContainer = styled.div<{ iconBg?: string }>`
  width: 509px;

  span {
    width: 77px;
    height: 75px;
    background: ${(props) => props.iconBg ?? "#BFB2E7"};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 21px;

    svg {
      animation: ${Spin} 5s linear infinite;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 36px;
    line-height: 56px;
    text-align: center;
    color: #ffffff;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    margin: 30px 0 66px;
    color: #ffffff;
  }

  @media (max-width: 1030px) {
    text-align: center;
    span {
      margin-bottom: 9px;
      margin-right: 0;
    }

    p {
      margin-bottom: 20px;
    }
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    width: 100%;
    h2 {
      font-size: 16px;
      line-height: 25px;
    }

    span {
      width: 35px;
      height: 35px;

      svg {
        width: 16px;
      }
    }

    p {
      font-size: 14px;
      line-height: 19px;
      width: 70%;
      margin: 9px auto 0;
    }
  }
`;

const WorkContentFlex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1030px) {
    flex-direction: column;
    width: 100%;
  }
`;

const FeaturedWorkButton = styled.a<{
  bg?: string;
  isPrototype?: boolean;
  mobile?: boolean;
}>`
  width: 234px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 10px;
  background: ${(props) => props.bg ?? "#001FDF"};
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  text-decoration: none;
  ${(props) => props.isPrototype && `margin-left: 40px;`}
  ${(props) => props.mobile && `display: none;`}

  @media (max-width: 1030px) {
    ${(props) => props.isPrototype && `margin-left: 0; margin-top: 20px;`}
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
`;

const PlayImageContainer = styled.div`
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeaturedWork = ({
  icon,
  title,
  desc,
  caseLink,
  caseBg,
  protoLink,
  imgSrc,
  imgHeight,
  imgWidth,
  iconBg,
}: Work) => {
  /** animation hooks for left section */
  const control = useAnimation();
  const [ref, inView, entry] = useInView();

  /** animation hooks for right section */
  const imgControl = useAnimation();
  const [imgRef, inImgView, imgEntry] = useInView();

  /** animation hooks for mobile button */
  const buttonControl = useAnimation();
  const [buttonRef, inButtonView, buttonEntry] = useInView();

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
    if (imgEntry?.boundingClientRect?.y > 0) {
      if (imgEntry?.isIntersecting) {
        imgControl.start("imgVisible");
      } else {
        imgControl.start("imgHidden");
      }
    }
  }, [imgControl, inImgView]);

  /** button section */
  useEffect(() => {
    //@ts-ignore
    if (buttonEntry?.boundingClientRect?.y > 0) {
      if (buttonEntry?.isIntersecting) {
        buttonControl.start("buttonVisible");
      } else {
        buttonControl.start("buttonHidden");
      }
    }
  }, [buttonControl, inButtonView]);
  return (
    <WorkFlex>
      <motion.div
        ref={ref}
        variants={leftVariant}
        initial="hidden"
        animate={control}
        // style={{ width: "100%" }}
      >
        <WorkContentContainer iconBg={iconBg}>
          <WorkContentFlex>
            <span>{icon}</span>
            <h2>{title}</h2>
          </WorkContentFlex>

          <p>{desc}</p>

          <WorkContentFlex>
            <Link href={caseLink} passHref>
              <FeaturedWorkButton bg={caseBg}>
                Read Case Study
              </FeaturedWorkButton>
            </Link>

            {protoLink && (
              <Link href={protoLink} passHref>
                <FeaturedWorkButton isPrototype bg="#1D133B">
                  <PlayImageContainer>
                    <Image
                      src="/images/play-icon.png"
                      width={36}
                      height={36}
                      alt="Play Prototype"
                    />
                  </PlayImageContainer>
                  Watch Prototype
                </FeaturedWorkButton>
              </Link>
            )}
          </WorkContentFlex>
        </WorkContentContainer>
      </motion.div>

      <motion.div
        ref={imgRef}
        variants={imgVariant}
        initial="imgHidden"
        animate={imgControl}
        // style={{ width: "100%" }}
      >
        <WorkImage>
          <Image src={imgSrc} alt={title} width={imgWidth} height={imgHeight} />
        </WorkImage>
      </motion.div>

      <DisplayAtMedia custom="(max-width: 1030px)">
        <motion.span
          ref={buttonRef}
          variants={buttonVariant}
          initial="buttonHidden"
          animate={buttonControl}
        >
          <WorkContentFlex>
            <Link href={caseLink} passHref>
              <FeaturedWorkButton mobile bg={caseBg}>
                Read Case Study
              </FeaturedWorkButton>
            </Link>

            {protoLink && (
              <Link href={protoLink} passHref>
                <FeaturedWorkButton mobile isPrototype bg="#1D133B">
                  <PlayImageContainer>
                    <Image
                      src="/images/play-icon.png"
                      width={36}
                      height={36}
                      alt="Play Prototype"
                    />
                  </PlayImageContainer>
                  Watch Prototype
                </FeaturedWorkButton>
              </Link>
            )}
          </WorkContentFlex>
        </motion.span>
      </DisplayAtMedia>
    </WorkFlex>
  );
};
