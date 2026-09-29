function Modal({onClose}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-white p-6">
                <h2 className="text-xl font-bold">
                    Join event
                </h2>

                <p className="my-2">
                    Do you want to send a join request?
                </p>
                
                <button onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default Modal;