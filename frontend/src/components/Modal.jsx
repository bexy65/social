function Modal({onClose, handleAction, message, title}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full flex flex-col items-start gap-2 max-w-md bg-white p-6">
                <div className="w-full ">
                    <p className="text-xl font-bold">
                        {title && title}
                    </p>
                </div>

                <p className="py-2">
                    {message && message}
                </p>
                
                <div className="flex flex-col w-full lg:flex-row gap-2">
                    <button className="border p-2 w-full lg:w-1/4" onClick={handleAction}>
                        Send
                    </button>
                    <button className="border p-2 w-full lg:w-1/4" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;