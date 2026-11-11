import './AccountSection.css';
import { ShieldCheck } from 'lucide-react'
import AccountCard from '../AccountCard/AccountCard'

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
                <AccountCard
                    accountName="Cuenta Corriente Internacional"
                    currency="USD"
                    identifierLabel="IBAN"
                    identifier="ES91 •••• 8492"
                    type="ahorro"
                    balance="$32.150,00"
                    balanceNote="Fondos operativos inmediatos"
                    noteVariant="muted"
                />
                <AccountCard
                    accountName="Caja de Ahorro Rendimiento"
                    currency="ARS"
                    identifierLabel="CVU"
                    identifier="00000031 •••• 1042"
                    type="rendimiento"
                    balance="$1.600.100,00"
                    balanceNote="TNA Estimada 4.2% anual"
                    noteVariant="brand"
                />
            </div>
            <div className="footer-account-section">
                <div className="legal">
                    <ShieldCheck size={20} color="#0052FFFF"/>
                    <p className="footer-text">Fondos protegidos por garantia bancaria europea</p>
                </div>
                <a className="anchor-legal-footer">Ver detalles fiscales</a>
            </div>
        </section>
    )
}