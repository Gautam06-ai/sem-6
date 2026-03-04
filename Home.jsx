import './Home.css';

function App() {
  return (
    <div className="container">
      {/* Animated Background Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <nav className="navbar">
        <div className="logo">INTERVIEW.<span>AI</span></div>
        <div className="nav-links">
          <a href="#">Platform</a>
          <a href="#">Pricing</a>
          <button className="btn-secondary">Login</button>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <div className="badge">System Online v2.4</div>
          <h1>Master the <br /><span className="gradient-text">Interview.</span></h1>
          <p>Practice with realistic AI personas and get instant feedback on your performance.</p>
          <div className="hero-btns">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Watch Demo</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-card main-ui">
            <div className="ai-avatar">
              <div className="pulse-ring"></div>
              <div className="bars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <p className="ai-text">"How do you handle conflict in a team?"</p>
            
            {/* Floating Stats */}
            <div className="stat-card eye-contact">
              <small>Eye Contact</small>
              <strong>94%</strong>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;