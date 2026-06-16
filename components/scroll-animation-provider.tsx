'use client'

import { useEffect } from 'react'
import AOS from 'aos'

export function ScrollAnimationProvider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: 'ease-in-out-cubic',
    })
  }, [])

  return null
}
