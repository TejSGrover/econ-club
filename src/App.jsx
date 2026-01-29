import SplashCursor from "./SplashCursor";
import StaggeredMenu from "./StaggeredMenu";
import GlassSurface from "./GlassSurface";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Page({ title, children, center = true }) {
    return (
        <main
            style={{
                minHeight: "calc(100vh - 80px)", // subtract navbar height
                marginTop: "80px",               // push below navbar
                display: "grid",
                placeItems: "center",
                padding: "0 24px",
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
                        <button className="glass-btn__inner">Join Econ Club</button>
                    </GlassSurface>

                    <GlassSurface
                        width={240}
                        height={64}
                        borderRadius={18}
                        backgroundOpacity={1}
                        saturation={1.8}
                        className="glass-btn"
                    >
                        <button className="glass-btn__inner">Explore Topics</button>
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
            Here are the details for the 2025–26 Semester 2 Investopedia Game –
            <br />
            <br />
            <strong>Game Name:</strong> AES 2526 Sem 2
            <br />
            <strong>Password:</strong> JasveerTrainee
            <br />
            <br />
            You will start with $100,000 and you will have until May 28, 2026 to make as much money possible through stock trading.
            <br />
            No crypto trading allowed.
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

            <StaggeredMenu
                items={[
                    { label: "Home", link: "/", ariaLabel: "Home" },
                    { label: "About Us", link: "/about", ariaLabel: "About Us" },
                    { label: "Investopedia", link: "/investopedia", ariaLabel: "Investopedia" },
                    { label: "Shark Tank", link: "/shark-tank", ariaLabel: "Shark Tank" },
                    { label: "Links", link: "/links", ariaLabel: "Links" },
                ]}
            />

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