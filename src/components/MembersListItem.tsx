import MemberStatus from "./MemberStatus";
import { LucideMessageCircleMore } from "lucide-react";

interface MembersListItemProps {
    name: string;
    image: string;
    isConnected: boolean;
}

export default function MembersListItem({name, image, isConnected}: MembersListItemProps) {
    return (
        <div className="flex flex-row justify-between items-center p-2 hover:bg-violet-400 rounded-xl transition-all cursor-pointer w-full group">
            <div className="flex flex-row gap-3 items-center">
                <img className="w-9 min-w-[36px] h-9 min-h-[36px] bg-violet-50 rounded-xl" src={image} alt={name + "-img"} />
                <h5 className="font-semibold text-xs truncate w-[125px]">{name}</h5>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <MemberStatus isConnected={isConnected} />
                <button className="hidden group-hover:block">
                    <LucideMessageCircleMore className="w-[20px] h-[20px]"/>
                </button>
            </div>
        </div>
    );
}