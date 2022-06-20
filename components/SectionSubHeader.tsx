import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SectionSubHeaderText = styled.p<{ mt?: number }>`
  font-weight: 400;
  font-size: 24px;
  line-height: 37px;
  color: #ffffff;
  text-align: center;
  ${(props) => props.mt && `margin-top: ${props.mt}px;`}

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    font-size: 12px;
    line-height: 19px;
    margin-top: 11px;
  }
`;

const variant = {
  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
  hidden: { opacity: 0, y: 100 },
};

interface ISectionSubHeader {
  text: string;
  mt?: number;
}

export const SectionSubHeader = ({ text, mt }: ISectionSubHeader) => {
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
      <SectionSubHeaderText mt={mt}>{text}</SectionSubHeaderText>
    </motion.div>
  );
};
