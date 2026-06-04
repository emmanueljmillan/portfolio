import { useEffect, useState } from "react"
import "./BrainSlices.css"

const slices = Array.from({ length: 59 }, (_, i) => {
  const num = String(i + 6).padStart(3, "0")
  return `/brain-slices-cropped/slice_${num}.png`})

export default function BrainSlices() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    slices.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slices.length)
    }, 60)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="brain-slices">
      <img src={slices[index]} alt="Cycling brain slice" />
    </div>
  )
}