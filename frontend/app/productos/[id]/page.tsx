'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

// Simulación de datos de productos
const products = [
  { id: 1, name: 'Producto 1', price: 19.99, image: '/placeholder.svg', description: 'Descripción detallada del Producto 1. Este producto es ideal para...', stock: 10 },
  { id: 2, name: 'Producto 2', price: 29.99, image: '/placeholder.svg', description: 'Descripción detallada del Producto 2. Perfecto para aquellos que buscan...', stock: 5 },
  { id: 3, name: 'Producto 3', price: 39.99, image: '/placeholder.svg', description: 'Descripción detallada del Producto 3. Diseñado específicamente para...', stock: 15 },
  { id: 4, name: 'Producto 4', price: 49.99, image: '/placeholder.svg', description: 'Descripción detallada del Producto 4. Una solución innovadora para...', stock: 8 },
  { id: 5, name: 'Producto 5', price: 59.99, image: '/placeholder.svg', description: 'Descripción detallada del Producto 5. Características únicas incluyen...', stock: 20 },
  { id: 6, name: 'Producto 6', price: 69.99, image: '/placeholder.svg', description: 'Descripción detallada del Producto 6. La mejor opción para quienes necesitan...', stock: 3 },
]

export default function ProductPage() {
  const params = useParams()
  const [product, setProduct] = useState<any>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const productId = Number(params.id)
    const foundProduct = products.find(p => p.id === productId)
    setProduct(foundProduct)
  }, [params.id])

  if (!product) {
    return <div>Cargando...</div>
  }

  const handleAddToCart = () => {
    // Aquí iría la lógica para añadir al carrito
    console.log(`Añadido al carrito: ${quantity} unidad(es) de ${product.name}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Cantidad
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {[...Array(Math.min(product.stock, 10))].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
          >
            Añadir al carrito
          </button>
          <p className="mt-4 text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} unidades disponibles` : 'Agotado'}
          </p>
        </div>
      </div>
    </div>
  )
}

