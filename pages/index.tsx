import { FeaturedWork } from "@components/FeaturedWork";
import { ArrowIcon } from "@components/icons/ArrowIcon";
import {
  PlayPrototypeIcon,
  YouWorkIcon,
} from "@components/icons/featured-works";
import { UIIcon } from "@components/icons/skillset/UIIcon";
import { EmailIcon, PhoneIcon } from "@components/icons/social";
import { RandomDesignComponent } from "@components/RandomDesignComponent";
import { SkillComponent } from "@components/SkillComponent";
import { featuredWorks } from "@constants/featuredWorks";
import { randomDesigns } from "@constants/randomDesigns";
import { skills } from "@constants/skills";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";
import { DisplayAtMedia } from "@components/DisplayAtMedia";
import { CloseIcon } from "@components/icons/CloseIcon";
import { Loader } from "@components/Loader";

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
      font-size: 12px;
      line-height: 19px;
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
  ${(props) => props.isUp && `transform: rotate(180deg);`}

  svg {
    height: 20px;
  }
`;

export const SectionHeader = styled.h1`
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

export const SectionSubHeader = styled.p<{ mt?: number }>`
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

  div:last-child {
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
        font-size: 12px;
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

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    padding-bottom: 0;
  }
`;

export const SkillSetFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    justify-content: space-around;
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

export const ContactFormContainer = styled.form`
  margin-top: 80px;
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
    background: #006d3f;
    border-radius: 10px;
    border: transparent;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    font-family: inherit;
    color: #ffffff;
    margin: 0 auto;
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    margin-top: 24px;

    input {
      font-size: 12px;
      line-height: 19px;
      height: 50px;
    }

    textarea {
      margin-top: 17px;
      font-size: 12px;
      line-height: 19px;
      height: 103px;
    }

    button {
      max-width: 177px;
    }
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0 72px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;

    svg {
      margin-right: 30px;
    }

    a:last-child {
      margin-left: 40px;
    }
  }

  @media (max-width: ${(props) => props.theme.media.mediaSizesString.tablet}) {
    /* @media (max-width: 690px) { */
    flex-wrap: wrap;

    div {
      font-size: 14px;
      line-height: 22px;

      &:first-child {
        /* margin-bottom: 43px; */
      }
    }
  }

  @media (max-width: 631px) {
    div:last-child {
      margin-top: 43px;
    }
  }
  @media (max-width: 509px) {
    div:first-child {
      margin-bottom: 43px;
    }

    div:last-child {
      margin-top: 0;
    }
  }
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
  padding-top: 180px;
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

const MobileNavigationItem = styled(NavigationListItem)`
  display: flex;
  a {
    font-weight: ${(props) => (props.isActive ? 700 : 400)};
  }

  span {
    background: ${(props) => (props.isActive ? "#0bb7dd" : "transparent")};
  }
