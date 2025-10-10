import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { store } from './app/store.js';
import { Provider } from "react-redux"
import App from './App.jsx'

function Root() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isLargeScreen) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        textAlign: 'center',
        background: 'radial-gradient(circle at center, #1a1410 0%, #0a0806 100%)',
        fontFamily: '"Inter", sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,.1) 0px, transparent 1px, transparent 2px, rgba(0,0,0,.1) 3px)',
          pointerEvents: 'none',
          opacity: 0.3
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: 1,
          padding: '40px',
          border: '2px solid #8B7355',
          borderRadius: '4px',
          backgroundColor: 'rgba(20, 16, 12, 0.9)',
          boxShadow: '0 0 40px rgba(212, 175, 55, 0.3), inset 0 0 20px rgba(0,0,0,0.5)',
          maxWidth: '500px'
        }}>
          <h1 style={{ 
            fontSize: '32px', 
            marginBottom: '24px', 
            color: '#D4AF37',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            textShadow: '0 0 10px rgba(212, 175, 55, 0.5), 2px 2px 4px rgba(0,0,0,0.8)',
            fontWeight: 'bold'
          }}>
            You Lack Vigour
          </h1>
          <p style={{ 
            fontSize: '18px', 
            color: '#C4A882',
            lineHeight: '1.6',
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            marginBottom: '16px'
          }}>
            Tarnished, thy viewport is too narrow.
          </p>
          <p style={{ 
            fontSize: '16px', 
            color: '#8B7355',
            lineHeight: '1.6',
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            fontStyle: 'italic'
          }}>
            A Greater display is required to witness the full splendor of these lands.
          </p>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)