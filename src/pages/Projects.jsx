import Projects from "../components/Projects"
import Dither from "../components/Dither"
import PixelTrail from "../components/PixelTrail"

function ProjectsPage() {
  return (
    <main className="projects-page">
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

      <div className="projects-page-pixel-layer">
        <PixelTrail
          gradientColors={["#5227FF", "#dd94df", "#e9455b"]}
          gridSize={100}
          trailSize={0.015}
          maxAge={150}
          interpolate={2}
          color="#5227FF"
          gooeyFilter={{ id: "projects-page-goo-filter", strength: 2 }}
          gooeyEnabled
          gooStrength={2}
        />
      </div>

      <Projects title="Projects" showAll />
    </main>
  )
}

export default ProjectsPage