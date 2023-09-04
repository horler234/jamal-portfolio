import { Work } from "@type/Work";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

/** animation variant for left section */
const variant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, y: 200 },
};

export const WorkContainer = styled.div`
  margin-top: 67px;

  > div {
    background: #1c103e;
    border-radius: 5px;
    padding: 47px 45px 73px;

    > div:first-child {
      width: 171px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      color: #ffffff;
      background: #453082;
      border-radius: 3px;
    }

    > h4 {
      font-weight: 700;
      font-size: 32px;
      color: #ffffff;
      margin: 25px 0 21px;
    }

    p {
      font-weight: 500;
      font-size: 18px;
      color: rgba(255, 255, 255, 0.8);
      max-width: 1162px;
      margin-bottom: 42px;
    }

    > div:nth-child(4) {
      position: relative;
      width: 100%;
      border-radius: 10px;
      border: 1px solid #fff;
      overflow: hidden;

      img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: auto;
      }
    }

    > div:last-child {
      margin-top: 28px;

      a {
        font-weight: 600;
        font-size: 20px;
        text-decoration: none;
        color: #ffffff;
        padding-bottom: 9px;
        border-bottom: 2px solid #ffffff;
      }
    }
  }

  &:nth-child(2) > div > div:nth-child(4) {
    border: none;
    overflow: initial;
  }

  @media (max-width: 767px) {
    margin-top: 18px;

    > div {
      padding: 27px 11px 45px 18px;

      > div:first-child {
        min-width: 79px;
        width: fit-content;
        padding: 0 8px;
        height: 21px;
        font-size: 10px;
        font-weight: 500;
      }

      h4 {
        margin: 19px 0 8px;
        font-size: 18px;
      }

      p {
        font-size: 12px;
        margin-bottom: 32px;
      }

      > div:nth-child(4) {
        border-radius: 5px;
      }

      > div:last-child a {
        font-size: 12px;
        padding-bottom: 5.5px;
      }
    }

    &:nth-child(2) {
      margin-top: 81px;
    }
  }
`;

interface IFeaturedWork {
  work: Work;
}

export const FeaturedWork = ({ work }: IFeaturedWork) => {
  /** animation hooks */
  const control = useAnimation();
  const [ref, inView, entry] = useInView();

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

  return (
    <WorkContainer>
      <motion.div
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={control}
      >
        <div>{work.category}</div>

        <h4>{work.title}</h4>

        <p>{work.desc}</p>

        <div>
          <Image src={work.imgSrc} width={1160} height={405} alt={work.title} />
        </div>

        <div>
          {work.caseLink && (
            <Link href={work.caseLink}>
              <a>Read Case Study</a>
            </Link>
          )}

          {work.siteLink && (
            <Link href={work.siteLink}>
              <a>View Website</a>
            </Link>
          )}
        </div>
      </motion.div>
    </WorkContainer>
  );
};
