import Header from "./components/Header"
import "./globals.css"

export const metadata = {
  title: "Setto.dev",
  description: "Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main>
          {children}
        </main>

      </body>
    </html>
  )
}