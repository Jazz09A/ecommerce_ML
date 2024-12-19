import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi Tienda Online',
  description: 'La mejor tienda de comercio electrónico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  )
}

