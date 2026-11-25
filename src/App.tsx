import Sidebar from './layout/Sidebar/Sidebar.tsx';
import TopHeader from './layout/TopHeader/TopHeader.tsx';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx'
import AccountSection from "./components/AccountSection/AccountSection.tsx";
import ActivitySection from "./components/ActivitySection/ActivitySection.tsx";
import CardSection from "./components/CardsSection/CardSection.tsx";
import MonthlyFlow from "./components/MonthlyFlow/MonthlyFlow.tsx";
import TransferModal from "./components/TransferModal/TransferModal.tsx";
import {useState} from "react";


export default function App() {
    const [isTransferOpen, setIsTransferOpen] = useState<boolean>(false);
    const [balance, setBalance] = useState<number>(5000);

    const handleTransferSucess = (transferAmount: number, recipient: string) => {
        setBalance((prevBalance) => prevBalance - transferAmount);
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
                        <ActivitySection/>
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