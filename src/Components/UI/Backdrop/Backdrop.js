import { createPortal } from "react-dom";
import backdropModule from "./Backdrop.module.css";

const Backdrop = ({ children }) => {
    const backdropContainer = document.getElementById('backdropContainer');

    return createPortal ((<div className={backdropModule.backdrop}>
        {children}
    </div>), backdropContainer);
}

export default Backdrop;