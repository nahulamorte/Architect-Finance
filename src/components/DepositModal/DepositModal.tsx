import './DepositModal.css';
import {X} from "lucide-react";
import {useState} from "react";

interface DepositModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDepositSuccess: (amount: number) => void;
    // onTransferSuccess: (amount: number, recipient: string) => void;
}

export default function DepositModal({
    isOpen,
    onClose,
    onDepositSuccess,
                                     }: DepositModalProps){
    const [error, setError] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault();

            const amountNumeric = parseFloat(amount);
            if (isNaN(amountNumeric) || amountNumeric <= 0){
                setError('Ingrese un monto válido');
                return;
            } else {
                onDepositSuccess(amountNumeric);
            }

            setAmount('');
            onClose();
    }

    if (!isOpen){
        return null;
    }
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Depositar dinero</h3>
                    <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar modal">
                        <X size={20}/>
                    </button>
                </div>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Monto a Depositar</label>
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
                            Depositar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}