'use client'

import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function HomeView() {
  return (
    <div>
      {/* Top Bar */}
      <header className="flex items-center justify-between py-4 mb-6">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://zykwuzuukrmgztpgnbth.supabase.co/storage/v1/object/public/adminapp/Llanero%20Logo.png"
            alt="Llanero Bodegón"
            className="h-8 w-auto"
          />
        </div>
        
        {/* Cart Icon */}
        <Drawer>
          <DrawerTrigger asChild>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart size={24} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="flex items-center justify-between">
                <span>Tu Carrito</span>
                <span className="text-sm text-gray-500 font-normal">3 productos</span>
              </DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-6">
              {/* Cart Items */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <h4 className="font-medium">Producto ejemplo</h4>
                    <p className="text-sm text-gray-500">$15.000</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">-</button>
                    <span className="w-8 text-center">1</span>
                    <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">+</button>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <h4 className="font-medium">Otro producto</h4>
                    <p className="text-sm text-gray-500">$8.500</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">-</button>
                    <span className="w-8 text-center">2</span>
                    <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">+</button>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-xl font-bold text-primary">$32.000</span>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold">
                  Proceder al Pago
                </button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </header>

      {/* Content */}
      <div>
        <h2>Contenido de inicio</h2>
      </div>
    </div>
  )
}