`;

const links = [
  {
    title: "Home",
    href: "/",
  },

  { title: "My Works", href: "#works" },
  {
    title: "About me",
    href: "#about",
  },

  { title: "Contact", href: "#contact" },
];

const Home: NextPage = () => {
  const [scroll, setScroll] = useState(0);
  const [section, setSection] = useState("/");

  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  if (typeof window !== "undefined")
    window.addEventListener("scroll", () => setScroll(window.scrollY));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AbdulQadir | Portfolio</title>
      </Head>

      <NavigationContainer bg={scroll > 45 ? "#11003e" : "transparent"}>
        <NavigationContent>
          <div>
            <LogoContainer>
              <Link href="/">
                <a>AA</a>
              </Link>
            </LogoContainer>
          </div>

          <AnimateSharedLayout>
            <ul>
              {links.map(({ title, href }, i) => (
                <NavigationListItem key={i} isActive={section === href}>
                  <Link href={href}>
                    <a>{title}</a>
                  </Link>

                  {section === href && (
                    <motion.div
                      layoutId="navigation-circle"
                      animate
                      style={{
                        position: "absolute",
                        left: "50%",
                        marginLeft: -6,
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: "#0BB7DD",
                        bottom: -10,
                        // zIndex: 1,
                      }}
                    />
                  )}
                </NavigationListItem>
              ))}
            </ul>
          </AnimateSharedLayout>

          <HireButton>Hire me</HireButton>

          <HamburgerContainer>
            <button name="show-navigation" onClick={() => setIsOpen(true)}>
              <span />
              <span />
              <span />
            </button>
          </HamburgerContainer>
        </NavigationContent>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                top: 0,
                left: 0,
                pointerEvents: "none",
              }}
              transition={{ type: "just" }}
            >
              <MobileNavigation>
                <button name="hide-navigation" onClick={() => setIsOpen(false)}>
                  <CloseIcon />
                </button>

                <ul>
                  {links.map(({ title, href }, i) => (
                    <MobileNavigationItem key={i} isActive={section === href}>
                      <Link href={href}>
                        <a onClick={() => setIsOpen(false)}>{title}</a>
                      </Link>
                      <span />
                    </MobileNavigationItem>
                  ))}
                </ul>

                <ContactInfoContainer>
                  <div>
                    <EmailIcon />
                    abdulqadiradebayo331@gmail.com
                  </div>

                  <div>
                    <PhoneIcon />
                    +2348139011252
                  </div>

                  <div>
                    <Link href="/">
                      <a>
                        <Image
                          src="/images/behance.png"
                          alt="Behance"
                          width={35}
                          height={35}
                        />
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <Image
                          src="/images/linkedin.png"
                          alt="Linkedin"
                          width={35}
                          height={35}
                        />
                      </a>
                    </Link>
                  </div>
                </ContactInfoContainer>
              </MobileNavigation>
            </motion.div>
          )}
        </AnimatePresence>
      </NavigationContainer>

      <PageHeader
        ref={(ref) => {
          if (ref && scroll >= 0) setSection("/");
        }}
      >
        <h1>
          Hi, there! I’m Abdulqadir Adebayo, a UI/UX Designer from Nigeria.
        </h1>
        <p>
          I have 2years of experience working as a UI/UX Designer within and
          outside of my country. I help small and large scale businesses solve
          their problems by building User centred products and trouble shooting
          UX Problems, which in turn increases their profit/revenue.
        </p>
        <div>
          <Link href="/" passHref>
            <GreenButton>Hire me</GreenButton>
          </Link>

          <Link href="/" passHref>
            <TransparentButton>View CV</TransparentButton>
          </Link>
        </div>
        <SkipButton onClick={() => router.push("#works")}>
          <ArrowIcon />
        </SkipButton>
      </PageHeader>

      <WorksContainer
        ref={(ref) => {
          if (ref && scroll >= ref?.offsetTop) setSection("#works");
        }}
        id="works"
      >
        <SectionHeader>Featured Works</SectionHeader>

        {featuredWorks.map((work, i) => (
          <FeaturedWork
            key={i}
            title={work.title}
            desc={work.desc}
            icon={work.icon}
            imgSrc={work.imgSrc}
            imgWidth={work.imgWidth}
            imgHeight={work.imgHeight}
            caseLink={work.caseLink}
            protoLink={work.protoLink}
            caseBg={work.caseBg}
            iconBg={work.iconBg}
          />
        ))}
      </WorksContainer>

      <RandomContainer>
        <SectionHeader>Some of my random UI Designs</SectionHeader>

        <RandomDesignsContent>
          {randomDesigns.map((des, i) => (
            <RandomDesignComponent
              key={i}
              imgSrc={des.imgSrc}
              desc={des.desc}
              href={des.href}
            />
          ))}
        </RandomDesignsContent>
      </RandomContainer>

      <AboutSectionContainer
        ref={(ref) => {
          if (ref && scroll >= ref?.offsetTop - 10) setSection("#about");
        }}
        id="about"
      >
        <AboutImageContainer>
          <Image
            src="/images/abdulqadir.png"
            width={441}
            height={500}
            alt="Abdulqadir"
          />

          <DisplayAtMedia custom="(max-width: 1100px)">
            <Link href="/" passHref>
              <GreenButton>View CV</GreenButton>
            </Link>
          </DisplayAtMedia>
        </AboutImageContainer>

        <div>
          <h1>About me</h1>

          <p>
            Over the last two years, I&apos;ve been growing and honing my skills
            as a UI/UX Designer with experience in designing and building
            products in different sectors which serve as a solution to various
            public problems.
            <br />
            <br />
            I&apos;ve worked with diverse teams, from different countries, which
            has enabled me gain a wide range of experience and also increased my
            ability to work well with teams.
            <br />
            <br />
            Outside work, I enjoy reading and impacting what I know to people.
          </p>

          <DisplayAtMedia custom="(min-width: 1101px)">
            <Link href="/" passHref>
              <GreenButton>View CV</GreenButton>
            </Link>
          </DisplayAtMedia>
        </div>
      </AboutSectionContainer>

      <SkillSectionContainer>
        <SectionHeader>My skillset</SectionHeader>
        <SectionSubHeader mt={33}>
          With my skills in different fields of design, I am the best hands you
          need on your projects.
        </SectionSubHeader>

        <SkillSetFlex>
          {skills.map((skill, i) => (
            <SkillComponent
              key={i}
              icon={skill.icon}
              title={skill.title}
              desc={skill.desc}
            />
          ))}
        </SkillSetFlex>
      </SkillSectionContainer>

      <ContactSectionContainer
        as="footer"
        ref={(ref: any) => {
          if (ref && scroll >= ref?.offsetTop - 10) setSection("#contact");
        }}
        id="contact"
      >
        <SectionHeader>Contact me and let’s work together</SectionHeader>
        <SectionSubHeader mt={18}>Send me a message below.</SectionSubHeader>

        <ContactFormContainer>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Send</button>
        </ContactFormContainer>

        <ContactInfoContainer>
          <div>
            <EmailIcon />
            abdulqadiradebayo331@gmail.com
          </div>

          <div>
            <PhoneIcon />
            +2348139011252
          </div>

          <div>
            <Link href="/">
              <a>
                <Image
                  src="/images/behance.png"
                  alt="Behance"
                  width={35}
                  height={35}
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image
                  src="/images/linkedin.png"
                  alt="Linkedin"
                  width={35}
                  height={35}
                />
              </a>
            </Link>
          </div>
        </ContactInfoContainer>

        <SkipButton isUp onClick={() => router.push("/")}>
          <ArrowIcon />
        </SkipButton>
      </ContactSectionContainer>
    </>
  );
};

export default Home;
