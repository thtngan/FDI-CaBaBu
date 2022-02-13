import Header from "../components/header/Header";
const Home = () => {

    return ( 
    <div class="min-h-screen ">
        <Header/>
        <section class="bg-white border-b py-8">
        <div class="bg-transparent text-white font-mono flex flex-col">
            <div class="flex flex-row-reverse flex-wrap m-auto">
                <button class="m-4 hover:bg-orange-700 w-64 h-64 rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-orange-500 border-orange-600 text-white">
                I need help
                </button>
            <button class="m-4 hover:bg-orange-700 w-64 h-64 rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-orange-500 border-orange-600 text-white">
                I want to help
            </button>
            
            </div>
        </div>
        </section>
        
        <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            OUR VISION
            </h1>
            <div class="w-full mb-4">
                <div class="w-full text-xl text-gray-800 px-6">
                covMAP is a website with the purpose of connecting the user community together. This feature helps those who are in a difficult situation when they no longer have enough money to fight the Covid epidemic, they will receive support in terms of food, necessities, school supplies, counseling. medicine from the community.
                </div>
            </div>
            
        </div>
        </section>

        <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            COVID'S STATISTICS & FACTS
            </h1>

            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border-t-4 border-orange-600">
                <div class="text-5xl text-orange-500 font-bold text-center m-2 ">
                403,769,801
                </div>
                <div class="w-full text-base text-gray-800 px-6 text-center m-2">
                Number of coronavirus (COVID-19) cases worldwide
                </div>
            </div>
            </div>

            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border-t-4 border-orange-600">
                <div class="text-5xl text-orange-500 font-bold text-center m-2 ">
                5,796,553
                </div>
                <div class="w-full text-base text-gray-800 px-6 text-center m-2">
                Number of novel coronavirus (COVID-19) deaths worldwide
                </div>
            </div>
            </div>

            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border-t-4 border-orange-600">
                <div class="text-5xl text-orange-500 font-bold text-center m-2 ">
                3,016,150,000
                </div>
                <div class="w-full text-base text-gray-800 px-6 text-center m-2">
                Number of COVID-19 vaccine doses administered worldwide
                </div>
            </div>
            </div>
        </div>
        </section>


        <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            WHAT WE OFFER?
            </h1>
            <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="bg-orange-500 mx-auto lg:mx-0 gradient text-white font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-110 duration-300 ease-in-out">
                        FOOD
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                    Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                </a>
            </div>

            </div>
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="bg-orange-500 mx-auto lg:mx-0 gradient text-white font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-110 duration-300 ease-in-out">
                HEALTH CARE
                </p>
                
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                    Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                </a>
            </div>
           
            </div>
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="bg-orange-500 mx-auto lg:mx-0 gradient text-white font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-110 duration-300 ease-in-out">
                DAILY NESSCESSITY
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                    Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                </a>
            </div>
            </div>
        </div>
        </section>
        <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          CHARITY CORNER
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="flex flex-wrap mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-orange-500 font-bold leading-none mb-3">
            Giving laptops to poor children to study online
            </h3>
            <p class="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.

            </p>
            <div class="flex items-center justify-end">
              <button class="mx-auto bg-orange-500 lg:mx-0 gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Join now!
              </button>
            </div>
            

          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img src="/charity02.jpg" class="w-full sm:h-64 mx-auto"/>
          </div>
        </div>
        <br></br>
        <div class="flex flex-wrap flex-col-reverse sm:flex-row mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <img src="/charity01.jpg" class="w-full sm:h-64 mx-auto"/>
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-orange-500 font-bold leading-none mb-3">
              COVID-19: Relief & Recovery Efforts
              </h3>
              <p class="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
              <div class="flex items-center justify-end">
              <button class="mx-auto bg-orange-500 lg:mx-0 gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Join now!
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
     
     );
}
 
export default Home;