import './Card.css';
import { Nfc } from 'lucide-react';

interface CardProps {
    variant: 'metal' | 'virtual';
    badgeText?: string;
    cardType: string;
    cardNumber: string;
    labelBottomLeft?: string;
    labelBottomRight?: string;
    ownerName: string;
    expiry: string;
    network: 'visa' | 'mastercard';
}

export default function Card({
    variant,
    badgeText,
    cardType,
    cardNumber,
    labelBottomLeft = 'TITULAR',
    labelBottomRight = 'EXPIRA',
    ownerName,
    expiry,
    network
}: CardProps) {
    return (
        <div className={`credit-card ${variant}`}>
            <div className="card-header">
                <div className="card-brand-group">
                    <span className="card-brand-name">Architect Finance</span>
                    {badgeText && <span className="card-badge">{badgeText}</span>}
                </div>
                <Nfc size={18} className="card-nfc-icon" />
            </div>

            <div className="card-type-row">
                <p className="card-type">{cardType}</p>
            </div>

            <div className="card-number-row">
                <p className="card-number">{cardNumber}</p>
            </div>

            <div className="card-info-container">
                <div className="owner-info">
                    <span className="info-label">{labelBottomLeft}</span>
                    <p className="owner-name">{ownerName}</p>
                </div>

                <div className="expiry-info">
                    <span className="info-label">{labelBottomRight}</span>
                    <p className="expiry-date">{expiry}</p>
                </div>

                <div className="network-container">
                    {network === 'visa' ? (
                        <span className="network-visa">VISA</span>
                    ) : (
                        <div className="network-mastercard">
                            <span className="mc-circle mc-red" />
                            <span className="mc-circle mc-orange" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}