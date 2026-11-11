import './AccountSection.css';
import { ShieldCheck } from 'lucide-react'

export default function AccountSection(){
    return(
        <section className="account-section">
            <div className="header-account-section">
                <div className="header-titles">
                    <h2 className="header-title">Cuentas y Depósitos </h2>
                    <h4 className="header-subtitle">Cuentas bancarias de titularidad directa</h4>
                </div>
                <span className="account-counter">2 activas</span>
            </div>
            <div className="account-cards-container">
                <p> ACA VA A IR LA 1ER CARD</p>
                <p> ACA VA A IR LA 2DA CARD</p>
            </div>
            <div className="footer-account-section">
                <div className="legal">
                    <ShieldCheck size={20}/>
                    <p className="footer-text">Fondos protegidos por garantia bancaria europea</p>
                </div>
                <a className="anchor-legal-footer">Ver detalles fiscales</a>
            </div>
        </section>
    )
}