import { LucidePlus } from "lucide-react";

interface AddMembersButtonProps {
    title : string;
}
  
export default function AuthButton({title}: AddMembersButtonProps) {
    return (        
        <button className='bg-violet-400 px-3 py-2 text-base w-full rounded-xl hover:rounded-2xl transition-rounded font-semibold flex flex-row'><LucidePlus/>{title}</button>
    );
};