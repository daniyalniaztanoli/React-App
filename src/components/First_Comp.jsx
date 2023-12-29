import '../App.css'
const First_Comp = () => {
    return (
        <>
            <div className="bg-1 flex flex-col items-center justify-center h-full">
                <h1 className='capitalize text-white text-4xl font-semibold text-center'>
                    generate more leads with a <br /> professional landing page!
                </h1>
                <div className='flex justify-center mt-4 mx-0'>
                    <input placeholder='Email Address' className='w-64 ms-2 bg-white rounded-md me-2 text-left p-2 focus:outline-none' type="text" />
                    <button className='bg-blue-700 text-white px-3 py-2 rounded-md'>Submit</button>
                </div>
            </div>

        </>
    )
}
export default First_Comp;