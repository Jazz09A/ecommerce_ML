import Link from 'next/link'
import Image from 'next/image'

// Simulación de datos de productos
const products = [
  { id: 1, name: 'Producto 1', price: 19.99, image: '/placeholder.svg', description: 'Descripción corta del Producto 1' },
  { id: 2, name: 'Producto 2', price: 29.99, image: '/placeholder.svg', description: 'Descripción corta del Producto 2' },
  { id: 3, name: 'Producto 3', price: 39.99, image: '/placeholder.svg', description: 'Descripción corta del Producto 3' },
  { id: 4, name: 'Producto 4', price: 49.99, image: '/placeholder.svg', description: 'Descripción corta del Producto 4' },
  { id: 5, name: 'Producto 5', price: 59.99, image: '/placeholder.svg', description: 'Descripción corta del Producto 5' },
  { id: 6, name: 'Producto 6', price: 69.99, image: '/placeholder.svg', description: 'Descripción corta del Producto 6' },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nuestros Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link href={`/productos/${product.id}`} key={product.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-blue-500 hover:text-blue-600 transition-colors">
                    Ver detalles
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

