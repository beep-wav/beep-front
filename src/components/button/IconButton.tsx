interface IconButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
    className?: string;
}

export default function IconButton({onClick, children, className}: IconButtonProps) {
    return (
        <button
            className={`w-[50px] min-w-[50px] h-[50px] min-h-[50px] bg-violet-50 flex justify-center items-center text-slate-900 hover:bg-violet-100 rounded-xl hover:rounded-2xl transition-all ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
