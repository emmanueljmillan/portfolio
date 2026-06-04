import Dither from "../../components/Dither"
import PixelTrail from "../../components/PixelTrail"

export default function MastersThesis() {
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
            <h1 className="project-title">Master&apos;s Thesis</h1>

            <p className="project-subtitle">
              Characterization of Nanoparticle Interactions in Peripheral Neural
              Lesion Models
            </p>

            <section className="project-section-block project-abstract">
              <h2>Abstract</h2>

              <p>
                Neural lesions induce Schwann cells to transition into a repair
                phenotype, where they recruit and coordinate with macrophages to
                clear myelin debris from lesion areas. Inadequate myelin debris
                clearance can interrupt nerve repair and limit regeneration.
                Nanoparticle-based therapies may improve therapeutic delivery by
                increasing tissue specificity, bioavailability, and release
                kinetics, while chondroitin sulfate nanoparticles may also provide
                immunomodulatory effects.
              </p>

              <p>
                This project characterized chondroitin sulfate nanoparticle
                interactions with Schwann cells by evaluating uptake behavior,
                cytotoxicity, and competitive interactions with myelin debris.
                Nanoparticle uptake was examined using confocal microscopy,
                cytotoxicity was assessed using MTS assays, and competitive uptake
                experiments were designed to evaluate nanoparticle behavior in
                lesion-relevant cellular environments.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Poster Presentation</h2>

              <div className="project-figure-wrapper">
                <img
                  className="project-figure"
                  src="/documents/poster.png"
                  alt="Master's thesis poster presentation"
                />
              </div>
            </section>

            <section className="project-section-block">
              <h2>Project Overview</h2>

              <p>
                This master&apos;s project investigated how engineered
                nanoparticles interact with Schwann cells and biological myelin
                debris in lesion-like environments. The work focused on peripheral
                neural lesion models, where successful regeneration depends on
                efficient myelin debris clearance and coordinated interactions
                between repair Schwann cells and macrophages.
              </p>

              <p>
                The study used PLGA-PEG-based nanoparticle formulations, including
                blank nanoparticles, medium-molecular-weight chondroitin sulfate
                nanoparticles, and desulfated chondroitin sulfate nanoparticles.
                These formulations were used to study how nanoparticle chemistry,
                concentration, and incubation time influence cellular uptake,
                viability, and behavior in myelin-rich injury environments.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Key Research Questions</h2>

              <ul>
                <li>
                  How do Schwann cells interact with engineered nanoparticles in
                  neural lesion-like environments?
                </li>
                <li>
                  Does nanoparticle dose influence Schwann cell uptake behavior or
                  cellular viability?
                </li>
                <li>
                  Do chondroitin sulfate-based nanoparticles show cytotoxicity
                  under short-term or extended incubation conditions?
                </li>
                <li>
                  How do nanoparticle interactions differ between Schwann cells
                  and macrophage-like cells?
                </li>
                <li>
                  Can nanoparticle treatment be studied alongside myelin debris to
                  model competitive uptake in neural lesion environments?
                </li>
                <li>
                  How might biomaterial properties be tuned for future
                  regenerative medicine applications?
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Methods and Techniques</h2>

              <ul>
                <li>
                  Maintained human Schwann cells and immortalized bone
                  marrow-derived macrophages for in vitro nanoparticle treatment
                  studies.
                </li>
                <li>
                  Prepared and studied three nanoparticle formulations: blank
                  nanoparticles, medium-molecular-weight chondroitin sulfate
                  nanoparticles, and desulfated chondroitin sulfate nanoparticles.
                </li>
                <li>
                  Fabricated fluorescent nanoparticle analogs using CF647-labeled
                  PLGA-PEG polymers.
                </li>
                <li>
                  Characterized nanoparticles using size, polydispersity index,
                  and zeta potential measurements.
                </li>
                <li>
                  Isolated CNS myelin debris from mouse brain and spinal cord
                  tissue using enzymatic dissociation and density-gradient
                  centrifugation.
                </li>
                <li>
                  Quantified myelin debris protein concentration using a BCA
                  protein assay with a BSA standard curve.
                </li>
                <li>
                  Performed MTS metabolic activity assays to assess nanoparticle
                  cytotoxicity after one-day and three-day treatment conditions.
                </li>
                <li>
                  Used confocal microscopy to examine direct nanoparticle uptake
                  in Schwann cells.
                </li>
                <li>
                  Conducted live-cell imaging experiments to assess nanoparticle
                  and myelin debris interactions over a 12-hour period.
                </li>
                <li>
                  Processed microscopy data using FIJI/ImageJ, generated graphs in
                  GraphPad Prism, and performed statistical analysis in SAS JMP.
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Research Outcomes</h2>

              <ul>
                <li>
                  Blank nanoparticle-treated Schwann cells showed no apparent
                  nanoparticle internalization after a two-hour incubation period.
                  Higher-dose blank nanoparticle treatment showed extracellular
                  nanoparticle agglomeration rather than clear intracellular
                  uptake.
                </li>
                <li>
                  A one-day MTS assay showed no significant viability differences
                  between blank nanoparticle-treated Schwann cells and untreated
                  controls across the tested dosing range.
                </li>
                <li>
                  One-day treatment with medium-molecular-weight chondroitin
                  sulfate nanoparticles and desulfated chondroitin sulfate
                  nanoparticles did not produce significant changes in Schwann
                  cell viability.
                </li>
                <li>
                  Extended three-day incubation experiments showed significant
                  viability differences among groups, with desulfated chondroitin
                  sulfate nanoparticle treatments at 0.6 mg/mL and 0.3 mg/mL
                  showing cytotoxic potential.
                </li>
                <li>
                  Live-cell imaging suggested that Schwann cells exhibited limited
                  nanoparticle accumulation around the cell membrane, while
                  macrophage-like cells more readily internalized nanoparticles.
                </li>
                <li>
                  Competitive uptake experiments suggested that macrophage-like
                  cells internalized nanoparticles regardless of myelin debris
                  presence, while Schwann cell nanoparticle uptake remained more
                  limited and peripheral.
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Research Significance</h2>

              <p>
                This work contributes to the development of nanoparticle-based
                therapeutic strategies for nervous system repair by characterizing
                how nanoparticle formulations interact with Schwann cells,
                macrophage-like cells, and lesion-associated myelin debris. These
                interactions are important because incomplete myelin clearance can
                limit remyelination, prolong inflammation, and interfere with
                functional recovery after neural injury.
              </p>

              <p>
                The findings suggest that medium-molecular-weight chondroitin
                sulfate nanoparticles may be more compatible with Schwann cell
                cultures than desulfated formulations under extended exposure
                conditions. The project also establishes experimental groundwork
                for future quantitative competitive uptake studies, co-culture
                systems, and in vivo peripheral nerve injury models.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Presentations</h2>

              <ul>
                <li>
                  University of Miami College of Engineering Research Symposium,
                  Coral Gables, FL, October 2025
                </li>
                <li>
                  Biomedical Engineering Master&apos;s Symposium, University of
                  Miami, December 2025
                </li>
                <li>
                  Neuroscience Research Day, Miller School of Medicine, Miami, FL,
                  December 2025
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Additional Materials</h2>

              <p>
                The complete master&apos;s project report is available below for a
                detailed discussion of the background, nanoparticle fabrication
                methods, cell culture protocols, imaging experiments, statistical
                analyses, results, and future directions.
              </p>

              <a
                className="project-link-detail"
                href="/documents/mastersthesis.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Full Master&apos;s Thesis Report
              </a>
            </section>

            <section className="project-section-block">
              <h2>Skills Used</h2>

              <div className="project-skills-text">
                <span>FIJI</span>
                <span>MATLAB</span>
                <span>GraphPad Prism</span>
                <span>BioRender</span>
                <span>Mouse/Rat Dissection</span>
                <span>Confocal Microscopy</span>
                <span>Live Cell Imaging</span>
                <span>Cell Culture</span>
                <span>Biomaterial Fabrication</span>
                <span>MTS Assays</span>
                <span>BCA Assays</span>
                <span>DMMB Assays</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}