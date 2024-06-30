// src/components/ThemeToggle.jsx
import { useState, useEffect } from 'react'
import { Switch } from '@nextui-org/react'

import { SunIcon } from '@/icons/SunIcon'
import { MoonIcon } from '@/icons/MoonIcon'

const ThemeToggle = () => {
  const getPreferredTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme')
      if (storedTheme) {
        return storedTheme
      }
    }

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    }
    return 'light'
  }

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const preferredTheme = getPreferredTheme()
    setTheme(preferredTheme)

    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(preferredTheme)

    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', preferredTheme)
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('theme', newTheme)
      }
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(newTheme)
      return newTheme
    })
  }

  return (
    <Switch
      defaultSelected
      size='lg'
      color='secondary'
      onChange={toggleTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  )
}

export default ThemeToggle
