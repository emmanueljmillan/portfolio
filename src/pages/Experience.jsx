import Dither from "../components/Dither"
import PixelTrail from "../components/PixelTrail"
import experience from "../data/experience"

function Experience() {
  return (
    <main className="experience-page">
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

      <div className="pixel-layer experience-page-pixel-layer">
        <PixelTrail
          gradientColors={["#5227FF", "#dd94df", "#e9455b"]}
          gridSize={100}
          trailSize={0.015}
          maxAge={200}
          interpolate={2}
          color="#5227FF"
          gooeyFilter={{ id: "experience-page-goo-filter", strength: 1 }}
          gooeyEnabled={false}
          gooStrength={2}
        />
      </div>

      <section className="experience-section">
        <div className="experience-inner">
          <h1 className="section-title">Experience</h1>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card" key={`${item.role}-${item.org}`}>
                <div className="experience-card-header">
                  <div>
                    <h2>{item.role}</h2>
                    <p className="experience-org">{item.org}</p>
                  </div>

                  <div className="experience-meta">
                    <span>{item.dates}</span>
                  </div>
                </div>

                <ul className="experience-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Experience