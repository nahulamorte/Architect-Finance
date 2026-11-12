import './ActivitySection.css';

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

            </div>
            <div className="footer-activity-section">
                <a className="historial">Ver historial completo de transacciones (142)</a>
            </div>
        </section>

    );
}