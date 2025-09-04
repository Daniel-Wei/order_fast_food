import backdropModule from "./ConfirmModalBackdrop.module.css";

const ConfirmModalBackdrop = ({ children }) => {
    return <div className={backdropModule.backdrop}>
        {children}
    </div>;
}

export default ConfirmModalBackdrop;