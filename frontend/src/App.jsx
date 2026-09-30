import {
  HeartPulse,
  ShieldCheck,
  Brain,
  Activity,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import "./index.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">
            <HeartPulse size={24} />
          </div>
          <span>CardioSense</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-button">
          Get Started <ArrowRight size={17} />
        </button>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              AI-powered heart health awareness
            </div>

            <h1>
              Understand your heart.
              <span> Protect your future.</span>
            </h1>

            <p className="hero-description">
              CardioSense helps you understand potential heart disease risk
              through explainable AI, personalized insights, and preventive
              health guidance.
            </p>

            <div className="hero-actions">
              <button className="primary-button">
                Start your assessment <ArrowRight size={18} />
              </button>

              <button className="secondary-button">
                Explore CardioSense
              </button>
            </div>

            <div className="trust-points">
              <div>
                <CheckCircle size={17} />
                Easy to use
              </div>

              <div>
                <CheckCircle size={17} />
                Explainable insights
              </div>

              <div>
                <CheckCircle size={17} />
                Prevention-focused
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="health-card main-health-card">
              <div className="card-top">
                <div>
                  <p className="small-label">Your health overview</p>
                  <h3>Heart wellness</h3>
                </div>

                <div className="status-icon">
                  <HeartPulse size={25} />
                </div>
              </div>

              <div className="heart-illustration">
                <HeartPulse size={95} strokeWidth={1.3} />
              </div>

              <div className="health-score">
                <div>
                  <p className="small-label">Assessment status</p>
                  <h2>Ready to begin</h2>
                </div>

                <span className="ready-badge">Healthy habits</span>
              </div>

              <div className="progress-line">
                <div></div>
              </div>

              <p className="card-note">
                Take a guided assessment to receive personalized insights.
              </p>
            </div>

            <div className="floating-card floating-card-one">
              <ShieldCheck size={22} />
              <div>
                <strong>Privacy focused</strong>
                <span>Your information stays protected</span>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <Activity size={22} />
              <div>
                <strong>Prevention insights</strong>
                <span>Understand lifestyle risk factors</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <p className="section-label">WHY CARDIOSENSE</p>
            <h2>Healthcare insights made easier</h2>
            <p>
              Designed for everyday users, not just medical or technical
              professionals.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon blue">
                <Brain size={25} />
              </div>
              <h3>Explainable AI</h3>
              <p>
                Understand the important factors behind your assessment instead
                of seeing only a prediction.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon green">
                <Activity size={25} />
              </div>
              <h3>Personalized insights</h3>
              <p>
                Receive general prevention suggestions based on your entered
                health information and lifestyle factors.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon purple">
                <ShieldCheck size={25} />
              </div>
              <h3>Simple and secure</h3>
              <p>
                A clear, guided experience with readable forms and responsible
                handling of user information.
              </p>
            </div>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <p className="section-label">HOW IT WORKS</p>
            <h2>A simple three-step experience</h2>
          </div>

          <div className="steps-grid">
            <div className="step">
              <span>01</span>
              <h3>Enter your information</h3>
              <p>Answer a few guided questions about your health and lifestyle.</p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Receive your assessment</h3>
              <p>The system processes your information using a machine learning model.</p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Understand and act</h3>
              <p>Review explanations and general prevention-focused guidance.</p>
            </div>
          </div>
        </section>

        <section className="final-cta" id="about">
          <div>
            <p className="section-label">START YOUR JOURNEY</p>
            <h2>Make heart health awareness part of your routine.</h2>
            <p>
              CardioSense is designed to support awareness and informed
              conversations with qualified healthcare professionals.
            </p>
          </div>

          <button className="primary-button">
            Get started <ArrowRight size={18} />
          </button>
        </section>
      </main>

      <footer>
        <div className="brand">
          <div className="brand-icon">
            <HeartPulse size={21} />
          </div>
          <span>CardioSense</span>
        </div>

        <p>AI-powered heart disease risk assessment and prevention insights.</p>
      </footer>
    </div>
  );
}

export default App;