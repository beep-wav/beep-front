import { Link } from 'react-router-dom';
import AuthButton from '../components/button/AuthButton';
import AuthInput from '../components/input/AuthInput';

export interface SignupProps {
}

export default function Signup(props: SignupProps) {
  return (
    <div className='bg-cloud h-screen w-full bg-no-repeat bg-cover flex justify-center'>
        <div className='flex flex-col gap-6 justify-center items-start'>
            <h1 className='font-extrabold'>Beep</h1>
            <h5>We are happy to see you !</h5>
            <AuthInput label='EMAIL' placeholder='Email' />
            <AuthInput label='PASSWORD' placeholder='Password' />
            <AuthInput label='CONFIRM PASSWORD' placeholder='Password' />
            <AuthButton title='Sign up' />
            <div className='flex flex-row gap-1'>
                <h5 className='font-medium'>Already have an account ?</h5>
                <Link className='text-purple-600 font-medium' to={''}>Log in</Link>
            </div>
        </div>
    </div>
  );
};


