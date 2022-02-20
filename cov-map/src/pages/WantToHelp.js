import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
const WantToHelp = () => {
    return ( 
        <div>
        <div className="pb-7">
            <Header/>   
            </div>
        <div class="flex flex-row pt-7 mt-5">
            <div class="basis-1/2 mx-3">
                <Link to="/form"><img src="/map.jpeg"></img></Link>
            </div>
            <div class="basis-1/2 mx-3">
                <div class="rounded-lg  bg-orange-500">
                    <div class="text-white">STATISTICS</div>
                    <div>There are <span>10</span> people need help in your area.</div>
                    <div>You’ve helped <span>5</span> people!</div>
                </div>
                <div class="text-orange-500">Want to see other areas?</div>
                <div class="grid grid-flow-row auto-rows-max">
                <select id="" name="city" class="rounded-lg border-2 border-black my-3">
                    <option value="" disabled selected>City</option>
                    <option value="">HCM</option>
                    <option value="">Hanoi</option>
                    <option value="">Da Nang</option>
                </select>
                <select id="" name="district" class="rounded-lg border-2 border-black my-3">
                    <option value="" disabled selected>District</option>
                    <option value="">HCM</option>
                    <option value="">Hanoi</option>
                    <option value="">Da Nang</option>
                </select><select id="" name="ward" class="rounded-lg border-2 border-black my-3">
                    <option value="" disabled selected>Ward</option>
                    <option value="">HCM</option>
                    <option value="">Hanoi</option>
                    <option value="">Da Nang</option>
                </select>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Apply</button>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
     );
}
 
export default WantToHelp;