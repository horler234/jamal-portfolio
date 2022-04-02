import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { RandomDesign } from "@type/RandomDesign";

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

export const RandomDesignComponent = ({ imgSrc, desc, href }: RandomDesign) => (
  <RandomDesignContainer>
    <div>
      <Image src={imgSrc} layout="fill" alt="Random Design" />
    </div>

    <p>{desc}</p>
    <Link href={href}>
      <a>View Design</a>
    </Link>
  </RandomDesignContainer>
);
