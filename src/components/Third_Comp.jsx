import '../App.css'

const Third_Comp = ()=>{
    return(
        <>
        <div className='flex justify-between w-full'>
            <div style={{width:"100%"}} className='w-1/2 flex flex-col justify-start items-start text-center h-full my-auto'>
                <h1 className='text-4xl ms-16 font-semibold mb-2'>Fully Responsive Design</h1>
                <p className='mx-14 text-gray-600'>
                    When you use a theme created by start Bootstrap,you know that the theme will lock great on any device.whether it's a phone,tablet,or desktop the page will behave responsively!
                </p>
            </div>
            <div className='bg-2 w-1/2'>
                <img src="img4" alt="" />
            </div>
        </div>
        </>
    )
}
export default Third_Comp;