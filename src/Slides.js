import React from "react"
import { useState, useRef, useEffect } from "react"
import styles from "./Slide.module.css"

const Slides = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [position, setPosition] = useState(0)
  const contentRef = useRef()

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect()
    setPosition(-(width * activeSlide))
  }, [activeSlide])

  function prevSlide() {
    if (activeSlide > 0) setActiveSlide(activeSlide - 1)
  }

  function nextSlide() {
    if (activeSlide < slides.length - 1) setActiveSlide(activeSlide + 1)
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px` }}
      >
        {slides.map((slides) => (
          <div key={slides.id} className={styles.item}>
            {slides.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Próximo</button>
      </nav>
      <footer className={styles.footer}>
        <a
          href="https://samuelvdev.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          by Samuel Ventura
        </a>
      </footer>
    </section>
  )
}

export default Slides
