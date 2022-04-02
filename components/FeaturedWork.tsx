import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Work } from "@type/Work";

export const WorkFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 120px;

  @media (max-width: 1030px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    margin-top: 41px;
  }
`;

const WorkImage = styled.div`
  margin-top: 50px;

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
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
      font-size: 12px;
      line-height: 19px;
      margin: 9px 0 0;
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
}: Work) => (
  <WorkFlex>
    <WorkContentContainer iconBg={iconBg}>
      <WorkContentFlex>
        <span>{icon}</span>
        <h2>{title}</h2>
      </WorkContentFlex>

      <p>{desc}</p>

      <WorkContentFlex>
        <Link href={caseLink} passHref>
          <FeaturedWorkButton bg={caseBg}>Read Case Study</FeaturedWorkButton>
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

    <WorkImage>
      <Image src={imgSrc} alt={title} width={imgWidth} height={imgHeight} />
    </WorkImage>

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
  </WorkFlex>
);
