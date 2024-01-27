




  import styles from './input.module.scss';
  

/* eslint-disable-next-line */
export interface InputProps {
  label : string;
  placeholder : string;
}



  
  export function Input({label, placeholder} : InputProps) {
    return (
      <div className={styles['container']}>
        <div className='flex flex-col gap-2'>
          <label className='text-base font-semibold'>{label}</label>
          <input className='py-2 px-4 rounded-xl w-[350px]' type="text" placeholder={placeholder} />
        </div>
      </div>
    );
  };
  

  export default Input;



