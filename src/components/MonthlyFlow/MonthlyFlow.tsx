import './MonthlyFlow.css'

export default function MonthlyFlow(){
    return (
        <section className="monthly-flow-container">
            <div className="monthly-flow-header">
                <h2>Flujo Mensual</h2>
                <p className="monthly-year">Noviembre 2026</p>
            </div>
            <div className="monthly-flow-info">
                <div className="monthly-info">
                    <span className="monthly-info-title">Ingresos</span>
                    <span className="monthly-info-value income">+$25.000,00</span>
                </div>
                <div className="monthly-info">
                    <span className="monthly-info-title">Gastos</span>
                    <span className="monthly-info-value expense">-$20.000,00</span>
                </div>
            </div>
            <div className="monthly-flow-bar">
                <div className="monthly-flow-fill"></div>
            </div>
            <div className="monthly-description">
                <p className="monthly-description-text">
                    Has ahorrado un <strong>32% más</strong> en comparación con el mismo período del mes anterior. Tus finanzas están en estado óptimo.
                </p>
            </div>
        </section>
    );
}