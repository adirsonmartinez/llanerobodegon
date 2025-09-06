'use client'

import { useState } from 'react'
import DashboardView from '@/components/delivery/views/DashboardView'
import OrdersView from '@/components/delivery/views/OrdersView'
import MapView from '@/components/delivery/views/MapView'
import ProfileView from '@/components/delivery/views/ProfileView'
import DeliveryNavigation from '@/components/delivery/DeliveryNavigation'

export default function DeliveryPage() {
  const [activeView, setActiveView] = useState('dashboard')

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />
      case 'orders':
        return <OrdersView />
      case 'map':
        return <MapView />
      case 'profile':
        return <ProfileView />
      default:
        return <DashboardView />
    }
  }

  return (
    <div className="min-h-screen pb-16">
      <main className="container mx-auto px-4 py-4">
        {renderView()}
      </main>
      <DeliveryNavigation 
        activeView={activeView} 
        onViewChange={setActiveView} 
      />
    </div>
  )
}