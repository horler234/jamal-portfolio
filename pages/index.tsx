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
  aboutImgHidden: { opacity: 0, x: "-100%", scale: 0 },
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

  const [isLoading, setIsLoading] = useState(true);

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
            <motion.h1
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring" }}
            >
              Hi, there! I’m Abdulqadir Adebayo, a UI/UX Designer from Nigeria.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.1 }}
            >
              I have 2years of experience working as a UI/UX Designer within and
              outside of my country. I help small and large scale businesses
              solve their problems by building User centred products and trouble
              shooting UX Problems, which in turn increases their
              profit/revenue.
            </motion.p>
            <div>
              <motion.span
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.2 }}
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
                transition={{ type: "spring", delay: 0.3 }}
              >
                <TransparentButton
                  href="https://docs.google.com/document/d/1M5BoHHzqdKMfQheoMs6QpfY7dDF-MnSi/edit?usp=drivesdk&ouid=106240438463745738776&rtpof=true&sd=true"
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
            <SectionHeader text="Featured Works" />

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
          </RandomContainer>

          <AboutSectionContainer
            ref={(ref) => {
              if (ref && scroll >= ref?.offsetTop - 10) setSection("#about");
            }}
            id="about"
          >
            <AboutImageContainer>
              <motion.span
                ref={aboutImgRef}
                style={{
                  width: "100%",
                  position: "relative",
                  height: "100%",
                }}
                variants={aboutImgVariant}
                initial="aboutImgHidden"
                animate={aboutImgControl}
              >
                <Image
                  src="/images/abdulqadir.png"
                  width={441}
                  height={500}
                  alt="Abdulqadir"
                />

                <DisplayAtMedia custom="(max-width: 1100px)">
                  <GreenButton
                    href="https://docs.google.com/document/d/1M5BoHHzqdKMfQheoMs6QpfY7dDF-MnSi/edit?usp=drivesdk&ouid=106240438463745738776&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CV
                  </GreenButton>
                </DisplayAtMedia>
              </motion.span>
            </AboutImageContainer>

            <motion.div
              ref={aboutTextRef}
              variants={aboutTextVariant}
              initial="aboutTextHidden"
              animate={aboutTextControl}
            >
              <h1>About me</h1>

              <p>
                Over the last two years, I&apos;ve been growing and honing my
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

              <DisplayAtMedia custom="(min-width: 1101px)">
                <GreenButton
                  href="https://docs.google.com/document/d/1M5BoHHzqdKMfQheoMs6QpfY7dDF-MnSi/edit?usp=drivesdk&ouid=106240438463745738776&rtpof=true&sd=true"
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
