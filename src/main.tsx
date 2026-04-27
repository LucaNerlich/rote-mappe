import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'

// Register a minimal network-passthrough service worker. It exists so
// Chromium-based browsers keep treating the site as installable
// (PWA install prompt / "Install app" menu entry) after we dropped
// vite-plugin-pwa. It also takes over any old Workbox-based SW that
// returning users still have registered and clears its caches on
// activation. See public/sw.js for the full rationale.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Registration failures are non-fatal — the app works fine without
      // a SW, we just lose PWA installability on Chromium.
    })
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
