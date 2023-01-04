const Connect = () => {

    const ConnectData = [

        {title : "GitHub" , link : "https://github.com/ChangeWithCode"},
        {title : "LinkedIn" , link : "https://www.linkedin.com/in/muhammad-qasim10/"},
        {title : "Twitter" , link : "https://twitter.com/Qasimakamystery"},
        {title : "Email" , link : "mailto:qasimriaz814@gmail.com"},


    ]

    return ( 

        
        <div class="relative pb-10">
        <div class="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40 ">
          <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12 ">
            <div class="rounded-3xl border  bg-gradient-to-r from-gray-700 via-gray-900 to-black border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="p-8 py-12 sm:p-16 ">
                <div class="space-y-4">
                  <h2 class="mb-8 text-5xl font-bold text-gray-800 dark:text-white">
                  Contact Me
                  </h2>
                </div>
                <div class="mt-16 grid space-y-4">
                    {ConnectData && ConnectData.map((obj) =>
                    {
                        return(
                            <a href={obj.link} target ="_blank" class="group relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-700 dark:before:border-gray-600 before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100">
                            <span class="w-full relative flex justify-center items-center gap-3 text-base font-medium text-gray-600 dark:text-gray-200">
                              <span>{obj.title}</span>
                            </span>
                          </a>
                        )
                    })}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                                          


     );
}
 
export default Connect;