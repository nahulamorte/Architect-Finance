//imports
import './BalanceCard.css';
import {Eye, SendHorizonal, ChartNoAxesCombined, Receipt, CreditCardPlus, UserRoundPen } from 'lucide-react';
export default function BalanceCard(){
    return(
        <section className="balance-section">
            <span className="status-account">Cuenta verificada</span>
            <div className="greeting">Hola Julian</div>
            <div className="balance-content">
                <div className="balance">
                    <span className="balance-header">Balance Total Disponible</span>
                    <button>
                        <Eye size={20} />
                    </button>
                        <div className="balance">
                            <span className="balance-value">$ 48250.00</span>
                            <span className="investiment-performance">
                                <button className="btn-action">
                                    <ChartNoAxesCombined size={20} />
                                    + 2.4% este mes
                                    <p></p>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="balance-actions">
                        {/*Aqui iria el componente de los botones, pero mientras tanto:*/}
                        <button className="btn-action">
                            <SendHorizonal size={20} /> Transferir
                        </button>
                        <button className="btn-action">
                            <Receipt size={20} /> Pagar Servicios
                        </button>
                        <button className="btn-action">
                            <CreditCardPlus size={20} /> Ingresar dinero
                        </button>
                        <button className="btn-action">
                            <UserRoundPen size={20} /> CVU / Alias
                        </button>
                    </div>
            </div>
        </section>
    );
}

