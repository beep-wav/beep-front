export interface ErrorProps {
}

export default function Error(props: ErrorProps) {
    return (
        <div className='bg-cloud h-screen w-full bg-no-repeat bg-cover flex justify-center'>
            <div className='flex flex-col gap-6 justify-center items-center'>
                <h1 className='font-extrabold'>404 ERROR</h1>
                <h5>You're not happy to see me !</h5>
            </div>
        </div>
    )
}