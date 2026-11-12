import './ActivitySection.css';
import ActivityCard from "../ActivityCard/ActivityCard.tsx";
import { ArrowUpRight, ArrowDownRight, BanknoteArrowDown, Receipt   } from 'lucide-react'

export default function ActivitySection() {
    return (
        <section className="activity-section">
            <div className="header-activity-section">
                <div className="header-info">
                    <h2 className="header-title">Actividad bancaria reciente</h2>
                </div>
                    <ul className="activity-types-list">
                        <li className="activity-type">Todos</li>
                        <li className="activity-type">Transferencia</li>
                        <li className="activity-type">Depósitos</li>
                        <li className="activity-type">Tarjeta</li>
                    </ul>
            </div>
            <div className="activitys">
                <ActivityCard
                    iconActivity={Receipt}
                    label={"Pago de Servicio"}
                    hour={"21:19"}
                    date={"12 nov"}
                    value={"60.000"}
                    currency={"ARS"}
                />
                <ActivityCard
                    iconActivity={ArrowDownRight}
                    label={"Transferencia a Lara Heyd"}
                    hour={"11:11"}
                    date={"11 nov"}
                    value={"11111"}
                    currency={"ARS"}
                />
                <ActivityCard
                    iconActivity={BanknoteArrowDown}
                    label={"Retiro de efectivo"}
                    hour={"07:11"}
                    date={"11 nov"}
                    value={"11111"}
                    currency={"ARS"}
                />
                <ActivityCard
                    iconActivity={ArrowUpRight}
                    label={"Transferencia de Beto"}
                    hour={"17:33"}
                    date={"10 nov"}
                    value={"15.000"}
                    currency={"ARS"}
                />
            </div>
            <div className="footer-activity-section">
                <a className="historial">Ver historial completo de transacciones (142)</a>
            </div>
        </section>

    );
}