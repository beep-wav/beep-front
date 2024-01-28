interface AuthButtonProps {
    title : string;
}
  
export default function AuthButton({title}: AuthButtonProps) {
    return (        
        <button className='bg-slate-800 hover:bg-slate-900 text-violet-50 py-2 font-medium text-base w-full rounded-xl'>{title}</button>
    );
};