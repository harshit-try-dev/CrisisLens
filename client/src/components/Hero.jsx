import './Hero.css'

function Hero() {
    return (
        <section className="hero">

            <div className="hero-left">
                <h1>Every Second Counts.</h1>

                <h2>AI-powered Disaster Response Platform</h2>

                <p>
                    Helping communities, responders and authorities
                    make faster and smarter decisions during disasters.
                </p>

                <button>Get Started</button>
            </div>

            <div className="hero-right">
                <div className="hero-visual">
                    <div className="visual-header">
                        <span>CRISISLENS AI</span>
                        <span className="status">● LIVE</span>
                    </div>

                    <div className="map-area">
                        <div className="map-shape">
                            <div className="incident incident-one">
                                <span>Flood Alert</span>
                            </div>

                            <div className="incident incident-two">
                                <span>Landslide</span>
                            </div>

                            <div className="incident incident-three">
                                <span>Severe Weather</span>
                            </div>
                        </div>

                        <div className="visual-footer">
                            <div>
                                <strong>3</strong>
                                <span>Active Alerts</span>
                            </div>

                            <div>
                                <strong>87%</strong>
                                <span>AI Confidence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero