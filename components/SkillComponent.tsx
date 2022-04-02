import { Skill } from "@type/Skill";
import styled from "styled-components";

const SkillCard = styled.div`
  width: 380px;
  height: 204px;
  background: rgba(51, 40, 85, 0.3);
  padding: 23px 28px;
  padding-bottom: 0;

  div {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 37px;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 17px;

    svg {
      margin-right: 20px;
    }
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
  }

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 40px;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    height: 145px;
    padding: 16.35px 20px 0;

    p {
      font-size: 12.8136px;
      line-height: 20px;
      width: 100%;
      text-align: center;
    }

    div {
      font-size: 17.201px;
      line-height: 27px;
      justify-content: center;

      svg {
        width: 17.86px;
        height: 17.77px;
      }
    }
  }
`;

export const SkillComponent = ({ icon, title, desc }: Skill) => (
  <SkillCard>
    <div>
      {icon}
      {title}
    </div>

    <p>{desc}</p>
  </SkillCard>
);
