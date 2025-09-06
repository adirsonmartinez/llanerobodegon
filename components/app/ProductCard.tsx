'use client'

import { Plus, Minus } from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface ProductCardProps {
  name: string
  description: string
  price: number
  originalPrice?: number
  image?: string
  badge?: 'oferta' | 'descuento'
  cartQuantity?: number
  onAddToCart?: () => void
  onUpdateQuantity?: (quantity: number) => void
}

export default function ProductCard({
  name,
  description,
  price,
  originalPrice,
  image,
  badge,
  cartQuantity,
  onAddToCart,
  onUpdateQuantity
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price).replace('COP', '$')
  }

  const getBadgeConfig = (badgeType: 'oferta' | 'descuento') => {
    switch (badgeType) {
      case 'oferta':
        return { text: 'Oferta', className: 'bg-red-500' }
      case 'descuento':
        return { text: 'Descuento', className: 'bg-green-500' }
      default:
        return null
    }
  }

  const badgeConfig = badge ? getBadgeConfig(badge) : null
  const isInCart = cartQuantity && cartQuantity > 0

  return (
    <div className="flex-shrink-0 w-[150px]">
      <Drawer>
        <DrawerTrigger asChild>
          <div className="bg-white cursor-pointer">
        {/* Product Image */}
        <div className="relative mb-3">
          <div className="w-full aspect-square bg-gray-200 rounded-xl mb-2">
            {image && (
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover rounded-xl"
              />
            )}
          </div>
          {badgeConfig && (
            <span className={`absolute top-2 left-2 ${badgeConfig.className} text-white text-xs font-bold px-2 py-1 rounded-full`}>
              {badgeConfig.text}
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-sm line-clamp-2">{name}</h3>
          <p className="text-xs text-gray-600 line-clamp-1">{description}</p>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-black">{formatPrice(price)}</span>
            {originalPrice && originalPrice > price && (
              <span className="text-xs text-gray-400 line-through">{formatPrice(originalPrice)}</span>
            )}
          </div>

          {/* Add to Cart Button or Quantity Controls */}
          {isInCart ? (
            <div className="flex items-center gap-2 justify-end">
              <button 
                className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation()
                  onUpdateQuantity?.(cartQuantity - 1)
                }}
              >
                <Minus size={14} />
              </button>
              <span className="font-medium text-sm">{cartQuantity}</span>
              <button 
                className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation()
                  onUpdateQuantity?.(cartQuantity + 1)
                }}
              >
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <div className="flex justify-end">
              <button 
                className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation()
                  onAddToCart?.()
                }}
              >
                <Plus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
        </DrawerTrigger>
        
        <DrawerContent>
          <DrawerHeader className="sr-only">
            <DrawerTitle>{name}</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 py-6">
            {/* Product Image */}
            <div className="relative mb-4">
              <div className="w-[200px] h-[200px] bg-gray-200 rounded-xl mx-auto">
                {image && (
                  <img 
                    src={image} 
                    alt={name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                )}
              </div>
              {badgeConfig && (
                <span className={`absolute top-2 left-2 ${badgeConfig.className} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                  {badgeConfig.text}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-bold mb-2">{name}</h2>
                <p className="text-gray-600">{description}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-black">{formatPrice(price)}</span>
                {originalPrice && originalPrice > price && (
                  <span className="text-lg text-gray-400 line-through">{formatPrice(originalPrice)}</span>
                )}
              </div>

              {/* Add to Cart Button or Quantity Controls */}
              {isInCart ? (
                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                  <span className="font-medium text-lg">Cantidad en carrito</span>
                  <div className="flex items-center gap-3">
                    <button 
                      className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
                      onClick={() => onUpdateQuantity?.(cartQuantity - 1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold text-lg w-8 text-center">{cartQuantity}</span>
                    <button 
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"
                      onClick={() => onUpdateQuantity?.(cartQuantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                  onClick={onAddToCart}
                >
                  <Plus size={16} />
                  Agregar al Carrito
                </button>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}