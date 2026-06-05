import Dither from "../../components/Dither"

export default function GenomicSequencing() {
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

      <section className="project-section">
        <div className="project-inner">
          <div className="project-content-detail">
            <h1 className="project-title">Genomic Sequence Modeling</h1>

            <p className="project-subtitle">
              Training recurrent neural networks to predict nucleotide and k-mer
              patterns in the E. coli genome.
            </p>

            <section className="project-section-block project-abstract">
              <h2>Introduction</h2>

              <p>
                This project used recurrent neural networks to model sequential
                dependencies in the E. coli genome, a nucleotide sequence of
                nearly six million characters.
              </p>

              <p>
                Two LSTM-based models were developed: a character-level model
                predicting individual nucleotides and a k-mer model predicting
                grouped nucleotide sequences.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Figure</h2>

              <div className="project-figure-wrapper">
                <img
                  className="project-figure"
                  src="/documents/genomics-sequencing.png"
                  alt="Genomic sequence modeling results"
                />
              </div>
            </section>

            <section className="project-section-block">
              <h2>Project Overview</h2>

              <p>
                The project treated genomic DNA as sequential language data,
                allowing nucleotide bases and codon-like k-mers to be modeled
                using recurrent neural network architectures.
              </p>

              <p>
                The character-level model used A, G, C, and T as individual
                tokens, while the k-mer model grouped nucleotides into
                biologically meaningful triplets corresponding to codons.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Methods and Techniques</h2>

              <ul>
                <li>
                  Encoded the E. coli genome as sequential nucleotide tokens.
                </li>
                <li>
                  Built character-level and k-mer-level LSTM models in Python.
                </li>
                <li>
                  Used cross-entropy loss, Adam optimization, dropout, and class
                  weighting during training.
                </li>
                <li>
                  Tested different sequence lengths, batch sizes, hidden
                  dimensions, embedding dimensions, and epoch limits.
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Project Outcomes</h2>

              <ul>
                <li>
                  The character-level model reached a testing accuracy of
                  approximately 29.40%.
                </li>
                <li>
                  The k-mer-level model reached a similar testing accuracy of
                  approximately 29.81%.
                </li>
                <li>
                  Both models showed strong training performance but struggled
                  with overfitting and generalization.
                </li>
                <li>
                  Results suggested that genomic sequence relationships may vary
                  substantially across different regions of the genome.
                </li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Project Significance</h2>

              <p>
                This project demonstrates how language-modeling approaches can
                be adapted to biological sequence data, while also highlighting
                the challenges of generalizing across long and regionally
                variable genomic sequences.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Skills Used</h2>

              <div className="project-skills-text">
                <span>Python</span>
                <span>PyTorch</span>
                <span>LSTMs</span>
                <span>RNNs</span>
                <span>Genomic Sequencing</span>
                <span>k-mer Tokenization</span>
                <span>Neural Networks</span>
                <span>Machine Learning</span>
                <span>Model Evaluation</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}