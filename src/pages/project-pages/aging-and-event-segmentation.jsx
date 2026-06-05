import Dither from "../../components/Dither"
import PixelTrail from "../../components/PixelTrail"

export default function AgingAndEventSegmentation() {
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
            <h1 className="project-title">Aging and Event Segmentation</h1>

            <p className="project-subtitle">
              The Effect of Age on Event Segmentation Models
            </p>

            <section className="project-section-block project-abstract">
              <h2>Introduction</h2>

              <p>
                Humans naturally divide continuous experiences into meaningful events.
                Although many event boundaries are shared across individuals, developmental
                differences may influence how these boundaries are represented in the
                brain. This project investigated whether age affects neural event
                segmentation during naturalistic narrative processing.
              </p>

              <p>
                Functional MRI data from 155 participants watching Pixar&apos;s
                <em> Partly Cloudy </em>
                were analyzed using Hidden Markov Model-based Event Segmentation Models.
                Neural activity was reduced using both Principal Component Analysis and
                Harvard-Oxford cortical atlas parcellation before segmentation was
                performed across multiple event counts.
              </p>

              <p>
                Model performance was evaluated using log-likelihood estimates and compared
                across age groups to determine whether developmental differences influence
                event structure, segmentation quality, or optimal event number.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Figure</h2>

              <div className="project-figure-wrapper">
                <img
                  className="project-figure"
                  src="/documents/aging-event-segmentation.png"
                  alt="Age versus event segmentation model fit visualization"
                />
              </div>
            </section>

            <section className="project-section-block">
              <h2>Project Overview</h2>

              <p>
                This project reanalyzed data from the Development of the Social Brain
                dataset, which originally examined neural mechanisms underlying social
                cognition during childhood and adolescence.
              </p>

              <p>
                Rather than focusing on theory-of-mind processing, this analysis explored
                how neural activity could be segmented into discrete cognitive events
                during movie watching. Event Segmentation Models provide a framework for
                identifying stable neural states and transitions between those states,
                allowing researchers to study how continuous experiences are organized
                into meaningful units.
              </p>

              <p>
                The primary goal was to determine whether age influences either the quality
                of event segmentation model fits or the number of events that best describe
                an individual&apos;s neural response to a narrative stimulus.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Key Research Questions</h2>

              <ul>
                <li>Does HMM model fit vary with participant age?</li>
                <li>Does optimal segmentation K differ across age?</li>
                <li>
                  Do PCA and Harvard-Oxford atlas parcellation reveal different
                  developmental patterns?
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Methods and Techniques</h2>

              <ul>
                <li>
                  Analyzed fMRI recordings from 155 participants spanning childhood through
                  adulthood.
                </li>

                <li>
                  Applied Principal Component Analysis using multiple dimensionalities
                  ranging from 2 to 150 components.
                </li>

                <li>
                  Performed cortical parcellation using the Harvard-Oxford atlas to obtain
                  region-based neural representations.
                </li>

                <li>
                  Applied BrainIAK EventSegment Hidden Markov Models across multiple event
                  counts (K values).
                </li>

                <li>
                  Evaluated model performance using log-likelihood estimates and Spearman
                  rank correlations with participant age.
                </li>

                <li>
                  Compared optimal segmentation values across subjects to determine whether
                  preferred event structure changes during development.
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Project Outcomes</h2>

              <ul>
                <li>
                  PCA analyses revealed negative relationships between age and HMM
                  log-likelihood across multiple dimensionalities.
                </li>

                <li>
                  Stronger age-related effects emerged at higher event counts, suggesting
                  that younger participants exhibited more consistent event structure under
                  increasingly complex segmentation models.
                </li>

                <li>
                  Harvard-Oxford atlas analyses reproduced these negative age-log-likelihood
                  relationships and revealed significant effects at lower event counts.
                </li>

                <li>
                  Optimal event number remained relatively stable across age groups and did
                  not significantly correlate with participant age.
                </li>

                <li>
                  Atlas-based representations frequently favored higher event counts than
                  PCA-based representations, suggesting increased sensitivity to regional
                  neural organization.
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Project Significance</h2>

              <p>
                Understanding how the brain segments continuous experiences into discrete
                events is critical for explaining memory formation, narrative
                comprehension, and predictive processing.
              </p>

              <p>
                Although optimal event number remained relatively stable across age,
                reductions in model fit among older participants suggest increasing neural
                heterogeneity during development. These findings support previous work
                indicating that adult neural responses may become more individualized and
                less synchronized than those observed in younger populations.
              </p>

              <p>
                More broadly, this project demonstrates how computational neuroscience
                approaches can be used to investigate developmental changes in large-scale
                neural dynamics during real-world experiences.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Skills Used</h2>

              <div className="project-skills-text">
                <span>Python</span>
                <span>BrainIAK</span>
                <span>Matplotlib</span>
                <span>fMRI Analysis</span>
                <span>Event Segmentation</span>
                <span>Hidden Markov Models</span>
                <span>PCA</span>
                <span>Atlas Parcellation</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}