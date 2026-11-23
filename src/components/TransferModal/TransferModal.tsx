import './TransferModal.css'
import {X} from 'lucide-react'


interface TransferModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TransferModal({ isOpen, onClose }: TransferModalProps) {
    if (!isOpen) {
        return null
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h3>Transferir dinero</h3>
                    <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar modal">
                        <X size={20} />
                    </button>
                </div>
                <form className="modal-form">
                    <div className="form-group">
                        <label>Destinatario</label>
                        <input type="text" placeholder="CVU / CBU / Alias"/>
                    </div>
                    <div className="form-group">
                        <label>Monto a transferir</label>
                        <input type="text" placeholder="$1.000.000,0"/>
                    </div>
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