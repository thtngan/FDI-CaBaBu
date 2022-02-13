import Header from "../components/header/Header";
const Home = () => {
    return ( 
    <div>
    <Header/>
    <div class="bg-transparent text-white font-mono flex flex-col min-h-screen ">
        <div class="flex flex-row-reverse flex-wrap m-auto">
            <button class="hover:bg-orange-700 w-64 h-64 rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-orange-500 border-orange-600 text-white">
            I need help
            </button>
        <button class="hover:bg-orange-700 w-64 h-64 rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-orange-500 border-orange-600 text-white">
            I want to help
        </button>
        
        </div>
    </div>
    </div>
     
     );
}
 
export default Home;