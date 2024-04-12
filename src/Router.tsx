import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import { Main } from './components/Main.tsx'
import {
    JoinRoute,
    ContractsRoute,
    GroupsRoute,
    InfoRoute,
    ProvidersRoute,
} from './routes.ts'
import { Join } from './components/Join.tsx'
import { Info } from './components/Info.tsx'
import { Providers } from './components/Providers.tsx'
import { Contracts } from './components/Contracts.tsx'
import { Groups } from './components/Groups.tsx'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

export const Router = () => {
    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path={GroupsRoute} element={<Groups />} />
                    <Route path={InfoRoute} element={<Info />} />
                    <Route path={ProvidersRoute} element={<Providers />} />
                    <Route path={ContractsRoute} element={<Contracts />} />
                    <Route path={JoinRoute} element={<Join />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
