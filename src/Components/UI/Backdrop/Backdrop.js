import backdropModule from "./Backdrop.module.css";

const Backdrop = ({ children }) => {
    return <div className={backdropModule.backdrop}>
        {children}
    </div>;
}

export default Backdrop;