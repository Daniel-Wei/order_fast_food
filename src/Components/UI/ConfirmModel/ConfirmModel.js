import ConfirmModalBackdrop from '../ConfirmModalBackdrop/ConfirmModelBackdrop';
import ConfirmModule from './ConfirmModal.module.css';

const ConfirmModal = ({confirmText, onConfirmDelete, onCancelDelete}) => {
    return <ConfirmModalBackdrop>
            <div className={ConfirmModule.confirmModal}>
                <div className={ConfirmModule.confirmText}>
                    {confirmText}
                </div>
            
                <div className={ConfirmModule.confirmModelButtonContainer}>
                    <button className={ConfirmModule.confirmModelButton} onClick={onConfirmDelete}>Yes</button>
                    <button className={ConfirmModule.confirmModelButton} onClick={onCancelDelete}>No</button>
                </div>
            </div>
        
    </ConfirmModalBackdrop>
}

export default ConfirmModal;