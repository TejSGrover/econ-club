import SplashCursor from "./SplashCursor";
import StaggeredMenu from "./StaggeredMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Page({ title, children }) {
    return (
        <div style={{ padding: 40, color: "white", minHeight: "100vh" }}>
            <h1 style={{ fontSize: 52, marginBottom: 12 }}>{title}</h1>
            <div style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 900 }}>{children}</div>
        </div>
    );
}

function Home() {
    return (
        <Page title="AES Econ Club">
            Real-world economics: micro + macro, current events, debates, games, and case studies.
        </Page>
    );
}

function About() {
    return (
        <Page title="About Us">
            At Economics (“Econ”) Club, we explore how economic concepts apply to the real world and influence our everyday lives. Through discussions and activities, we examine microeconomic topics such as investing, consumer behavior, and decision-making, as well as macroeconomic issues including government policies, global trade, inflation, and the economic impact of political situations.
        </Page>
    );
}

function Investopedia() {
    return (
        <Page title="Investopedia">
            We break down key terms (inflation, interest rates, GDP, stocks, bonds, opportunity cost) in simple, practical language.
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