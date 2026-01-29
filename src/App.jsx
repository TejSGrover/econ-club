import SplashCursor from "./SplashCursor";
import GlassSurface from "./GlassSurface";
import CircularText from './CircularText';
import LightPillar from "./LightPillar";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Page({ title, children }) {
    return (
        <main
            style={{
                minHeight: "90vh",
                paddingTop: "0px", // space for navbar
                paddingBottom: "100px",
                display: "grid",
                placeItems: "center",
                paddingInline: "24px",
                color: "white",
            }}
        >
            <section style={{ maxWidth: 900, textAlign: "center" }}>
                <h1
                    style={{
                        fontSize: "clamp(42px, 6vw, 64px)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: 20,
                    }}
                >
                    {title}
                </h1>

                <div
                    style={{
                        fontSize: 18,
                        lineHeight: 1.6,
                        opacity: 0.9,
                    }}
                >
                    {children}
                </div>
            </section>
        </main>
    );
}

function Home() {
    return (
        <main
            style={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                padding: "0 24px",
            }}
        >
            <section style={{ maxWidth: 900, textAlign: "center" }}>

                {/* Circular text above title */}
                <div style={{ margin: "0 auto 24px", width: 200, height: 200 }}>
                    <CircularText
                        text="AES ☆ ECON ☆ CLUB ☆ "
                        onHover="speedUp"
                        spinDuration={10}
                        className="custom-class"
                    />
                </div>

                <h1
                    style={{
                        fontSize: "clamp(42px, 6vw, 72px)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: 20,
                    }}
                >
                    AES Econ Club
                </h1>

                <p
                    style={{
                        fontSize: 20,
                        opacity: 0.85,
                        marginBottom: 36,
                    }}
                >
                    Real-world economics — markets, policy, debate, and strategy.
                </p>

                <div style={{ display: "flex", gap: 20, justifyContent: "center", position: "relative", zIndex: 20 }}>
                    <GlassSurface
                        width={240}
                        height={64}
                        borderRadius={18}
                        backgroundOpacity={1}
                        saturation={1.8}
                        className="glass-btn"
                    >
                        <button
                            className="glass-btn__inner"
                            onClick={() =>
                                window.open(
                                    "https://classroom.google.com/c/ODI0ODYyMTY4OTEy?cjc=fzv56tsr",
                                    "_blank"
                                )
                            }
                        >
                            Join Econ Club
                        </button>
                    </GlassSurface>
                    
                </div>
            </section>
        </main>
    );
}

function About() {
    return (
        <Page title="About Us">
            At Economics (“Econ”) Club, we explore how economic concepts apply to the real world and influence our everyday lives.
            Through discussions and activities, we examine microeconomic topics such as investing, consumer behavior, and
            decision-making, as well as macroeconomic issues including government policies, global trade, inflation, and the
            economic impact of political situations.
        </Page>
    );
}

function Investopedia() {
    return (
        <Page title="Investopedia Stock Simulator">
            {/* Glass button */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 32,
                    marginTop: 32,
                    position: "relative",
                    zIndex: 9999,          // force above splash
                    pointerEvents: "auto", // ensure clickable
                }}
            >
                <GlassSurface
                    width={280}
                    height={64}
                    borderRadius={18}
                    backgroundOpacity={1}
                    saturation={1.8}
                    className="glass-btn"
                >
                    <button
                        className="glass-btn__inner"
                        onClick={() => {
                            window.open(
                                "https://www.investopedia.com/simulator/",
                                "_blank",
                                "noopener,noreferrer"
                            );
                        }}
                    >
                        Access Investopedia
                    </button>
                </GlassSurface>
            </div>

            We use Investopedia as a real time stock simulator.
            <br />
            <br />
            You will start with $100,000 and you will have until May 28, 2026 to make as much money possible through stock trading.
            <br />
            No crypto trading allowed.
            <br />
            <br />
            <br />
            Here are the details for the 2025–26 Semester 2 Investopedia Game –
            <br />
            <br />
            <strong>Game Name:</strong> AES 2526 Sem 2
            <br />
            <strong>Password:</strong> JasveerTrainee
        </Page>
    );
}

function SharkTank() {
    return (
        <Page title="Shark Tank">
            We analyze pitches, debate valuations, and practice “deal logic”: equity, revenue, margins, and growth.
        </Page>
    );
}

function Links() {
    return (
        <Page title="Links">
            <ul>
                <li>
                    <a href="https://www.investopedia.com" target="_blank" rel="noreferrer" style={{ color: "white" }}>
                        Investopedia
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@sharktank" target="_blank" rel="noreferrer" style={{ color: "white" }}>
                        Shark Tank
                    </a>
                </li>
            </ul>
        </Page>
    );
}

export default function App() {
    return (
        <BrowserRouter basename="/econ-club/">
            {/* ✅ Global background */}
            <div className="bg-layer">
                <LightPillar
                    topColor="#FF0000"
                    bottomColor="#00FF00"
                    intensity={1.0}
                    rotationSpeed={0.25}
                    glowAmount={0.0009}
                    pillarWidth={3.0}
                    pillarHeight={0.4}
                    noiseIntensity={0.15}
                    mixBlendMode="screen"
                    quality="high"
                />
            </div>

            <SplashCursor />

            <div className="glass-navbar">
                <div className="glass-navbar__inner">
                    <div className="glass-navbar__brand">AES Econ Club</div>

                    <nav className="glass-navbar__links">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => `glass-navbar__link ${isActive ? "active" : ""}`}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) => `glass-navbar__link ${isActive ? "active" : ""}`}
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/investopedia"
                            className={({ isActive }) => `glass-navbar__link ${isActive ? "active" : ""}`}
                        >
                            Investopedia
                        </NavLink>

                        <NavLink
                            to="/shark-tank"
                            className={({ isActive }) => `glass-navbar__link ${isActive ? "active" : ""}`}
                        >
                            Shark Tank
                        </NavLink>

                        <NavLink
                            to="/links"
                            className={({ isActive }) => `glass-navbar__link ${isActive ? "active" : ""}`}
                        >
                            Links
                        </NavLink>
                    </nav>
                </div>
            </div>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/investopedia" element={<Investopedia />} />
                <Route path="/shark-tank" element={<SharkTank />} />
                <Route path="/links" element={<Links />} />
            </Routes>
        </BrowserRouter>
    );
}