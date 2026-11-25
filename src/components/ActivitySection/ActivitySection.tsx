import './ActivitySection.css';
import ActivityCard from "../ActivityCard/ActivityCard.tsx";
// import { ArrowUpRight, ArrowDownRight, BanknoteArrowDown, Receipt, ShoppingBag, CreditCard } from 'lucide-react';
import type { Transaction } from "../../types/Transaction.ts";
import {useState} from "react";


export interface ActivitySectionProp{
    transactions: Transaction[];
}


export default function ActivitySection({
    transactions,
                                        }:ActivitySectionProp) {
    const [selectedCategory, setSelectedCategory] = useState<string>('todos');

    const filteredTransactions = selectedCategory === 'todos'
        ? transactions
        : transactions.filter((tx) => tx.type === selectedCategory);

    return (
        <section className="activity-section">
            <div className="header-activity-section">
                <div className="header-info">
                    <h2 className="header-title">Actividad bancaria reciente</h2>
                </div>
                <ul className="activity-types-list">
                    <li className={`activity-type ${selectedCategory === 'todos' ? 'active' : ''}`} onClick={()=> setSelectedCategory('todos')}>Todos</li>
                    <li className={`activity-type ${selectedCategory === 'transferencia' ? 'active' : ''}`} onClick={()=> setSelectedCategory('transferencia')}>Transferencia</li>
                    <li className={`activity-type ${selectedCategory === 'deposito' ? 'active' : ''}`} onClick={()=> setSelectedCategory('deposito')}>Depósitos</li>
                    <li className={`activity-type ${selectedCategory === 'tarjeta' ? 'active' : ''}`} onClick={()=> setSelectedCategory('tarjeta')}>Tarjeta</li>
                </ul>
            </div>
            <div className="activitys">
                {filteredTransactions.map((tx) => (
                    <ActivityCard
                        key={tx.id}
                        iconActivity={tx.iconActivity}
                        label={tx.label}
                        hour={tx.hour}
                        date={tx.date}
                        value={tx.value}
                        currency={tx.currency}
                        status={tx.status}
                    />
                ))}
            </div>
            <div className="footer-activity-section">
                <a className="historial">Ver historial completo de transacciones (142)</a>
            </div>
        </section>

    );
}