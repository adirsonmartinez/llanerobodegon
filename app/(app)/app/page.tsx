'use client'

import { useState } from 'react'
import HomeView from '@/components/app/views/HomeView'
import SearchView from '@/components/app/views/SearchView'
import OrdersView from '@/components/app/views/OrdersView'
import AccountView from '@/components/app/views/AccountView'
import CustomerNavigation from '@/components/app/CustomerNavigation'

export default function CustomerApp() {
  const [activeView, setActiveView] = useState('home')

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView />
      case 'search':
        return <SearchView />
      case 'orders':
        return <OrdersView />
      case 'account':
        return <AccountView />
      default:
        return <HomeView />
    }
  }

  return (
    <div className="min-h-screen pb-16">
      <main className="container mx-auto px-4 py-4">
        {renderView()}
      </main>
      <CustomerNavigation 
        activeView={activeView} 
        onViewChange={setActiveView} 
      />
    </div>
  )
}