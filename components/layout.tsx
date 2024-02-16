import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>
          {children}
          <SpeedInsights />
        </main>
      </div>
      <Footer />
    </>
  )
}
