//imports
import './BalanceCard.css';
import {
    Eye,
    SendHorizonal,
    ChartNoAxesCombined,
    Receipt,
    CreditCardPlus,
    UserRoundPen,
    EyeClosed
} from 'lucide-react';
import ActionButton from '../ActionButton/ActionButton';
import { useState} from "react";

interface BalanceCardProps {
    onTransferClick?: () => void;
}
export default function BalanceCard({onTransferClick}: BalanceCardProps) {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    return(
        <section className="balance-section">
            <span className="status-account">Cuenta verificada</span>
            <div className="greeting">Hola, Julian</div>

            <div className="balance-info">
                <span className="balance-header">Balance Total Disponible</span>
                <button className="toggle-bg-btn" aria-label="Ocultar saldo" onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? <Eye size={20} /> : <EyeClosed size="20" />}
                </button>
            </div>

            <div className="balance-content">
                <div className="balance-value-container">
                    <span className="balance-value">{isVisible ? "$ 48.250,00" : "*******"}</span>
                    <span className="investiment-performance">
                        <ChartNoAxesCombined size={16} className="performance-icon" />
                        <div className="performance-text">
                            <span>+2.4%</span>
                            <span>este mes</span>
                        </div>
                    </span>
                </div>

                <div className="balance-actions">
                    <ActionButton icon={SendHorizonal} label="Transferir" variant="primary" onClick={onTransferClick} />
                    <ActionButton icon={Receipt} label="Pagar servicios" />
                    <ActionButton icon={CreditCardPlus} label="Ingresar dinero" />
                    <ActionButton icon={UserRoundPen} label="CVU / Alias" />
                </div>
            </div>
        </section>
    );
}
