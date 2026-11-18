import './CardSection.css';
import { CirclePlus, ShieldLock, RectangleEllipsis, SlidersHorizontal, Shield } from 'lucide-react';

export default function CardSection() {
    return (
        <section className="card-section">
            <div className="header-card-section">
                <div>
                    <h2 className="title-card-section">Tarjetas Activas</h2>
                    <p className="subtitle-card-section">2 tarjetas asociadas a tu cuenta</p>
                </div>
                <button type="button" className="btn-query-new-card">
                    <CirclePlus size={18} />
                    <span>Solicitar nueva</span>
                </button>
            </div>

            {/* Tarjeta 1: Física / Metal Infinite */}
            <div className="card-container">
                {/* Aquí se montará el componente Card físico */}
            </div>

            <div className="monthly-limit-container">
                <div className="monthly-limit-header">
                    <p className="limit-text">Límite mensual disponible</p>
                    <p className="limit-balance">$12,450.00 / $15,000</p>
                </div>
                <div className="monthly-limit-bar">
                    <div className="monthly-limit-fill"></div>
                </div>
                <div className="btn-limit-actions">
                    <button type="button" className="btn-limit-action">
                        <ShieldLock size={15} />
                        <span>Congelar tarjeta</span>
                    </button>
                    <button type="button" className="btn-limit-action">
                        <RectangleEllipsis size={15} />
                        <span>Cambiar PIN</span>
                    </button>
                    <button type="button" className="btn-limit-action">
                        <SlidersHorizontal size={15} />
                        <span>Límites</span>
                    </button>
                </div>
            </div>

            {/* Tarjeta 2: Virtual Online */}
            <div className="card-container">
                {/* Aquí se montará el componente Card virtual */}
            </div>

            <div className="virtual-limit-container">
                <div className="virtual-limit-header">
                    <p className="virtual-limit-text">Límite por compra digital</p>
                    <p className="limit-balance">$2,500.00</p>
                </div>
                <div className="virtual-limit-info">
                    <div className="security-info">
                        <Shield size={15} className="shield-icon" />
                        <span className="security-text">CVV dinámico activo</span>
                    </div>
                    <button type="button" className="card-data-anchor">
                        Ver datos de tarjeta
                    </button>
                </div>
            </div>
        </section>
    );
}
