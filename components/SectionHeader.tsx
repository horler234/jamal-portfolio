import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SectionHeaderText = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 56px;
  text-align: center;
  color: #ffffff;
  margin: 0;

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    font-size: 20px;
    line-height: 31px;
  }
`;

const variant = {
  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
  hidden: { opacity: 0, y: 100 },
};

interface ISectionHeader {
  text: string;
}

export const SectionHeader = ({ text }: ISectionHeader) => {
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
    <motion.div ref={ref} variants={variant} initial="hidden" animate={control}>
      <SectionHeaderText>{text}</SectionHeaderText>
    </motion.div>
  );
};
