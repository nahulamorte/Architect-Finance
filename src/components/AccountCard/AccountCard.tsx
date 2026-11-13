import './AccountCard.css'
import {Copy} from 'lucide-react'
interface AccountCardProps{
    accountName: string,
    currency: string,
    identifier: string,
    identifierLabel: string,
    type: 'ahorro' | 'rendimiento',
    balance: string,
    balanceNote: string,
    noteVariant: 'muted' | 'brand',
}

export default function AccountCard({
                                        accountName,
                                        currency,
                                        identifier,
                                        identifierLabel,
                                        type,
                                        balance,
                                        balanceNote,
                                        noteVariant
}: AccountCardProps){
    return (
        <div className="account-card">
            <div className="card-info">
                <div className="account-card-header">
                    <span className={`status-dot ${type === 'ahorro' ? 'dot-saving' : 'dot-performance'}`}></span>
                    <h2 className="account-name">{accountName}</h2>
                    <span className="currency-type">{currency}</span>
                </div>
                <div className="account-card-identifier">
                    <span className="identifier-label">{identifierLabel}: </span>
                    <span className="identifier">{identifier}</span>
                    <button className="btn-copy-icon" aria-label="Copiar identificador">
                        <Copy size={13} />
                        <span>Copiar</span>
                    </button>
                </div>
            </div>
            <div className="card-balance">
                <h1>{balance}</h1>
                <p className={`balance-note ${noteVariant === 'brand' ? 'note-brand' : 'note-muted'}`}>
                    {balanceNote}
                </p>
            </div>
        </div>
    );
}