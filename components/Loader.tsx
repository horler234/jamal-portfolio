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
`;

export const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) return;
    const load = setTimeout(() => {
      setProgress((progress) => progress + 1);
      return () => clearTimeout(load);
    }, 50);
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
