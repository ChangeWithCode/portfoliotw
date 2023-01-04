import Banner1 from "../../Assets/Banner1.png"
const Banner = () => {
    return (

        <div class="bg-black container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-8xl font-semibold text-gray-800 dark:text-white lg:text-8xl animate__animated animate__backInDown">Hello, I am Qasim.</h1>
                        <p class="mt-4 text-2xl text-white dark:text-white">FrontEnd Developer React js</p>

                    </div>
                </div>

                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img class="w-full h-full lg:max-w-3xl" src={Banner1} alt="Catalogue-pana.svg" />
                </div>
            </div>
        </div>


    );
}

export default Banner;