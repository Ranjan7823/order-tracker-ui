import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Suspense, lazy} from 'react'

const AppRoutes = lazy(() => import('./app-routes'));
function App() {
  const [count, setCount] = useState(0)

  return (
   <Suspense fallback={<h3>Loading ...</h3>}>
    <AppRoutes />
   </Suspense>
  );
}

export default App
