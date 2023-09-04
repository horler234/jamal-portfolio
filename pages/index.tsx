import { FeaturedWork } from "@components/FeaturedWork";
import { ArrowIcon } from "@components/icons/ArrowIcon";
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
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimation,
} from "framer-motion";
import { DisplayAtMedia } from "@components/DisplayAtMedia";
import { CloseIcon } from "@components/icons/CloseIcon";
import { Loader } from "@components/Loader";
import { useInView } from "react-intersection-observer";
import {
  AboutImageContainer,
  AboutSectionContainer,
  ContactSectionContainer,
  GreenButton,
  HamburgerContainer,
  HireButton,
  LogoContainer,
  MobileNavigation,
  MobileNavigationItem,
  NavigationContainer,
  NavigationContent,
  NavigationListItem,
  PageHeader,
  RandomContainer,
  RandomDesignsContent,
  SkillSectionContainer,
  SkillSetFlex,
  SkipButton,
  TransparentButton,
  WorksContainer,
} from "@components/PageStyles";
import { SectionHeader } from "@components/SectionHeader";
import { isAnyArrayBuffer } from "util/types";
import { SectionSubHeader } from "@components/SectionSubHeader";
import { ContactForm } from "@components/ContactForm";
import { ContactInfo } from "@components/ContactInfo";
import { NigeriaFlag } from "@components/icons/NigeriaFlag";
import { Parallax } from "react-scroll-parallax";

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

const aboutImgVariant = {
  aboutImgVisible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
  aboutImgHidden: { opacity: 0, x: -200, scale: 0 },
};

const aboutTextVariant = {
  aboutTextVisible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  aboutTextHidden: { opacity: 0, scale: 0 },
};

