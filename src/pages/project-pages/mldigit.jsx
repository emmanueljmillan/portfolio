import Dither from "../../components/Dither"

export default function DigitClass() {
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
            <h1 className="project-title">ML Digit Classification</h1>

            <p className="project-subtitle">
              Comparing classical machine learning and deep learning approaches
              for handwritten digit recognition.
            </p>

            <section className="project-section-block project-abstract">
              <h2>Overview</h2>

              <p>
                This project explored handwritten digit classification using a
                progression of machine learning models, including logistic
                regression, fully connected neural networks, and convolutional
                neural networks. The goal was to compare how model complexity and
                architecture affect image classification performance.
              </p>
            </section>

            <section className="project-section-block">
              <h2>Implementation</h2>

              <ul>
                <li>Trained a logistic regression model as a classical baseline.</li>
                <li>Built fully connected neural networks for image classification.</li>
                <li>Implemented convolutional neural networks using PyTorch.</li>
                <li>Evaluated training behavior, validation performance, and model accuracy.</li>
                <li>Compared how different architectures handled digit image features.</li>
              </ul>
            </section>

            <section className="project-section-block">
              <h2>Skills Used</h2>

              <div className="project-skills-text">
                <span>Python</span>
                <span>PyTorch</span>
                <span>Scikit-learn</span>
                <span>NumPy</span>
                <span>Logistic Regression</span>
                <span>Neural Networks</span>
                <span>CNNs</span>
                <span>Image Classification</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}