import Sidebar from './layout/Sidebar/Sidebar.tsx';
import TopHeader from './layout/TopHeader/TopHeader.tsx';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx'
import AccountSection from "./components/AccountSection/AccountSection.tsx";
import ActivitySection from "./components/ActivitySection/ActivitySection.tsx";


export default function App() {
    return (
        <>
            <TopHeader/>
            <Sidebar/>
            <main className="main-content">
                <BalanceCard/>
                <div className="dashboard-grid">
                    <div className="dashboard-left-col">
                        <AccountSection/>
                        <ActivitySection/>
                    </div>
                    <div className="dashboard-right-col">

                    </div>
                </div>
            </main>
        </>
    );
}