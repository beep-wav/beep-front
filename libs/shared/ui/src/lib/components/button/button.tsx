




  

/* eslint-disable-next-line */
export interface ButtonProps {
  title : string;
}



  
  export function Button({title}: ButtonProps) {
    return (        
      <button className='bg-slate-800 hover:bg-slate-900 text-violet-50 py-2 font-medium text-base w-full rounded-xl'>{title}</button>
    );
  };
  

  export default Button;



