import './TransferModal.css'
import {X} from 'lucide-react'
import {useState} from "react";
// import { formatCurrency } from "../../utils/formatters.ts";
    

interface TransferModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentBalance: number;
    onTransferSuccess: (amount: number, recipient: string) => void;
}

export default function TransferModal({isOpen, onClose, currentBalance, onTransferSuccess}: TransferModalProps) {
    const [recipient, setRecipient] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [error, setError] = useState<string>('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (recipient.trim() === '') {
            setError('Por favor ingrese un destinatario válido');
            return;
        }

        const numericAmount = parseFloat(amount);
        if (isNaN(numericAmount) || numericAmount <= 0) {
            setError('Por favor ingresá un monto válido mayor a 0.');
            return;
        }

        if(currentBalance < numericAmount) {
            setError('Dinero insuficiente para realizar la transferencia')
            return;
        } else {
            onTransferSuccess(numericAmount, recipient);
        }

        setRecipient('');
        setAmount('');

        onClose();
    }

    if (!isOpen) {
        return null
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Transferir dinero</h3>
                    <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar modal">
                        <X size={20}/>
                    </button>
                </div>
                <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-group">
                        <label>Destinatario</label>
                        <input
                            type="text"
                            value={recipient}
                            onChange={(e) => {
                                setRecipient(e.target.value);
                                if (error) setError('');
                            }}
                            placeholder="CVU / CBU / Alias"
                            min={5}
                        />
                    </div>
                    <div className="form-group">
                        <label>Monto a transferir</label>
                        <input
                            type="number"
                            min={1}
                            value={amount}
                            onChange={(e) => {
                                setAmount(e.target.value);
                                if (error) setError('');
                            }}
                            placeholder="$1.000.000,00"
                            step="any"
                        />
                    </div>
                    {error && (
                        <div className="form-error">
                            <span>{error}</span>
                        </div>
                    )}
                    <div className="modal-actions">
                        <button type="button" className="btn-cancel" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn-confirm">
                            Transferir
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}