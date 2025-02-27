'use client'

import React from 'react'
import { useCart } from '../context/CartContext'
import { Cart } from './Cart'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ShoppingCart } from 'lucide-react'
import {Button} from "@/components/ui/Button"



export const CartModal: React.FC = () => {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className='flex mt-4'>
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative">
        <Button variant="outline">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Carrito
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
          )}
        </Button>

        </div>
      </DialogTrigger>
      {/* <DialogContent>
        <DialogHeader>
          <DialogTitle>Tu Carrito</DialogTitle>
        </DialogHeader>
        <Cart />
      </DialogContent> */}
    </Dialog>
    </div>
  )
}

