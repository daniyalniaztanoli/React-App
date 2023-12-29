import '../App.css'
import img1 from '../img/testimonials-1.jpg'
import img2 from '../img/testimonials-2.jpg'
import img3 from '../img/testimonials-3.jpg'

const Sixth_comp = ()=>{
    return(
        <>
        <div style={{width:"100%"}} className='my-4'>
            <h1 className='text-3xl font-semibold my-5 text-center'>What people are saying...</h1>
            <div className='flex justify-evenly'>
                <div className='' style={{width:"30%"}}>
                <img className='rounded-full size-52 flex justify-center mx-auto' src={img1} alt="person1" />
                <h1 className='text-center text-2xl font-semibold'>MArgaret E.</h1>
                <p className='text-center font-semibold'>"This is fantastic!Thanks so much guys!"</p>
                </div>
                <div style={{width:"30%"}}>
                <img className='rounded-full size-52 flex justify-center mx-auto' src={img2} alt="person2" />
                <h1 className='text-center text-2xl font-semibold'>Fred S.</h1>
                <p className='text-center font-semibold'>"Bootstrap 5 is amazing I've been using it to create lots of super line landing pages. "</p>
                </div>
                <div style={{width:"30%"}}>
                <img className='rounded-full size-52 flex justify-center mx-auto' src={img3} alt="person3" />
                <h1 className='text-center text-2xl font-semibold'>Sarah W.</h1>
                <p className='text-center font-semibold'>"Thanks so much for making these free resources available to us!"</p>
                </div>
                </div>
            </div>
        </>
    )
}
export default Sixth_comp;