//imports
import './BalanceCard.css';
import { Eye, SendHorizonal, ChartNoAxesCombined, Receipt, CreditCardPlus, UserRoundPen } from 'lucide-react';
import ActionButton from '../ActionButton/ActionButton';

export default function BalanceCard(){
    return(
        <section className="balance-section">
            <span className="status-account">Cuenta verificada</span>
            <div className="greeting">Hola, Julian</div>

            {/* Piso 3: Etiqueta y botón del ojo */}
            <div className="balance-info">
                <span className="balance-header">Balance Total Disponible</span>
                <button className="toggle-bg-btn" aria-label="Ocultar saldo">
                    <Eye size={20} />
                </button>
            </div>

            {/* Piso 4: Fila horizontal que contiene el Saldo a la izquierda y los Botones a la derecha */}
            <div className="balance-content">
                <div className="balance-value-container">
                    <span className="balance-value">$ 48,250.00</span>
                    <span className="investiment-performance">
                        <ChartNoAxesCombined size={16} className="performance-icon" />
                        <div className="performance-text">
                            <span>+2.4%</span>
                            <span>este mes</span>
                        </div>
                    </span>
                </div>

                <div className="balance-actions">
                    <ActionButton icon={SendHorizonal} label="Transferir" variant="primary" />
                    <ActionButton icon={Receipt} label="Pagar servicios" />
                    <ActionButton icon={CreditCardPlus} label="Ingresar dinero" />
                    <ActionButton icon={UserRoundPen} label="CVU / Alias" />
                </div>
            </div>
        </section>
    );
}
