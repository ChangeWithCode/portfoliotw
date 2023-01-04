const Cards = ({image , title}) => {
    return ( 

        <div class="p-8 py-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black sm:p-22 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div class="space-y-12 text-center ">
            <img
                src={image}
                class="w-16 mx-auto"
                width="512"
                height="512"
            />
            <div class="space-y-6">
                <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">
                   {title}
                   
                </h3>


            </div>
        </div>
    </div>



     );
}
 
export default Cards;