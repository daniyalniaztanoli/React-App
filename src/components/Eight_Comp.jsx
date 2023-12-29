import '../App.css'
const Eight_Comp = ()=>{
    return(
        <>
        <div className='flex justify-evenly h-full items-center' style={{height:"20vh"}}>
            <div className=''>
                <ul className='flex'>
                    <li><a className='text-blue-700 font-semibold me-3' href="#">About</a>.</li>
                    <li><a className='text-blue-700 font-semibold me-3' href="#">Contact</a>.</li>
                    <li><a className='text-blue-700 font-semibold me-3' href="#">Term of Use</a>.</li>
                    <li><a className='text-blue-700 font-semibold me-3' href="#">Privacy Policy</a>.</li>
                </ul>
                <p><i class="fa-regular fa-copyright text-sm"></i> Your Webite 2023.All Rights Reserved</p>

            </div>
            <div className=''>
                <ul className='flex '>
                    <li><i style={{fontSize:"2em"}} class="fa-brands fa-facebook text-blue-700 me-4 hover:text-blue-800"></i></li>
                    <li><i style={{fontSize:"2em"}} class="fa-brands fa-twitter text-blue-700 me-4 hover:text-blue-800"></i></li>
                    <li><i style={{fontSize:"2em"}} class="fa-brands fa-instagram text-blue-700 me-4 hover:text-blue-800"></i></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Eight_Comp;