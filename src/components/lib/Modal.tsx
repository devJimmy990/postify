import { FC, ReactNode } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-6 relative">
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &#x2715;
                </button>

                {/* Modal Title */}
                {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}

                {/* Modal Content */}
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
