import './ActionButton.css';
import type { LucideIcon } from 'lucide-react';

// 1. Definición del "contrato" de datos que este botón espera recibir
interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}


export default function ActionButton({
  icon: Icon,
  label,
  variant = 'secondary',
  onClick,
}: ActionButtonProps) {
  return (
    <button className={`action-btn ${variant}`} onClick={onClick}>
      <Icon size={20} className="action-btn-icon" />
      <span className="action-btn-label">{label}</span>
    </button>
  );
}
