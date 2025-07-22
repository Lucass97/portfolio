'use client'

import { ThemeProvider } from 'next-themes'

/**
 * Providers component that wraps the entire application
 * Currently includes theme provider for dark mode support
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
