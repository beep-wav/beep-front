interface MemberStatusProps {
    isConnected: boolean;
}

export default function MemberStatus({isConnected}: MemberStatusProps) {
    return (
        <div className={`px-2 py-1 rounded-xl ${isConnected ? 'bg-green-300' : 'bg-red-300'}`}><p className="font-semibold text-xs">{isConnected ? 'Online' : 'Offline'}</p></div>
    );
}