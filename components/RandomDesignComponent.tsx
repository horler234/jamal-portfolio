import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { RandomDesign } from "@type/RandomDesign";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const RandomDesignContainer = styled.div`
  width: 100%;
  max-width: 302px;

  div {
    width: 100%;
    height: 258px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 22px;
    position: relative;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    width: 209px;
  }

  a {
    border: 1px solid #6b37ff;
    border-radius: 10px;
    width: 234px;
    height: 60px;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-top: 50px;
    background: linear-gradient(to left, transparent 50%, #6b37ff 50%) right;
    background-size: 200%;
    transition: 0.5s ease-out;

    &:hover {
      background-position: left;
    }
  }

  @media (max-width: 1010px) {
    margin-bottom: 80px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      width: 100%;
    }

    a {
      margin-top: 20px;
    }
  }
`;

interface IRandomDesignComponent extends RandomDesign {
  index: number;
}

export const RandomDesignComponent = ({
  imgSrc,
  desc,
  href,
  index,
}: IRandomDesignComponent) => {
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
    <motion.div
      ref={ref}
      style={{ width: "100%", maxWidth: "302px" }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay: index * 0.1 },
        },
        hidden: { opacity: 0, y: 200 },
      }}
      initial="hidden"
      animate={control}
    >
      <RandomDesignContainer>
        <div>
          <Image src={imgSrc} layout="fill" alt="Random Design" />
        </div>

        <p>{desc}</p>
        <Link href={href}>
          <a>View Design</a>
        </Link>
      </RandomDesignContainer>
    </motion.div>
  );
};
