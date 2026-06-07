import TextType from "../components/TextType"
//import PixelTrail from "../components/PixelTrail"
import Dither from "../components/Dither"
import ProfileCard from "../components/ProfileCard"
import Projects from "../components/Projects"
import StarBorder from "../components/StarBorder"
import { MdEmail } from "react-icons/md"
import { ImLinkedin2 } from "react-icons/im"
import { SiGithub } from "react-icons/si"

function Home() {
  return (
    <>
      <div className="hero">
        <div className="dither-layer">
          <Dither
            waveColor={[0.2980392156862745, 0.11372549019607843, 0.4666666666666667]}
            disableAnimation={false}
            enableMouseInteraction={false}
            mouseRadius={0.3}
            colorNum={9}
            waveAmplitude={0.5}
            waveFrequency={10}
            waveSpeed={0.03}
          />
        </div>
        <div className="content">
          <h1>
            Emmanuel
            <br />
            Millan
          </h1>

          <div className="hero-subtitle">
            <TextType
              text={["Biomedical Engineering", "Research", "Neuroscience"]}
              loop={true}
              typingSpeed={40}
              pauseDuration={3000}
              showCursor
              cursorCharacter="▎"
              deletingSpeed={25}
            />
          </div>

          <div className="hero-links">
            <a href="mailto:emmanueljmillan@outlook.com">
              <MdEmail />
            </a>

            <a
              href="https://linkedin.com/in/emmanueljmillan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin2 />
            </a>

            <a
              href="https://github.com/emmanueljmillan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </div>

          <StarBorder
            as="a"
            href="/documents/CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="cv-button"
            color="#dd94df"
            speed="4s"
          >
            View CV
          </StarBorder>
        </div>
      </div>

      <section className="about">

        <div className="about-content">
          <div className="about-text">
            <p className="section-label">About Me</p>

            <p>
              I'm a passionate Neural Engineer with a strong interest in neuroscience,
              neurotechnology, and translational research. My background spans both
              industry and academia, with experience in Research and Development,
              Product Testing, Regulatory Affairs, and biomaterials neuroscience research
              at the Miami Project to Cure Paralysis</p>

            <p>
              I recently completed a Master's degree in Neural Engineering at 
              the University of Miami, where my thesis, 
              "Characterization of Nanoparticle Interactions in Peripheral Neural
              Lesion Models," investigated nanoparticle-cell interactions in neuroinflammatory
              environments and their potential applications in neural repair.
            </p>

            <p>
              I also hold dual Bachelor's degrees in Biomedical Engineering and Applied
              Mathematics from the University of Miami. Since graduating in 2022, I
              have contributed to projects involving medical ultrasound systems,
              endoscopic devices, and biomaterials.
            </p>
          </div>

          <div className="about-card">
            <ProfileCard
              name="Emmanuel Millan"
              title="Neural Engineer"
              handle="emmanueljmillan"
              status="p ~ 0.050001"
              contactText="Say Hi!"
              avatarUrl="/headshot_extended.png"
              showUserInfo={false}
              enableTilt={false}
              enableMobileTilt={false}
              onContactClick={() => window.open(
                    "https://instagram.com/emmanueljmillan",
                    "_blank",
                    "noopener,noreferrer"
                )}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>
        </div>
      </section>
    <Projects />
    </>
  )
}

export default Home