'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart, Trash2 } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { UseEmblaCarouselType } from 'embla-carousel-react'
import ProductCard from '@/components/app/ProductCard'

type CarouselApi = UseEmblaCarouselType[1]

export default function HomeView() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    setCurrentSlide(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap())
    })
  }, [api])
  
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
                7
              </span>
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="flex items-center justify-between">
                <div className="flex items-center justify-between w-full">
                  <span>Tu Carrito</span>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Trash2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-6">
              {/* Cart Items */}
              <div className="space-y-4 max-h-80 overflow-y-auto scrollbar-hide">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <h4 className="font-medium">Ron Barceló Imperial</h4>
                    <p className="text-sm text-gray-500">$45.000</p>
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
                    <h4 className="font-medium">Cerveza Corona Pack x6</h4>
                    <p className="text-sm text-gray-500">$18.000</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">-</button>
                    <span className="w-8 text-center">2</span>
                    <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">+</button>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <h4 className="font-medium">Whisky Johnnie Walker</h4>
                    <p className="text-sm text-gray-500">$85.000</p>
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
                    <h4 className="font-medium">Vodka Absolut Original</h4>
                    <p className="text-sm text-gray-500">$55.000</p>
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
                    <h4 className="font-medium">Tequila José Cuervo</h4>
                    <p className="text-sm text-gray-500">$72.000</p>
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
                    <h4 className="font-medium">Gin Bombay Sapphire</h4>
                    <p className="text-sm text-gray-500">$95.000</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">-</button>
                    <span className="w-8 text-center">1</span>
                    <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">+</button>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm">$370.000</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm">Envío</span>
                  <span className="text-sm">$0.00</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-xl font-bold">$370.000</span>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold">
                  Proceder al Pago
                </button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </header>

      {/* Banners Carousel */}
      <div className="mb-8 -mx-4">
        <Carousel 
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-0">
            {/* Each item needs margin to restore spacing between slides */}
            <CarouselItem className="px-4">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-[30px] p-6 text-white h-32 flex flex-col justify-center">
                <h2 className="text-lg font-bold mb-2">¡Oferta Especial!</h2>
                <p className="text-sm">50% de descuento en todos los rones</p>
              </div>
            </CarouselItem>
            <CarouselItem className="px-4">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-[30px] p-6 text-white h-32 flex flex-col justify-center">
                <h2 className="text-lg font-bold mb-2">¡Nueva Promoción!</h2>
                <p className="text-sm">Compra 2 cervezas y lleva 1 gratis</p>
              </div>
            </CarouselItem>
            <CarouselItem className="px-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[30px] p-6 text-white h-32 flex flex-col justify-center">
                <h2 className="text-lg font-bold mb-2">¡Envío Gratis!</h2>
                <p className="text-sm">En compras mayores a $50.000</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-4 space-x-2">
            {[0, 1, 2].map((index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Categories Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 px-4">Categorías</h2>
        <div className="overflow-x-auto scrollbar-hide -mx-4">
          <div className="flex gap-4 px-4 pb-2">
            {/* Category Items */}
            <div className="flex-shrink-0">
              <div className="w-[200px] h-[100px] bg-gradient-to-r from-amber-400 to-orange-500 rounded-[30px] flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Licores</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-[200px] h-[100px] bg-gradient-to-r from-green-400 to-emerald-500 rounded-[30px] flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Cervezas</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-[200px] h-[100px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-[30px] flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Vinos</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-[200px] h-[100px] bg-gradient-to-r from-blue-400 to-cyan-500 rounded-[30px] flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Snacks</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-[200px] h-[100px] bg-gradient-to-r from-red-400 to-rose-500 rounded-[30px] flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Bebidas</span>
              </div>
            </div>
            {/* Spacer for last item */}
            <div className="flex-shrink-0 w-4"></div>
          </div>
        </div>
      </div>

      {/* Restaurants Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 px-4">Restaurantes</h2>
        <div className="overflow-x-auto scrollbar-hide -mx-4">
          <div className="flex gap-4 px-4 pb-2">
            {/* Restaurant Items */}
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] bg-gray-200 border border-gray-300 rounded-[50px] mb-2"></div>
                <span className="text-sm font-medium text-center">McDonald's</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] bg-gray-200 border border-gray-300 rounded-[50px] mb-2"></div>
                <span className="text-sm font-medium text-center">KFC</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] bg-gray-200 border border-gray-300 rounded-[50px] mb-2"></div>
                <span className="text-sm font-medium text-center">Burger King</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] bg-gray-200 border border-gray-300 rounded-[50px] mb-2"></div>
                <span className="text-sm font-medium text-center">Pizza Hut</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] bg-gray-200 border border-gray-300 rounded-[50px] mb-2"></div>
                <span className="text-sm font-medium text-center">Domino's</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] bg-gray-200 border border-gray-300 rounded-[50px] mb-2"></div>
                <span className="text-sm font-medium text-center">Subway</span>
              </div>
            </div>
            {/* Spacer for last item */}
            <div className="flex-shrink-0 w-4"></div>
          </div>
        </div>
      </div>

      {/* Promociones Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 px-4">Promociones</h2>
        <div className="overflow-x-auto scrollbar-hide -mx-4">
          <div className="flex gap-4 px-4 pb-2">
            <ProductCard 
              name="Ron Barceló Imperial Premium 750ml"
              description="Ron premium envejecido"
              price={45000}
              originalPrice={60000}
              badge="oferta"
              onAddToCart={() => console.log('Added to cart')}
            />

            <ProductCard 
              name="Cerveza Corona Extra 355ml Pack x6"
              description="Cerveza importada mexicana"
              price={18000}
              originalPrice={22000}
              badge="descuento"
              onAddToCart={() => console.log('Added to cart')}
            />

            <ProductCard 
              name="Whisky Johnnie Walker Red Label 750ml"
              description="Whisky escocés mezclado"
              price={85000}
              originalPrice={100000}
              badge="oferta"
              onAddToCart={() => console.log('Added to cart')}
            />

            <ProductCard 
              name="Vodka Absolut Original 750ml Premium"
              description="Vodka sueco premium"
              price={55000}
              originalPrice={65000}
              badge="descuento"
              onAddToCart={() => console.log('Added to cart')}
            />

            {/* Spacer for last item */}
            <div className="flex-shrink-0 w-4"></div>
          </div>
        </div>
      </div>

      {/* Recomendados para ti Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 px-4">Recomendados para ti</h2>
        <div className="overflow-x-auto scrollbar-hide -mx-4">
          <div className="flex gap-4 px-4 pb-2">
            <ProductCard 
              name="Tequila José Cuervo Especial Gold 750ml"
              description="Tequila dorado mexicano"
              price={72000}
              onAddToCart={() => console.log('Added to cart')}
            />

            <ProductCard 
              name="Cerveza Stella Artois 330ml Pack x12"
              description="Cerveza belga premium"
              price={35000}
              onAddToCart={() => console.log('Added to cart')}
            />

            <ProductCard 
              name="Gin Bombay Sapphire 750ml"
              description="Gin inglés premium"
              price={95000}
              cartQuantity={1}
              onUpdateQuantity={(qty) => console.log('Updated quantity:', qty)}
            />

            <ProductCard 
              name="Vino Tinto Santa Rita 120 Cabernet 750ml"
              description="Vino chileno reserva"
              price={28000}
              onAddToCart={() => console.log('Added to cart')}
            />

            {/* Spacer for last item */}
            <div className="flex-shrink-0 w-4"></div>
          </div>
        </div>
      </div>

      {/* Mercado Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 px-4">Mercado</h2>
        <div className="overflow-x-auto scrollbar-hide -mx-4">
          <div className="flex gap-4 px-4 pb-2">
            <ProductCard 
              name="Ron Barceló Imperial Premium 750ml"
              description="Ron premium envejecido"
              price={45000}
              originalPrice={60000}
              badge="oferta"
              onAddToCart={() => console.log('Added to cart')}
            />

            <ProductCard 
              name="Cerveza Corona Extra 355ml Pack x6"
              description="Cerveza importada mexicana"
              price={18000}
              originalPrice={22000}
              badge="descuento"
              onAddToCart={() => console.log('Added to cart')}
            />

            <ProductCard 
              name="Whisky Johnnie Walker Red Label 750ml"
              description="Whisky escocés mezclado"
              price={85000}
              cartQuantity={2}
              onUpdateQuantity={(qty) => console.log('Updated quantity:', qty)}
            />

            <ProductCard 
              name="Vodka Absolut Original 750ml Premium"
              description="Vodka sueco premium"
              price={65000}
              onAddToCart={() => console.log('Added to cart')}
            />

            {/* Spacer for last item */}
            <div className="flex-shrink-0 w-4"></div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mb-8">
        {/* Main Image */}
        <div className="mb-4">
          <img 
            src="https://c14ce689ee7372c6cb4275b4bb833dc7.cdn.bubble.io/cdn-cgi/image/w=1536,h=404,f=auto,dpr=2,fit=contain/f1733590968734x459019704528185200/banner-m195169todos-de-pago-01-01.webp"
            alt="Banner promocional"
            className="w-full h-auto rounded-xl"
          />
        </div>
        
        {/* Image Gallery Row */}
        <div className="overflow-x-auto scrollbar-hide -mx-4">
          <div className="flex gap-3 px-4 pb-2">
            {Array.from({ length: 8 }, (_, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="w-[120px] h-[80px] bg-gray-200 rounded-lg"></div>
              </div>
            ))}
            {/* Spacer for last item */}
            <div className="flex-shrink-0 w-4"></div>
          </div>
        </div>
      </div>

      {/* Bottom spacing for navigation */}
      <div className="pb-8"></div>

    </div>
  )
}