'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, User } from 'lucide-react'
import { Button } from './ui/Button'
import { CartModal } from './CartModal'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <div className="mr-8 ml-8 hidden md:flex">
          <Link href="/" className="text-lg font-semibold">
            Mi Tienda
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            Inicio
          </Link>
          <Link href="/productos" className="transition-colors hover:text-foreground/80">
            Productos
          </Link>
          <Link href="/sobre-nosotros" className="transition-colors hover:text-foreground/80">
            Sobre Nosotros
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
        <CartModal />
            <div className="mr-4 relative">
              <div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className=" mt-4 bg-white rounded-full ring-indigo-600 flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Abrir menú de usuario</span>
                  <User className="h-5 w-5 rounded-full" />
                </button>
              </div>
              {isMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <Link href="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Perfil</Link>
                  <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cerrar sesión</Link>
                </div>
              )}
            </div>
          </div>
      </div>
    </header>
  )
}

