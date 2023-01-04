const Projects = ({ title, about, link  , stack}) => {
    return (

        <div class="p-8 py-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black sm:p-22 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div class="space-y-12 text-center ">
                <div class="space-y-6">
                    {stack && stack.map((item) =>
                    {
                        return(
                            <span
                            class="whitespace-nowrap mr-1 rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700"
                        >
                            {item}
                        </span>

                        )
                    })}
                    <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">
                        {title}
                    </h3>
                    <p className="mt-3 text-white">{about}</p>


                    <a
                        class="group relative inline-block focus:outline-none focus:ring"
                        href={link}
                        target="_blank"
                    >
                        <span
                            class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>

                        <span
                            class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                        >
                            Visit
                        </span>
                    </a>




                </div>
            </div>
        </div>



    );
}

export default Projects;