interface AuthInputProps {
    label : string;
    placeholder : string;
}
  
export default function AuthInput({label, placeholder} : AuthInputProps) {
    return (
        <div className='flex flex-col gap-2'>
            <label className='text-base font-semibold'>{label}</label>
            <input className='py-2 px-4 rounded-xl w-[350px]' type="text" placeholder={placeholder} />
        </div>
    );
};