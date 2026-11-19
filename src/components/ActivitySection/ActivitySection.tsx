import './ActivitySection.css';
import ActivityCard from "../ActivityCard/ActivityCard.tsx";
import { ArrowUpRight, ArrowDownRight, BanknoteArrowDown, Receipt, ShoppingBag, CreditCard } from 'lucide-react';
import type { Transaction } from "../../types/Transaction.ts";
import {useState} from "react";

const TRANSACTIONS: Transaction[] = [
    {
        id: 'tx-1',
        type: 'pago',
        iconActivity: Receipt,
        label: 'Pago de Servicio Luz & Gas Metrogas',
        hour: '21:19',
        date: '12 nov',
        value: '60.000',
        currency: 'ARS',
        status: 'completado'
    },
    {
        id: 'tx-2',
        type: 'transferencia',
        iconActivity: ArrowDownRight,
        label: 'Transferencia a Lara Heyd',
        hour: '11:11',
        date: '11 nov',
        value: '11.111',
        currency: 'ARS',
        status: 'completado'
    },
    {
        id: 'tx-3',
        type: 'deposito',
        iconActivity: BanknoteArrowDown,
        label: 'Depósito nómina salarial',
        hour: '09:15',
        date: '11 nov',
        value: '3.600',
        currency: 'USD',
        status: 'completado'
    },
    {
        id: 'tx-4',
        type: 'transferencia',
        iconActivity: ArrowUpRight,
        label: 'Transferencia recibida de Beto',
        hour: '17:33',
        date: '10 nov',
        value: '15.000',
        currency: 'ARS',
        status: 'completado'
    },
    {
        id: 'tx-5',
        type: 'tarjeta',
        iconActivity: ShoppingBag,
        label: 'Compra Apple Store Paseo de Gracia',
        hour: '16:45',
        date: '09 nov',
        value: '199,00',
        currency: 'USD',
        status: 'completado'
    },
    {
        id: 'tx-6',
        type: 'pago',
        iconActivity: CreditCard,
        label: 'Suscripción Spotify Premium',
        hour: '04:12',
        date: '08 nov',
        value: '2.499',
        currency: 'ARS',
        status: 'completado'
    },
    {
        id: 'tx-7',
        type: 'tarjeta',
        iconActivity: ShoppingBag,
        label: 'Compra Supermercado Coto',
        hour: '13:20',
        date: '06 nov',
        value: '45.820',
        currency: 'ARS',
        status: 'rechazado'
    }
];


export default function ActivitySection() {
    const [selectedCategory, setSelectedCategory] = useState<string>('todos');

    const filteredTransactions = selectedCategory === 'todos'
        ? TRANSACTIONS
        : TRANSACTIONS.filter((tx) => tx.type === selectedCategory);

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