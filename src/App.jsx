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

import "./App.css"

const items = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
]

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", updateCursor)

    return () => {
      window.removeEventListener("mousemove", updateCursor)
    }
  }, [])

  useEffect(() => {
    const handleMove = (e) => {
      const target = e.target.closest("a, button")
      setHovering(!!target)
    }

    document.addEventListener("mousemove", handleMove)

    return () => {
      document.removeEventListener("mousemove", handleMove)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${hovering ? "cursor-hover" : ""}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  )
}

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
      <Cursor />
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
      </Routes>
    </BrowserRouter>
  )
}

export default App