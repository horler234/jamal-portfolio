import { SkipBounce } from "keyframes/Bounce";
import styled from "styled-components";

export const NavigationContainer = styled.nav<{ bg: string }>`
  /* padding: 30px 0; */
  height: 90px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background: ${(props) => props.bg};
  transition: all 0.6s ease;
  z-index: 5;
`;

export const NavigationContent = styled.div`
  width: 86%;
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 98px;
      /* height: 40px; */

      &:first-child {
        margin-left: 0;
      }

      a {
        text-decoration: none;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  @media (max-width: 1100px) {
    ul li {
      margin-left: 50px;
    }
  }

  @media ${(props) => props.theme.media.tablet} {
    ul li {
      margin-left: 30px;
    }
  }
`;

export const LogoContainer = styled.div`
  border-bottom: 3.35294px solid #006d3f;

  a {
    font-weight: 500;
    font-size: 40.2353px;
    line-height: 40px;
    color: #fcfcfc;
    text-decoration: none;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    font-size: 28.2857px;
    line-height: 10px;
  }
`;

export const NavigationListItem = styled.li<{ isActive?: boolean }>`
  position: relative;
  a {
    color: ${(props) => (props.isActive ? "#0BB7DD" : "#fff")};
    transition: all 0.6s ease;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

export const HamburgerContainer = styled.div`
  display: none;

  @media (max-width: 860px) {
    display: flex;
    align-items: center;

    button {
      background: none;
      border: none;
      span {
        width: 42px;
        height: 3px;
        background: #fff;
        display: block;
        margin-bottom: 6px;

        &:last-child {
          margin: 0;
        }
      }
    }
  }
`;

export const HireButton = styled.button`
  cursor: pointer;
  width: 177px;
  height: 60px;
  background: #006d3f;
  border: transparent;
  border-radius: 10px;
  font-weight: 500;
  font-size: 24px;
  line-height: 37px;
  color: #ffffff;
  font-family: inherit;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const PageHeader = styled.header`
  width: 75%;
  max-width: 849px;
  margin: 0 auto;
  padding: 77px 0;
  text-align: center;

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 74px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 25px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 62px;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    h1 {
      font-size: 24px;
      line-height: 37px;
      margin-bottom: 19px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
    }

    div {
      flex-direction: column;
      margin: 31px 0 40px;
    }
  }
`;

export const GreenButton = styled.a`
  width: 177px;
  height: 60px;
  border-radius: 10px;
  background: #006d3f;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  border: transparent;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    width: 234px;
  }
`;

export const TransparentButton = styled(GreenButton)`
  background: transparent;
  border: 1px solid #ffffff;
  margin-left: 29px;

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    margin: 21px 0 0;
  }
`;

export const SkipButton = styled.button<{ isUp?: boolean }>`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #0bb7dd;
  background: transparent;
  animation: ${SkipBounce} 3s ease infinite;

  svg {
    ${(props) => props.isUp && `transform: rotate(180deg);`}
    height: 20px;
  }
`;

export const WorksContainer = styled.section`
  padding: 77px 0 152px;
  width: 75%;
  max-width: 1150px;
  margin: 0 auto;

  @media (max-width: 1300px) {
    width: 90%;
    max-width: 1000px;
  }

  @media (max-width: 1030px) {
    max-width: 700px;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    padding-bottom: 0;
  }
`;

export const RandomContainer = styled(WorksContainer)`
  padding-bottom: 134px;
  width: 90%;
  max-width: 1250px;

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    padding-bottom: 0;
  }
`;

export const RandomDesignsContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 95px;
  flex-wrap: wrap;

  @media (max-width: 1010px) {
    justify-content: space-around;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    margin-top: 40px;
  }
`;

export const AboutSectionContainer = styled(WorksContainer)`
  padding: 134px 0 99px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1150px;

  > div:last-child {
    width: 527px;

    h1 {
      font-weight: 600;
      font-size: 36px;
      line-height: 56px;
      margin-bottom: 25px;
      color: #ffffff;
    }

    p {
      font-size: 18px;
      line-height: 28px;
      color: #ffffff;
      margin-bottom: 68px;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    text-align: center;
    /* max-width: 500px; */

    div:last-child {
      width: 100%;
    }

    div:first-child a {
      margin: 40px auto 0;
    }
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    padding-top: 120px;
    div:last-child {
      h1 {
        margin-bottom: 19px;
        font-size: 20px;
        line-height: 31px;
      }

      p {
        margin-bottom: 40px;
        font-size: 14px;
        line-height: 19px;
      }
    }
  }
`;

export const AboutImageContainer = styled.div`
  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    max-width: 269px;
    margin: 0 auto;
  }
`;

export const SkillSectionContainer = styled(RandomContainer)`
  padding: 99px 0 107px;

  @media (max-width: 1300px) {
    width: 95%;
  }

  @media (max-width: 1230px) {
    width: 90%;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    padding-bottom: 0;
  }
`;

export const SkillSetFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;

  @media (max-width: 1230px) {
    /* width: 95%; */
    /* flex-wrap: wrap;
    justify-content: space-around; */
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    margin-top: 39px;
  }
`;

export const ContactSectionContainer = styled(RandomContainer)`
  padding: 107px 0 57px;
  width: 90%;
  max-width: 897px;
  text-align: center;
`;

export const MobileNavigation = styled.div`
  /* position: fixed; */
  width: 100vw;
  height: 100vh;
  /* top: 0; */
  /* left: 0; */
  background: #1f1636;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 30px;
  padding-top: 100px;
  display: none;
  align-items: center;

  button {
    background: none;
    border: none;
    cursor: pointer;
    top: 50px;
    right: 30px;
    position: fixed;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 50px;
      position: relative;
      flex-direction: column;
      align-items: center;

      a {
        font-size: 24px;
        line-height: 37px;
        text-decoration: none;
      }
      span {
        /* position: absolute;
        left: 50%;
        margin-left: -6px; */
        width: 12px;
        height: 12px;
        border-radius: 50%;
        transition: all 0.6s ease;
        /* background: #0bb7dd; */
        /* bottom: -10px; */
      }
    }
  }

  @media (max-width: 860px) {
    display: flex;
    pointer-events: auto;
  }
`;

export const MobileNavigationItem = styled(NavigationListItem)`
  display: flex;
  a {
    font-weight: ${(props) => (props.isActive ? 700 : 400)};
  }

  span {
    background: ${(props) => (props.isActive ? "#0bb7dd" : "transparent")};
  }
`;
