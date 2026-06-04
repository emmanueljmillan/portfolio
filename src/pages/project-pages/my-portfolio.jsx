import Dither from "../../components/Dither"
import PixelTrail from "../../components/PixelTrail"

export default function MyPortfolio() {
  return (
    <main className="project-page">
      <div className="dither-layer">
        <Dither
          waveColor={[0.2980392156862745, 0.11372549019607843, 0.4666666666666667]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
          colorNum={9}
          waveAmplitude={0.5}
          waveFrequency={6}
          waveSpeed={0.015}
        />
      </div>

      <div className="project-page-pixel-layer">
        <PixelTrail
          gradientColors={["#5227FF", "#dd94df", "#e9455b"]}
          gridSize={100}
          trailSize={0.015}
          maxAge={150}
          interpolate={2}
          color="#5227FF"
          gooeyFilter={{ id: "project-page-goo-filter", strength: 2 }}
          gooeyEnabled
          gooStrength={2}
        />
      </div>

      <section className="project-section">
        <div className="project-inner">
          <div className="project-content-detail">
            <h1 className="project-title">Portfolio Website</h1>

            <p className="project-subtitle">
              Designing and building a personal portfolio website to showcase
              research, technical projects, and professional experience.
            </p>

            <section className="project-section-block project-abstract">
              <h2>Overview</h2>

              <p>
                This project involved building a custom portfolio website from
                the ground up using React and Vite. The goal was to create a
                site that felt visually distinctive while still clearly
                presenting my research background, technical skills, projects,
                and experience.
              </p>

              <p>
                The design combines interactive visual elements, animated
                backgrounds, custom project pages, and reusable components to
                create a cohesive personal brand centered around neuroscience,
                engineering, and computational work.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Project Goals</h2>

              <ul>
                <li>Create a personal website that feels unique and memorable.</li>
                <li>
                  Present research and technical projects in a clean, readable
                  format.
                </li>
                <li>
                  Build reusable page templates for current and future project
                  pages.
                </li>
                <li>
                  Use interactive visual effects without overwhelming the main
                  content.
                </li>
                <li>
                  Improve front-end development skills through hands-on React
                  implementation.
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Design and Development</h2>

              <p>
                The website was developed with a component-based structure using
                React. Reusable components were used for navigation, background
                effects, project cards, profile elements, and project detail
                pages.
              </p>

              <p>
                Visual design choices included a dark gradient background,
                purple and pink accent colors, animated dither effects,
                pixel-style cursor trails, and a custom profile card. These
                elements were selected to give the site a futuristic but still
                personal feel.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Technical Implementation</h2>

              <ul>
                <li>Built the site using React and Vite.</li>
                <li>
                  Structured the site into reusable pages and components.
                </li>
                <li>
                  Implemented animated Dither and PixelTrail visual layers.
                </li>
                <li>
                  Created reusable project-detail class names to reduce CSS
                  duplication.
                </li>
                <li>
                  Added project cards, routing, navigation highlighting, and a
                  downloadable CV link.
                </li>
                <li>
                  Customized global styling, scrollbar appearance, cursor
                  behavior, layout spacing, and responsive sections.
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Project Outcomes</h2>

              <ul>
                <li>
                  Developed a full personal portfolio website with reusable
                  project pages.
                </li>
                <li>
                  Created a visual identity that connects neuroscience,
                  engineering, and computational design.
                </li>
                <li>
                  Improved organization by consolidating repeated CSS styles
                  into shared project-page class names.
                </li>
                <li>
                  Built a flexible structure that can be expanded as new
                  projects are added.
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Skills Used</h2>

              <div className="project-skills-text">
                <span>React</span>
                <span>Vite</span>
                <span>JavaScript</span>
                <span>JSX</span>
                <span>CSS</span>
                <span>Responsive Design</span>
                <span>Component-Based Design</span>
                <span>Front-End Development</span>
                <span>UI Design</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}