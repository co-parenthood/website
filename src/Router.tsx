import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import { Main } from './components/Main.tsx'
import {
    CommunityRoute,
    ContractsRoute,
    GroupsRoute,
    InfoRoute,
    ProvidersRoute,
} from './routes.ts'
import { Community } from './components/Community.tsx'
import { Info } from './components/Info.tsx'
import { Providers } from './components/Providers.tsx'
import { Contracts } from './components/Contracts.tsx'

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path={GroupsRoute} element={<div>ok</div>} />
                <Route path={InfoRoute} element={<Info/>} />
                <Route path={ProvidersRoute} element={<Providers/>} />
                <Route path={ContractsRoute} element={<Contracts/>} />
                <Route path={CommunityRoute} element={<Community />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
