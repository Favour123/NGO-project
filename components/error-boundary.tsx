'use client'

import React, { useEffect, useState } from 'react'

export default function ErrorBoundary({
  children,
}: {
  children: React.ReactNode
}) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Suppress MetaMask and wallet-related errors
    const handleError = (event: ErrorEvent) => {
      if (
        event.message.includes('MetaMask') ||
        event.message.includes('ethereum') ||
        event.message.includes('Failed to connect')
      ) {
        event.preventDefault()
        console.warn('Wallet extension not available:', event.message)
        return false
      }
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason?.message?.includes('MetaMask') ||
        event.reason?.message?.includes('ethereum') ||
        event.reason?.message?.includes('extension not found')
      ) {
        event.preventDefault()
        console.warn('Wallet error:', event.reason)
        return false
      }
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  if (hasError) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>An error occurred. Please refresh the page.</p>
      </div>
    )
  }

  return <>{children}</>
}
