import './Sidebar.css'

export default function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="subtitle-sidebar">
                <h3>
                    Banking services
                </h3>
                <p>
                    Precision Wealth & Cashflow
                </p>
            </div>
            <nav>
                <ul className="sidebar-list">
                    <li className="sidebar-item">Accounts</li>
                    <li className="sidebar-item">Transfers</li>
                    <li className="sidebar-item">Cards</li>
                    <li className="sidebar-item">Payments</li>
                    <li className="sidebar-item">Investiments</li>
                </ul>
            </nav>
        </aside>
    );
}