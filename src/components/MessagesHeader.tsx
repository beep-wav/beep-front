import { LucideHash, LucideChevronDown } from "lucide-react";

interface MessagesHeaderProps {
    channel: string;
}

export default function MessagesHeader({channel}: MessagesHeaderProps) {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 items-center justify-center p-4 bg-violet-300 rounded-xl"><LucideHash className="w-4 h-4"/><h5 className="font-semibold">{channel}</h5></div>
            <button className="flex flex-row gap-2 items-center justify-center p-4 bg-violet-300 rounded-xl"><h5 className="font-semibold">📌 Pinned messages</h5><LucideChevronDown className="w-4 h-4"/></button>
        </div>
    );
}