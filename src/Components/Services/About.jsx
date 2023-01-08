import Projects from "../Cards/Projects";
const About = () => {
  const projects = [
    {
      title: "Sentimantle",
      about:
        "Sentimantle is a state-of-the-art software platform that assists a broad variety of companies in service sectors to improve their operations and customer satisfaction.",
      link: "https://sentimantle.com/",
      stack: ["reactjs", "python", "mysql"],
    },
    {
      title: "Charge Guard",
      about:
        "Chargeguard is an organization of passionate online retail specialists leveraging 40+ years of merchandising, eCommerce and shopper marketing to optimize growth and profitably on the Amazon marketplace and other eRetailers.",
      link: "https://cgops.chargeguard.co/",
      stack: ["reactjs", "python", "mysql"],
    },
    {
      title: "Meseo",
      about:
        "We take your business a step further | Experience noticeable results that make the difference.",
      link: "https://meseo.dk/",
      stack: ["wordpress", "php", "mysql"],
    },
    {
        title: "Street View Spectator",
        about:
          "Having spent countless hours ourselves either using email lists or Google search results and reviewing one by one to find businesses that we needed to contact, we knew there had to be a better way.",
        link: "https://streetviewspectator.com/",
        stack: ["reactjs", "python", "mysql"]
      },
      {
        title: "OTC Markets",
        about:
          "Data visualization app which shows changes in the stock.",
        link: "https://yachtrm.com/",
        stack: ["reactjs", "python", "mysql"]
      },
  ];

  return (
    <div class="xl:container m-auto space-y-12 md:px-12 lg:px-20 mt-10">
      <div class="relative flex flex-col items-center overflow-hidden py-20 md:py-40 ">
        <div class="container relative z-[1] m-auto px-6 md:px-12">
          <div class="m-auto text-center md:w-8/12 lg:w-6/12">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              What I've Been Working On
            </h2>
          </div>

          <div class="container m-auto px-3 text-gray-500 md:px-12 xl:px-0 mt-20">
            <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
              {projects &&
                projects.map((obj) => {
                  return (
                    <Projects
                      title={obj.title}
                      about={obj.about}
                      link={obj.link}
                      stack = {obj.stack}
                    ></Projects>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
