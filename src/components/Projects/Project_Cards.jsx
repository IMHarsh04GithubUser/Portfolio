import P1 from "../../assets/P1.png";
import P3 from "../../assets/P3.png";
import P4 from "../../assets/P4.png";
export const Cards = () => {
  const cardsinfo = [
    {
      heading: "Restaurant Website (Gourmat Garden)",
      text: "This is Project where I have created a Restaurant Website and add a functionality of order food online. I have created this using ReactJS, Bootstrap, ExpressJS, NodeJS",
      src:P1,
    },
    
    {
      heading: "Calculator",
      text: "This is My Project which I have created using React JS and Tailwind CSS. This calculator has all basic functionalitites for calculation",src:P3
    },
    {
        heading:'Indian Flight Price Dashboard',
        text:'I have Created a project using PowerBI that analyze flight prices accross various airlines, classes and destinations. This dashboard provides insights into price, trends, helping businesses to make informed decisions. ',
        src:P4
    }
  ];
  return (
    <>
    <div className="flex flex-col gap-10 lg:flex-row md:flex-row ">
    {cardsinfo.map((data1, index) => {
        return (
          <>
            <div class=" max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:scale-125 shadow-xl shadow-cyan-400">
              <a href="#">
                <img class="rounded-t-lg" src={data1.src} alt={data1.heading} />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data1.heading}
                  </h5>
                </a>
                <p class=" font-normal text-gray-700 dark:text-gray-400">
                 {data1.text}
                </p>
                
              </div>
            </div>
          </>
        );
      })}
    </div>
     
    </>
  );
};
