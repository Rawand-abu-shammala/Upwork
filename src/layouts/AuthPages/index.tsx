import { Logo, Body1 } from '@/components/pages/Typography'
import { ReactNode } from 'react'
import Style from './style'

interface IProps {
    children: ReactNode
}

const AuthPages = ({ children }: IProps) => {
    return (
        <Style>
            <nav className="nav"><Logo /></nav>
            <main className="auth_form">
                <div className="card">
                    {children}
                </div>
            </main>
            <footer className="footer">
                <Body1 align='center' color="white">
                    ©2015 - {new Date().getFullYear()} Upwork® Global Inc. • Privacy Policy
                </Body1>
            </footer>
        </Style>
    )
}

export default AuthPages