const Home: NextPage = () => {
  const [scroll, setScroll] = useState(0);
  const [section, setSection] = useState("/");

  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  if (typeof window !== "undefined")
    window.addEventListener("scroll", () => setScroll(window.scrollY));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4700);
  }, []);

  /** aboutImage animation hooks */
  const aboutImgControl = useAnimation();
  const [aboutImgRef, inAboutImgView, aboutImgEntry] = useInView();

  /** aboutText animation hooks */
  const aboutTextControl = useAnimation();
  const [aboutTextRef, inAboutTextView, aboutTextEntry] = useInView();

  useEffect(() => {
    //@ts-ignore
    if (aboutImgEntry?.boundingClientRect?.y > 0) {
      if (aboutImgEntry?.isIntersecting) {
        aboutImgControl.start("aboutImgVisible");
      } else {
        aboutImgControl.start("aboutImgHidden");
      }
    }
  }, [aboutImgControl, inAboutImgView]);

  useEffect(() => {
    //@ts-ignore
    if (aboutTextEntry?.boundingClientRect?.y > 0) {
      if (aboutTextEntry?.isIntersecting) {
        aboutTextControl.start("aboutTextVisible");
      } else {
        aboutTextControl.start("aboutTextHidden");
      }
    }
  }, [aboutTextControl, inAboutTextView]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AbdulQadir | Portfolio</title>
      </Head>

      {isLoading ? (
        <Loader />
      ) : (
        <>
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
                            background: "#6936FA",
                            bottom: -14,
                            // zIndex: 1,
                          }}
                        />
                      )}
                    </NavigationListItem>
                  ))}
                </ul>
              </AnimateSharedLayout>

              <HireButton
                href="mailto:abdulqadiradebayo331@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire me
              </HireButton>

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
                    <button
                      name="hide-navigation"
                      onClick={() => setIsOpen(false)}
                    >
                      <CloseIcon />
                    </button>

                    <ul>
                      {links.map(({ title, href }, i) => (
                        <MobileNavigationItem
                          key={i}
                          isActive={section === href}
                        >
                          <Link href={href}>
                            <a onClick={() => setIsOpen(false)}>{title}</a>
                          </Link>
                          <span />
                        </MobileNavigationItem>
                      ))}
                    </ul>

                    <ContactInfo />
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
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring" }}
            >
              Hi! I’m Abdulqadir. <NigeriaFlag />{" "}
              <Image
                src="/images/arm-emoji.png"
                alt="Emoji"
                width={12}
                height={12}
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.1 }}
            >
              I’m a Product Designer, based in Lagos, Nigeria, with about 3
              years of Experience.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              I’m experienced in leading the design processes from start to
              finish. From making user centered researches, design thinking
              processes, creating wireframes, creating UI/UX designs to
              Prototyping e.t.c. I have worked with different teams in building
              products across diverse sectors in Finance, Legal sectors,
              Education, Logistics, E-commerce and many more. I feel comfortable
              using various methods and design tools in bringing ideas and
              concepts to life.
            </motion.p>
            <div>
              <motion.span
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.3 }}
              >
                <GreenButton
                  href="mailto:abdulqadiradebayo331@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire me
                </GreenButton>
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.4 }}
              >
                <TransparentButton
                  href="https://drive.google.com/file/d/1MCOkOtFoyYK_bnESeSzS8Xa-eBRytin5/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                </TransparentButton>
              </motion.span>
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
            <SectionHeader
              text="Have a look at some of my works."
              icon={
                <Image
                  src="/images/cool-emoji.png"
                  alt="Emoji"
                  width={46}
                  height={46}
                />
              }
            />

            {featuredWorks.map((work, i) => (
              <FeaturedWork key={i} work={work} />
            ))}
          </WorksContainer>

          {/* <RandomContainer>
            <SectionHeader text="Some of my random UI Designs" />

            <RandomDesignsContent>
              {randomDesigns.map((des, i) => (
                <RandomDesignComponent
                  index={i}
                  key={i}
                  imgSrc={des.imgSrc}
                  desc={des.desc}
                  href={des.href}
                />
              ))}
            </RandomDesignsContent>
          </RandomContainer> */}

          <AboutSectionContainer
            ref={(ref) => {
              if (ref && scroll >= ref?.offsetTop - 10) setSection("#about");
            }}
            id="about"
          >
            <AboutImageContainer>
              <div>
                <Parallax translateY={[-5, 5]}>
                  <div />
                </Parallax>
                <span>
                  <Parallax translateY={[5, -5]}>
                    <Image
                      src="/images/abdulqadir.png"
                      width={441}
                      height={500}
                      alt="Abdulqadir"
                    />
                  </Parallax>

                  <h4>Abdulqadir Adebayo</h4>
                  <p>Product Designer</p>

                  <DisplayAtMedia custom="(max-width: 1220px)">
                    <GreenButton
                      href="https://drive.google.com/file/d/1MCOkOtFoyYK_bnESeSzS8Xa-eBRytin5/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View CV
                    </GreenButton>
                  </DisplayAtMedia>
                </span>
              </div>
            </AboutImageContainer>

            <motion.div
              ref={aboutTextRef}
              variants={aboutTextVariant}
              initial="aboutTextHidden"
              animate={aboutTextControl}
            >
              <h1>About me</h1>

              <p>
                Over the last three years, I&apos;ve been growing and honing my
                skills as a UI/UX Designer with experience in designing and
                building products in different sectors which serve as a solution
                to various public problems.
                <br />
                <br />
                I&apos;ve worked with diverse teams, from different countries,
                which has enabled me gain a wide range of experience and also
                increased my ability to work well with teams.
                <br />
                <br />
                Outside work, I enjoy reading and impacting what I know to
                people.
              </p>

              <DisplayAtMedia custom="(min-width: 1221px)">
                <GreenButton
                  href="https://drive.google.com/file/d/1MCOkOtFoyYK_bnESeSzS8Xa-eBRytin5/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                </GreenButton>
              </DisplayAtMedia>
            </motion.div>
          </AboutSectionContainer>

          <SkillSectionContainer>
            <SectionHeader text="My skillset" />
            <SectionSubHeader
              mt={33}
              text="With my skills in different fields of design, I am the best hands
              you need on your projects."
            />

            <SkillSetFlex>
              {skills.map((skill, i) => (
                <SkillComponent
                  key={i}
                  index={i}
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
            <SectionHeader text="Contact me and let’s work together" />
            <SectionSubHeader mt={18} text="Send me a message below." />

            <ContactForm />

            <ContactInfo />

            <SkipButton isUp onClick={() => router.push("/")}>
              <ArrowIcon />
            </SkipButton>
          </ContactSectionContainer>
        </>
      )}
    </>
  );
};

export default Home;
