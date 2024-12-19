import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Truck, HeadphonesIcon } from 'lucide-react'

// Simulación de datos de productos destacados
const featuredProducts = [
  { id: 1, name: 'Producto Destacado 1', price: 19.99, image: '/placeholder.svg' },
  { id: 2, name: 'Producto Destacado 2', price: 29.99, image: '/placeholder.svg' },
  { id: 3, name: 'Producto Destacado 3', price: 39.99, image: '/placeholder.svg' },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Bienvenido a Nuestra Tienda Online</h1>
        <p className="text-xl text-center mb-12">Descubre nuestra amplia selección de productos de alta calidad.</p>
        
        <div className="flex justify-center">
          <Link href="/productos" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
            Ver Todos los Productos
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
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
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <ShieldCheck className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
            <p className="text-gray-600">Todos nuestros productos son cuidadosamente seleccionados para asegurar la mejor calidad.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Truck className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Envío Rápido</h3>
            <p className="text-gray-600">Entregamos tus pedidos en el menor tiempo posible para que disfrutes de tus compras cuanto antes.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <HeadphonesIcon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Atención al Cliente</h3>
            <p className="text-gray-600">Nuestro equipo está siempre disponible para ayudarte con cualquier duda o problema.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Sobre Nosotros</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-semibold mb-4">Nuestra Historia</h3>
              <p className="text-gray-600 mb-4">
                En Nuestra Tienda Online, nos apasiona ofrecer productos de alta calidad que mejoren la vida de nuestros clientes. Fundada en 2023, nuestra misión es proporcionar una experiencia de compra excepcional combinada con un servicio al cliente inigualable.
              </p>
              <p className="text-gray-600 mb-4">
                Nuestro equipo está formado por expertos en diversas áreas, todos comprometidos con la excelencia y la satisfacción del cliente. Trabajamos incansablemente para mantenernos a la vanguardia de las últimas tendencias y tecnologías, asegurando que nuestros productos cumplan con los más altos estándares de calidad.
              </p>
              <p className="text-gray-600">
                Valoramos la sostenibilidad y la responsabilidad social, por lo que nos esforzamos por trabajar con proveedores que comparten nuestros valores éticos y ambientales. Juntos, estamos construyendo un futuro mejor, un producto a la vez.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Sobre Nuestra Tienda"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

