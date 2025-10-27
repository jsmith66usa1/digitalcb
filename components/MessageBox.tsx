
import React from 'react';

interface MessageBoxProps {
    isVisible: boolean;
    message: string;
    onOk: () => void;
}

export const MessageBox: React.FC<MessageBoxProps> = ({ isVisible, message, onOk }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-slate-800 text-white p-6 rounded-lg shadow-xl text-center max-w-sm w-full mx-4">
                <p className="mb-4">{message}</p>
                <button 
                    onClick={onOk}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                    OK
                </button>
            </div>
        </div>
    );
};
