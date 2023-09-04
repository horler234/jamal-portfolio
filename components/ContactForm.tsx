import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "@formcarry/react";

const ContactFormContainer = styled.form`
  margin-top: 80px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  input {
    width: 48%;
    height: 68px;
    background: #1d133b;
    font-size: 18px;
    line-height: 28px;
    font-family: inherit;
    color: #777777;
    padding-left: 20px;
    border: none;
    color: #fff;

    &:focus {
      outline: none;
    }
  }

  textarea {
    width: 100%;
    margin: 40px 0 54px;
    padding: 14px;
    height: 221px;
    resize: none;
    background: #1d113b;
    font-size: 18px;
    line-height: 28px;
    font-family: inherit;
    border: none;
    color: #fff;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 100%;
    max-width: 525px;
    height: 60px;
    background: #6936fa;
    border-radius: 10px;
    border: transparent;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    font-family: inherit;
    color: #ffffff;
    margin: 0 auto;
    cursor: pointer;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    margin-top: 24px;

    input {
      font-size: 16px;
      height: 50px;
    }

    textarea {
      margin-top: 17px;
      font-size: 16px;
      line-height: 19px;
      height: 103px;
    }

    button {
      max-width: 177px;
    }
  }
`;

export const SubmittedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 284px;
`;

const variant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export const ContactForm = () => {
  const control = useAnimation();
  const [ref, inView, entry] = useInView();

  const { state, submit } = useForm({
    id: "TOiO7rR9DPC",
  });

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

  if (state.submitted) {
    return <SubmittedContainer>Thanks for the feedback!</SubmittedContainer>;
  }

  return (
    <motion.div ref={ref} variants={variant} initial="hidden" animate={control}>
      <ContactFormContainer onSubmit={submit}>
        <input type="text" placeholder="Name" id="name" name="name" />
        <input type="text" placeholder="Email" id="email" name="email" />
        <textarea placeholder="Message" id="message" name="message" />
        <button>Send</button>
      </ContactFormContainer>
    </motion.div>
  );
};
