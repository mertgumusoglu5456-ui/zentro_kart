import { Component, type ReactNode } from 'react'
import BusinessCard from './components/BusinessCard'
import usersData from './data/users.json'
import type { UserConfig } from './components/BusinessCard'

const users = usersData as UserConfig[]

// ── Hata yakalayıcı ──────────────────────────────────────
class ErrorBoundary extends Component<{ children: ReactNode }, { error: string | null }> {
  state = { error: null }
  static getDerivedStateFromError(e: Error) { return { error: e.message } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, fontFamily: 'sans-serif', color: 'red' }}>
          <b>Render hatası:</b> {this.state.error}
        </div>
      )
    }
    return this.props.children
  }
}

// ── Ana uygulama ──────────────────────────────────────────
export default function App() {
  const raw   = window.location.pathname        // örn: "/mert"
  const slug  = raw.replace(/^\//, '').split('/')[0].toLowerCase()
  const user  = users.find(u => u.id === slug) ?? null

  if (!user) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        height: '100vh', fontFamily: 'DM Sans, sans-serif',
        color: '#555', gap: 8,
      }}>
        <p style={{ fontSize: '1.1rem', margin: 0 }}>
          {slug ? `"/${slug}" bulunamadı.` : 'Bir kullanıcı adresi girin.'}
        </p>
        <p style={{ fontSize: '0.85rem', margin: 0 }}>
          Örnek: <strong>/mert</strong> veya <strong>/arda</strong>
        </p>
        <p style={{ fontSize: '0.75rem', marginTop: 8, color: '#999' }}>
          Algılanan slug: "{slug}" — Kullanıcılar: {users.map(u => u.id).join(', ')}
        </p>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <BusinessCard user={user} />
    </ErrorBoundary>
  )
}
