import './ActivityCard.css';
import type { LucideIcon } from 'lucide-react';
import { Download } from 'lucide-react';

interface ActivityCardProps {
    iconActivity: LucideIcon;
    label: string;
    hour: string;
    date: string;
    status?: 'completado' | 'rechazado';
    value: string;
    currency: string;
    onClick?: () => void;
}

export default function ActivityCard({
    iconActivity: Icon,
    label,
    hour,
    date,
    status = 'completado',
    value,
    currency,
}: ActivityCardProps) {
    return (
        <div className="activity-card">
            {/* Lado Izquierdo: Icono + Información */}
            <div className="activity-card-left">
                <div className="icon-container">
                    <Icon size={20} className="activity-icon" />
                </div>
                <div className="activity-info">
                    <p className="activity-title">{label}</p>
                    <div className="activity-description">
                        <span className="activity-date">{date}, {hour}</span>
                        <span className="activity-separator">•</span>
                        <span className={`status-dot ${status === 'completado' ? 'dot-completed' : 'dot-rejected'}`}></span>
                        <span className="status">{status}</span>
                    </div>
                </div>
            </div>

            {/* Lado Derecho: Monto/Moneda + Botón de Descarga */}
            <div className="activity-card-right">
                <div className="activity-value-block">
                    <span className="value">${value}</span>
                    <span className="currency">{currency}</span>
                </div>
                <button className="btn-download" aria-label="Descargar comprobante">
                    <Download size={18} />
                </button>
            </div>
        </div>
    );
}
