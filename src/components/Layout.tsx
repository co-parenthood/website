import { Balloon } from './Balloon.tsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Header } from './Header.tsx'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer.tsx'
import styled from '@emotion/styled'
import { Black } from '../theme.ts'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

const MainContents = styled.div`
    flex: 1;
    background-color: ${Black};
`

export const Layout = () => (
    <Container dir="rtl">
        <CssBaseline />
        <Header />
        <MainContents>
            <Outlet />
        </MainContents>
        <Footer />
        <Balloon />
    </Container>
)
