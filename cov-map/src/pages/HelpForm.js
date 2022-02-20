import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const HelpForm = () => {
    return ( 
        <div>
            <div className="pb-7">
                <Header/>   
            </div>
            <div class="pt-7 mt-5">
                <div>
                    <p className="w-full my-2 text-2xl font-bold text-orange-500 leading-tight text-gray-800">Status <span class="bg-orange-300 border-2 rounded-md text-white">Waiting</span></p>
                    
                </div>
                <div>
                    <p className="w-full my-2 text-2xl font-bold text-orange-500 leading-tight text-gray-800">Category support <span class="bg-orange-300 border-2 rounded-md text-white">Food</span></p>
                </div>
                <div>
                    <p className="w-full my-2 text-2xl font-bold text-orange-500 leading-tight text-gray-800">Detail</p>
                    <textarea class="rounded-lg border-2 border-black my-3 resize-none w-full h-full"></textarea>
                </div>
                <div>
                    <p className="w-full my-2 text-2xl font-bold text-orange-500 leading-tight text-gray-800">Contact Info</p>
                    <div class="grid grid-flow-row auto-rows-max">
                        <input type="text" placeholder="Name:" class="rounded-lg border-2 border-black my-3 "></input>
                        <input type="text" placeholder="Phone number:" class="rounded-lg border-2 border-black my-3"></input>
                        <input type="text" placeholder="Address" class="rounded-lg border-2 border-black my-3"></input>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default HelpForm;