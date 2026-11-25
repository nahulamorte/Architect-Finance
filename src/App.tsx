import { ArrowDownRight } from "lucide-react";
import Sidebar from './layout/Sidebar/Sidebar.tsx';
import TopHeader from './layout/TopHeader/TopHeader.tsx';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx'
import AccountSection from "./components/AccountSection/AccountSection.tsx";
import ActivitySection from "./components/ActivitySection/ActivitySection.tsx";
import CardSection from "./components/CardsSection/CardSection.tsx";
import MonthlyFlow from "./components/MonthlyFlow/MonthlyFlow.tsx";
import TransferModal from "./components/TransferModal/TransferModal.tsx";
import {useState} from "react";
import type {Transaction} from "./types/Transaction.ts";


export default function App() {
    const [isTransferOpen, setIsTransferOpen] = useState<boolean>(false);
    const [balance, setBalance] = useState<number>(5000);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const handleTransferSucess = (transferAmount: number, recipient: string) => {
        setBalance((prevBalance) => prevBalance - transferAmount);

        const newTransaction: Transaction = {
            id: 'tx- ' + Date.now(),
            type: 'transferencia',
            iconActivity: ArrowDownRight,
            label: `Transferencia enviada a ${recipient}`,
            hour: new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
            date: 'Hoy',
            value: transferAmount.toLocaleString('es-AR', {minimumSignificantDigits: 2}),
            status:  'completado',
            currency: 'ARS'
        }

        setTransactions((prev) => [newTransaction, ...prev]);
        console.log('Transferencia enviada a ' + recipient);
    }

    return (
        <>
            <TopHeader/>
            <Sidebar/>
            <main className="main-content">
                <BalanceCard
                    username={"Antigravity"}
                    amount={balance}
                    onTransferClick={() => setIsTransferOpen(true)}
                />
                <div className="dashboard-grid">
                    <div className="dashboard-left-col">
                        <AccountSection/>
                        <ActivitySection transactions = {transactions}/>
                    </div>
                    <div className="dashboard-right-col">
                        <CardSection/>
                        <MonthlyFlow/>
                    </div>
                </div>
                <TransferModal
                    isOpen={isTransferOpen}
                    onClose={() => setIsTransferOpen(false)}
                    currentBalance={balance}
                    onTransferSuccess={handleTransferSucess}
                />
            </main>
        </>
    );
}