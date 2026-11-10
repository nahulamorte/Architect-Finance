import Sidebar from './layout/Sidebar/Sidebar.tsx';
import TopHeader from './layout/TopHeader/TopHeader.tsx';
import BalanceCard from './components/BalanceCard/BalanceCard.tsx'

export default function App() {
  return (
      <>
        <TopHeader />
        <Sidebar/>
          <main className="main-content">
            <BalanceCard />
          </main>
      </>
  );
}