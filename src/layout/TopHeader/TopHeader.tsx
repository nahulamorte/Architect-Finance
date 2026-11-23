import './TopHeader.css'
import logo from '../../assets/logo.svg';
import { Search, Sun, User, Moon } from 'lucide-react'
import {useEffect, useState} from "react";

export default function TopHeader(){
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isDarkMode]);

    return (
        <header className="top-header">
            <div className="logo-container">
                <img src={logo} alt="Architec finance" className="header-logo" />
            </div>
            <nav className="header-nav">
                <button className="nav-item" >Overview</button>
                <button className="nav-item">Homebanking</button>
                <button className="nav-item">Markets</button>
                <button className="nav-item">Insights</button>
            </nav>
            <div className="header-actions">
                <button type="button" className="btn-action" aria-label="Buscar">
                    <Search size={20}/>
                </button>
                <button 
                    type="button" 
                    className="btn-action btn-theme" 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    aria-label="Alternar tema claro y oscuro"
                >
                    <span className={`theme-icon ${isDarkMode ? 'dark' : 'light'}`}>
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </span>
                </button>
                <button type="button" className="btn-action" aria-label="Perfil de usuario">
                    <User size={20}/>
                </button>
            </div>
        </header>
    )
}