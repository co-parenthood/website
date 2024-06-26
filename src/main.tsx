import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './Router.tsx'
import ReactGA from 'react-ga4';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
)

ReactGA.initialize('G-H4D2PKWP6X');
