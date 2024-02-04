import { LucideChevronDown } from "lucide-react";
import AddMembersButton from "./button/AddMembersButton";

interface MembersListHeaderProps {
}

export default function MembersListHeader(props: MembersListHeaderProps) {
    return (
        <div className="flex flex-row justify-between items-center gap-10">
            <div className="flex flex-row gap-2">
                <LucideChevronDown />
                <h5 className="text-slate-900 font-semibold">Members</h5>
            </div>
            <AddMembersButton title="Add members" />
        </div>
    );
}