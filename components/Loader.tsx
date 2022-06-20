import { Bounce, SecondBounce } from "keyframes/Bounce";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const LoaderContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    width: 90%;
    margin: 0 auto;
    max-width: 470px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 31px;
      margin-top: 23px;
    }
  }

  @media (max-width: 768px) {
    section p {
      font-size: 13.4894px;
      line-height: 21px;
      margin-top: 15.51px;
    }
  }
`;

export const CirclesContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleRing = styled.div<{ lightBg: string; darkBg: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.lightBg};
  margin-bottom: 40px;
  animation: ${Bounce} 2.5s ease infinite;

  &:last-child {
    animation-name: ${SecondBounce};
  }

  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.darkBg};
    font-weight: 400;
    font-size: 23.1px;
    line-height: 36px;
  }

  &:first-child {
    margin-right: 21px;
  }

  @media (max-width: 768px) {
    width: 53.96px;
    height: 53.96px;
    margin-bottom: 26.98px;

    div {
      width: 33.72px;
      height: 33.72px;
      font-size: 15.8918px;
      line-height: 25px;
    }

    &:first-child {
      margin-right: 14.16px;
    }
  }
`;

export const LinearLoader = styled.div<{ progress: number }>`
  position: relative;
  width: 100%;
  height: 17px;
  background: #a99ad2;
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    z-index: 1;
  }

  div {
    height: 100%;
    width: ${(props) => props.progress}%;
    position: absolute;
    left: 0;
    top: 0;
    background: #6b37ff;
  }

  @media (max-width: 768px) {
    height: 11.47px;
    font-size: 8.09362px;
    line-height: 13px;
  }
`;

export const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) return;
    const load = setTimeout(() => {
      setProgress((progress) => progress + 1);
      return () => clearTimeout(load);
    }, 30);
  }, [progress]);
  return (
    <LoaderContainer>
      <section>
        <CirclesContainer>
          <TitleRing lightBg="#7184FF" darkBg="#0011FF">
            <div>UI</div>
          </TitleRing>

          <TitleRing lightBg="#6D9282" darkBg="#006D3F">
            <div>UX</div>
          </TitleRing>
        </CirclesContainer>

        <LinearLoader progress={progress}>
          <div />
          <span>{progress}%</span>
        </LinearLoader>

        <p>Abdulqadir.portfolio...</p>
      </section>
    </LoaderContainer>
  );
};
