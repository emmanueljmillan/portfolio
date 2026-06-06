import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import GooeyNav from "./components/GooeyNav"
import Home from "./pages/Home"
import ProjectsPage from "./pages/Projects"
import ExperiencePage from "./pages/Experience"
import MastersThesis from "./pages/project-pages/masters-thesis"
import AgingAndEventSegmentation from "./pages/project-pages/aging-and-event-segmentation"
import GenomicSequenceModeling from "./pages/project-pages/genomic-sequence-modeling"
import MyPortfolio from "./pages/project-pages/my-portfolio"
import DigitClass from "./pages/project-pages/mldigit"
import { Analytics } from "@vercel/analytics/next"

import "./App.css"

const items = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
]

function NavBar() {
  const location = useLocation()

  const activeIndex =
    location.pathname.startsWith("/projects")
      ? 1
      : location.pathname.startsWith("/experience")
        ? 2
        : 0

  return (
    <nav className="main-nav">
      <GooeyNav
        items={items}
        particleCount={0}
        particleDistances={[90, 10]}
        particleR={300}
        initialActiveIndex={activeIndex}
        animationTime={600}
        timeVariance={700}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-bg" />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />

        <Route path="/projects/masters-thesis" element={<MastersThesis />} />
        <Route
          path="/projects/aging-and-event-segmentation"
          element={<AgingAndEventSegmentation />}
        />
        <Route
          path="/projects/genomic-sequence-modeling"
          element={<GenomicSequenceModeling />}
        />
        <Route path="/projects/my-portfolio" element={<MyPortfolio />} />
        <Route path="/projects/mldigit" element={<DigitClass />} />        
      </Routes>
    </BrowserRouter>
  )
}

export default App