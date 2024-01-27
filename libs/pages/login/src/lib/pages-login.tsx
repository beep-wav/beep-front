




  import styles from './pages-login.module.scss';
  import { Input } from '@beep-front/shared/ui';
  import { Button } from '@beep-front/shared/ui';
  import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface PagesLoginProps {
}



  
  export function PagesLogin(props: PagesLoginProps) {
    return (
      <div className={styles['container']}>
        <div className='bg-cloud h-screen w-full bg-no-repeat bg-cover flex justify-center'>
          <div className='flex flex-col gap-6 justify-center items-start'>
            <h1 className='font-extrabold'>Beep</h1>
            <h5>We are happy to see you !</h5>
            <Input label='EMAIL' placeholder='Email' />
            <Input label='PASSWORD' placeholder='Password' />
            <Link className='text-purple-600 font-medium' to={''}>Forgot password ?</Link>
            <Button title='Log in' />
            <div className='flex flex-row gap-1'>
              <h5 className='font-medium'>Don't have an account ?</h5>
              <Link className='text-purple-600 font-medium' to={''}>Sign up</Link>
            </div>
          </div>
          </div>
      </div>
    );
  };
  

  export default PagesLogin;



