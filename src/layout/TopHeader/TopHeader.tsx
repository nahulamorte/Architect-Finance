import './TopHeader.css'
import logo from '../../assets/logo.svg';
import { Search, Sun, User } from 'lucide-react'

export default function TopHeader(){
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
                <button className="btn-action">
                    <Search size={20}/>
                </button>
                <button className="btn-action">
                    <Sun size={20}/>
                </button>
                <button className="btn-action">
                    <User size={20}/>
                </button>
            </div>
        </header>
    )
}