import type {LucideIcon} from "lucide-react";

export interface Transaction {
    id: string;
    type: 'transferencia' | 'pago' | 'deposito' | 'tarjeta';
    iconActivity?: LucideIcon;
    label: string;
    hour: string;
    date: string;
    status?: 'completado' | 'rechazado';
    value: string;
    currency: string;
}

export type TransactionCategory = 'todos' | 'transferencia' | 'pago' | 'deposito' | 'tarjeta';
