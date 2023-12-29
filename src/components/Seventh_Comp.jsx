import '../App.css'
const Sevents_Comp = () =>{
    return (
        <>
        <div className='bg-6'>
        <div className='flex flex-col justify-center items-center h-full'>
            <h1 className='text-3xl text-white font-semibold mb-3'>
Ready to get started? Sign Up now !
            </h1>
            <div className='flex-row'>
            <input placeholder='Email Address' type="text" style={{width:"500px"}} className='p-3 me-2 rounded-md' />
            <button className='p-3 bg-blue-700 text-white rounded-md'>Submit</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default Sevents_Comp;