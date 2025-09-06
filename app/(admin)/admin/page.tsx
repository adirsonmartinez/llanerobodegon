'use client'

import { useState } from 'react'
import DashboardView from '@/components/admin/views/DashboardView'
import ProductsView from '@/components/admin/views/ProductsView'
import OrdersView from '@/components/admin/views/OrdersView'
import SettingsView from '@/components/admin/views/SettingsView'
import AdminNavigation from '@/components/admin/AdminNavigation'

export default function AdminPage() {
  const [activeView, setActiveView] = useState('dashboard')

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />
      case 'products':
        return <ProductsView />
      case 'orders':
        return <OrdersView />
      case 'settings':
        return <SettingsView />
      default:
        return <DashboardView />
    }
  }

  return (
    <div className="min-h-screen pb-16">
      <main className="container mx-auto px-4 py-4">
        {renderView()}
      </main>
      <AdminNavigation 
        activeView={activeView} 
        onViewChange={setActiveView} 
      />
    </div>
  )
}