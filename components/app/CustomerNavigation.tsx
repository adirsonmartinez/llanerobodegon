'use client'

import { Home, Search, ShoppingBag, User } from 'lucide-react'

const navigationItems = [
  { key: 'home', icon: Home, label: 'Inicio' },
  { key: 'search', icon: Search, label: 'Buscar' },
  { key: 'orders', icon: ShoppingBag, label: 'Pedidos' },
  { key: 'account', icon: User, label: 'Cuenta' },
]

interface CustomerNavigationProps {
  activeView: string
  onViewChange: (view: string) => void
}

export default function CustomerNavigation({ activeView, onViewChange }: CustomerNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {navigationItems.map(({ key, icon: Icon, label }) => {
          const isActive = activeView === key
          return (
            <button
              key={key}
              onClick={() => onViewChange(key)}
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                isActive 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}