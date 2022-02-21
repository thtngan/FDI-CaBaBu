import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Image } from 'antd';
const HelpForm = () => {
    return ( 
        <div>
            <div className="pb-7">
                <Header/>   
            </div>

            <section className="bg-white border-b ">
                <br></br>
            <div class="min-w-sm border border-gray-700 bg-gray-700 text-gray-50 transition-shadow shadow-xl hover:shadow-xl min-w-max">
			<br></br>
			
				<div class="flex items-center p-4">
					<div class="relative flex flex-col items-center w-full">
						<div
							class="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-400 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white mt-14">
							<img class="h-24 w-24 md rounded-full relative" src="https://avatars3.githubusercontent.com/u/11801238?v=4" alt=""/>
							<div class="absolute"></div>
						</div>
						<div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
							<span class="text-md whitespace-nowrap text-gray-50 font-semibold">Nguyen Van A</span>
                            <span class="text-md whitespace-nowrap text-gray-100">(+84) 312356466 </span>
                            <span class="text-md whitespace-nowrap text-gray-100">123 ABC Street, Ward 1, District 10, Ho Chi Minh City </span>
							<div class="py-2 flex space-x-2">
								<span class="flex justify-center  max-h-max whitespace-nowrap rounded max-w-max text-white hover:bg-red-600 bg-red-400 px-4 py-1 flex items-center hover:shadow-lg"><span class="mr-2"></span>Waiting<span class="ml-2"></span></span>
                                <span class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">Food<span class="ml-2"></span></span>
                                <span class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg">Healthcare<span class="ml-2"></span></span>

							</div>
						</div>
					</div>
				</div>
                </div>
            </section>
            

            <section className="bg-white border-b py-8">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                DETAIL
                </h1>
                <div className="w-full mb-4">
                    <div className="w-full text-xl text-gray-800 px-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                    
                    </div>
                </div>
                
            </div>
            </section>

            <section className="bg-white border-b py-8">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
               PROOF
                </h1>

				<img class="h-60 w-66 md relative m-2" src="/help.png" alt=""/>
				<img class="h-60 w-66 md relative m-2" src="/help.png" alt=""/>
				<img class="h-60 w-66 md relative m-2" src="/help.png" alt=""/>
    
            </div>
            </section>

            <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-3 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Contact</button>
                </div>

            
            <Footer/>
        </div>
     );
}
 
export default HelpForm;