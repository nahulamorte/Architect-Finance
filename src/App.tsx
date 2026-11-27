import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Sidebar from './layout/Sidebar/Sidebar.tsx';
import TopHeader from './layout/TopHeader/TopHeader.tsx';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx'
import AccountSection from "./components/AccountSection/AccountSection.tsx";
import ActivitySection from "./components/ActivitySection/ActivitySection.tsx";
import CardSection from "./components/CardsSection/CardSection.tsx";
import MonthlyFlow from "./components/MonthlyFlow/MonthlyFlow.tsx";
import TransferModal from "./components/TransferModal/TransferModal.tsx";
import {useEffect, useState} from "react";
import type {Transaction} from "./types/Transaction.ts";
import DepositModal from "./components/DepositModal/DepositModal.tsx";


export default function App() {
    const [isTransferOpen, setIsTransferOpen] = useState<boolean>(false);
    const [isDepositOpen, setIsDepositOpen] = useState<boolean>(false);
    const [balance, setBalance] = useState(() => {
      const balanceSaved = localStorage.getItem('balance');
      return balanceSaved !== null ? Number(balanceSaved) : 0;
    });
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
       localStorage.setItem('balance', balance.toString());
    });

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

    const handleDepositSucess = (amountToDeposit: number) => {
        setBalance((prevAmount) => prevAmount + amountToDeposit);

        const newTransaction: Transaction = {
            id: 'tx- ' + Date.now(),
            type: 'deposito',
            iconActivity: ArrowUpRight,
            label: `Deposito a cuenta`,
            hour: new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
            date: 'Hoy',
            value: amountToDeposit.toLocaleString('es-AR', {minimumSignificantDigits: 2}),
            status:  'completado',
            currency: 'ARS'
        }

        setTransactions((prev) => [newTransaction, ...prev]);
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
                    onDepositClick={() => setIsDepositOpen(true)}
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
                <DepositModal
                    isOpen={isDepositOpen}
                    onClose={() => setIsDepositOpen(false)}
                    onDepositSuccess={handleDepositSucess}
                />
            </main>
        </>
    );
}