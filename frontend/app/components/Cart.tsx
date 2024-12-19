'use client'

import React from 'react'
import { useCart } from '../context/CartContext'
import Button from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Minus, Plus, Trash2 } from 'lucide-react'

export const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

  if (items.length === 0) {
    return <div className="text-center py-8">Tu carrito está vacío</div>
  }

  return (
    <div className="space-y-8">
      {items.map(item => (
        <div key={item.id} className="flex items-center justify-between border-b pb-4">
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="w-16 text-center"
              min="1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => removeItem(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center font-semibold text-lg">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between space-x-4">
        <Button variant="outline" onClick={clearCart}>Vaciar Carrito</Button>
        <Button>Proceder al Pago</Button>
      </div>
    </div>
  )
}

