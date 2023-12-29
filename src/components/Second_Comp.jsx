import '../App.css'
const Second_comp = () =>{
    return(
        <>
        <div class="w-full container flex flex-wrap justify-evenly bg-white my-10">
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8">
        <i class="fa-solid fa-window-maximize text-blue-700 mx-auto w-full mb-3"></i>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">Fully Responsive</h1>
        <p class="text-sm sm:text-md text-center text-gray-600">
            This theme will look great on any device, no matter the size!
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8">
        <i class="fa-solid fa-layer-group text-blue-700 mx-auto w-full mb-3"></i>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            Bootstrap 5 Ready
        </h1>
        <p class="text-sm sm:text-md text-center text-gray-600">
            Featuring the latest build of the new Bootstrap 5 Framework!
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8">
        <i class="fa-solid fa-terminal text-blue-700 mx-auto w-full mb-3"></i>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">Easy To Use</h1>
        <p class="text-sm sm:text-md text-center text-gray-600">
            Ready to use with your own content or customize the source files!
        </p>
    </div>
</div>

        </>
    )
}
export default Second_comp;