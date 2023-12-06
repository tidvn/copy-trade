import "@/styles/globals.css"

import { Metadata } from "next"
import { AppProps } from "next/app"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <html lang="en" suppressHydrationWarning> */}
      {/* <head /> */}
      <div
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="container flex-1 ">
              <Component  {...pageProps} />
            </div>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </div>
      {/* </html> */}
    </>
  )
}
