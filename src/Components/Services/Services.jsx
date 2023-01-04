import JS from "../../Assets/JS.png"
import Cards from "../Cards/Cards";
import Reactjs from "../../Assets/React.png"
import Python from "../../Assets/python.png"
import Html from "../../Assets/html.png"
import CSS from "../../Assets/css-3.png"
import Bootstrap from "../../Assets/bootstrap.png"
import tailwind from "../../Assets/TailwindCSS.png"
import git from "../../Assets/git.png"

const Services = () => {

    const CardsObj  = [
        {image : JS , title : "JavaScript"},
        {image : Reactjs , title : "React"},
        {image : Python , title : "Python"},
        {image : Html , title : "Html"},
        {image : CSS , title : "CSS"},
        {image : Bootstrap , title : "Bootstrap"},
        {image : tailwind , title : "TailwindCSS"},
        {image : git , title : "Git"}
    ]

    return (


        <div class="py-2">
            <div class="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20">
                <div>
                    <h2 class="mt-4 text-center text-8xl font-bold text-gray-800 dark:text-white md:text-6xl">
                        Favorite technologies
                    </h2>
                </div>
                <div class="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-4">
                {CardsObj && CardsObj.map((obj) =>
                {
                    return (
                        
                        <Cards image = {obj.image} title = {obj.title}></Cards>
                    )

                })}
                
                
                </div>
            </div>
        </div>



    );
}

export default Services;