import './ActivityCard.css'
import type {LucideIcon} from "lucide-react";
import {Download} from 'lucide-react';

interface ActivityCardProps {
    iconActivity: LucideIcon;
    label: string;
    hour: string;
    date: string;
    status?: 'completado' | 'rechazado';
    value: string;
    currency: string;
    onClick?: () => void;
}

export default function ActivityCard({
                                         iconActivity: Icon,
                                         label,
                                         hour,
                                         date,
                                         status = 'completado',
                                         value,
                                         currency
                                     }: ActivityCardProps) {
    return (

        <div className="activity-card">
            <div className="icon-container">
                <Icon size={20} />
            </div>
            <div className="account-card-header">
                <div className="activity-info">
                    <div className="activity-title">
                        <p>{label}</p>
                    </div>
                    <div className="activity-description">
                        <span className="activity-date">{date}, {hour}</span>
                        <span className={`status-dot ${status === 'completado' ? 'dot-completed' : 'dot-rejected'}`}></span>
                        <span className="status">{status}</span>
                    </div>
                </div>
            </div>
            <div className="activity-value">
                <p className="value">${value}</p>
                <span className="currency">{currency}</span>
            </div>
            <Download size={20}/>
        </div>
    )
}