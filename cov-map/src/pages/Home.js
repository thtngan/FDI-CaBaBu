import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutUs from "./AboutUs";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
    <div className="min-h-screen ">
        <Header/>
        <section className="bg-white border-b py-8 bg-gradient-to-r from-red-400 to-yellow-200">
        <br></br>
        <div className="text-white font-mono flex flex-col mt-4">
            <div className="flex flex-row-reverse flex-wrap m-auto">
                <button className="m-4 hover:bg-orange-700 w-40 h-20 rounded px-3 py-2 m-4 border-b-4 border-l-2 shadow-lg bg-orange-500 border-orange-600 text-white">
                <Link to="/send-help">
                I need help
                </Link>
                
                </button>
            <button className="m-4 hover:bg-orange-700 w-40 h-20 rounded px-3 py-2 m-4 border-b-4 border-l-2 shadow-lg bg-orange-500 border-orange-600 text-white">
              <Link to="/want-help">
              I want to help
              </Link>
            </button>
            
            </div>
        </div>
        </section>
        
        <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            OUR VISION
            </h1>
            <div className="w-full mb-4">
                <div className="w-full text-xl text-gray-800 px-6">
                covMAP is a website with the purpose of connecting the user community together. This feature helps those who are in a difficult situation when they no longer have enough money to fight the Covid epidemic, they will receive support in terms of food, necessities, school supplies, counseling. medicine from the community.
                </div>
            </div>
            
        </div>
        </section>

        <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            COVID'S STATISTICS & FACTS
            </h1>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border-t-4 border-orange-600">
                <div className="text-5xl text-orange-500 font-bold text-center m-2 ">
                3,041,506
                </div>
                <div className="w-full text-base text-gray-800 px-6 text-center m-2">
                Number of coronavirus (COVID-19) cases in Vietnam
                </div>
            </div>
            </div>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border-t-4 border-orange-600">
                <div className="text-5xl text-orange-500 font-bold text-center m-2 ">
                39,884
                </div>
                <div className="w-full text-base text-gray-800 px-6 text-center m-2">
                Number of novel coronavirus (COVID-19) deaths in Vietnam
                </div>
            </div>
            </div>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border-t-4 border-orange-600">
                <div className="text-5xl text-orange-500 font-bold text-center m-2 ">
                2,339,784
                </div>
                <div className="w-full text-base text-gray-800 px-6 text-center m-2">
                Number of recovered in Vietnam
                </div>
            </div>
            </div>
        </div>
        </section>


        <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            WHAT WE OFFER?
            </h1>
            <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <p className="bg-orange-500 mx-auto lg:mx-0 gradient text-white font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-110 duration-300 ease-in-out">
                        FOOD
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                    No more hunger
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                We support to bring food to every home
              
                </p>
                </a>
            </div>

            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <p className="bg-orange-500 mx-auto lg:mx-0 gradient text-white font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-110 duration-300 ease-in-out">
                HEALTH CARE
                </p>
                
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                    No more illness
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                We provide timely health care support

                </p>
                </a>
            </div>
           
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <p className="bg-orange-500 mx-auto lg:mx-0 gradient text-white font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-110 duration-300 ease-in-out">
                DAILY NESSCESSITY
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                    No more difficulty
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                   
                    We support people to overcome difficult circumstances
                </p>
                </a>
            </div>
            </div>
        </div>
        </section>
        <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          CHARITY CORNER
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="flex flex-wrap mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-orange-500 font-bold leading-none mb-3">
            Giving laptops to poor children to study online
            </h3>
            <p className="text-gray-600 mb-8">
              
Regarding online learning during the Covid epidemic season, according to statistics, up to 1.5 million students do not have enough electronic devices to study online. Our purpose is to raise funds to support poor children.

            </p>
            <div className="flex items-center justify-end">
              <button className="mx-auto bg-orange-500 lg:mx-0 gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Join now!
              </button>
            </div>
            

          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src="/charity02.jpg" className="w-full sm:h-64 mx-auto"/>
          </div>
        </div>
        <br></br>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img src="/charity01.jpg" className="w-full sm:h-64 mx-auto"/>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-orange-500 font-bold leading-none mb-3">
              COVID-19: Relief & Recovery Efforts
              </h3>
              <p className="text-gray-600 mb-8">
                
              This community was created to support difficult situations affected by the Covid-19 epidemic.
              </p>
              <div className="flex items-center justify-end">
              <button className="mx-auto bg-orange-500 lg:mx-0 gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Join now!
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container mx-auto xl:px-40 bg-gray-10 pb-5">
    <AboutUs/>
   

    </div>
    <Footer/>
    </div>
     
     );
}
 
export default Home;