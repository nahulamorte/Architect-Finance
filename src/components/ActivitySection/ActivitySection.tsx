import './ActivitySection.css';
import ActivityCard from "../ActivityCard/ActivityCard.tsx";
import { ArrowDownRight, ArrowUpRight, Receipt, ShoppingBag } from 'lucide-react';
import type { Transaction } from "../../types/Transaction.ts";
import {useState} from "react";

export interface ActivitySectionProp{
    transactions: Transaction[];
}

const getIconForType = (type: string) => {
    switch (type) {
        case 'transferencia':
            return ArrowDownRight;
        case 'deposito':
            return ArrowUpRight;
        case 'pago':
            return Receipt;
        case 'tarjeta':
            return ShoppingBag;
        default:
            return ArrowDownRight;
    }
};

export default function ActivitySection({
    transactions = [],
}:ActivitySectionProp) {
    const [selectedCategory, setSelectedCategory] = useState<string>('todos');

    const safeTransactions = Array.isArray(transactions) ? transactions : [];

    const filteredTransactions = selectedCategory === 'todos'
        ? safeTransactions
        : safeTransactions.filter((tx) => tx.type === selectedCategory);

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
                        iconActivity={typeof tx.iconActivity === 'function' ? tx.iconActivity : getIconForType(tx.type)}
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