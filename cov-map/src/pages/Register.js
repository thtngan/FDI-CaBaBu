export default function Register(){
    return (
    <div class="relative min-h-screen flex flex-col bg-indigo-100 flex justify-center items-center bg-gradient-to-r from-red-200 to-orange-100">
        <div class="lg:w-2/5 md:w-1/2 w-2/3">
            <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
                <h1 class="text-center text-5xl mb-6 text-orange-600 font-bold font-sans">Cov-MAP</h1>
                <h2 class="text-center text-2xl mb-6 text-blue-600 font-bold font-sans">REGISTER</h2>

                <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                            First Name
                        </label>
                        <input
                            class="w-full bg-gray-100 px-3 py-2 rounded-lg focus:outline-none" type="text" name="FirstName" id="FirstName" placeholder="First Name"
                        />
                    </div>
                    <div class="md:ml-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                            Last Name
                        </label>
                        <input
                            class="w-full bg-gray-100 px-3 py-2 rounded-lg focus:outline-none" type="text" name="LastName" id="LastName" placeholder="Last Name"
                        />
				    </div>
			    </div>

                <div>
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="username">Username</label>
                    <input class="w-full mb-4 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="Username" />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="password">Password</label>
                    <input class="w-full mb-4 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="Password" />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="confirm">Confirm password</label>
                    <input class="w-full mb-4 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="Confirm password" />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="email">Email</label>
                    <input class="w-full mb-4 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="text">Phone Number</label>
                    <input class="w-full mb-5 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="PhoneNumber" id="PhoneNumber" placeholder="Phone Number" />
                </div>

                <h2 class="text-left text-lg mb-4 text-gray-400 font-bold font-sans">Address</h2>

                <div>
                    <div class="mb-4 md:flex md:justify-between">
                        <div class="mb-4 md:mr-2 md:mb-0">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="Street">
                                Street
                            </label>
                            <input
                                class="w-full bg-gray-100 px-3 py-2 rounded-lg focus:outline-none" type="text" name="Street" id="Street" placeholder="Street"
                            />
                        </div>
                        <div class="md:ml-2">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="Ward">
                                Ward
                            </label>
                            <input
                                class="w-full bg-gray-100 px-3 py-2 rounded-lg focus:outline-none" type="text" name="Ward" id="Ward" placeholder="Ward"
                            />
                        </div>
                    </div>
                    <div class="mb-4 md:flex md:justify-between">
                        <div class="mb-4 md:mr-2 md:mb-0">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="District">
                                District
                            </label>
                            <input
                                class="w-full bg-gray-100 px-3 py-2 rounded-lg focus:outline-none" type="text" name="District" id="District" placeholder="District"
                            />
                        </div>
                        <div class="md:ml-2">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="City">
                                City
                            </label>
                            <input
                                class="w-full bg-gray-100 px-3 py-2 rounded-lg focus:outline-none" type="text" name="City" id="City" placeholder="City"
                            />
                        </div>
                    </div>
                </div>

                <button type="submit" class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white bg-orange-500 hover:bg-orange-700 tracking-wide font-semibold font-sans">Register</button>

                <hr class="mb-6 border-t" />

				<div class="text-center">
					<a
						class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
						href="./index.html">
						Already have an account? Login!
					</a>
				</div>
            </form>
        </div>

    </div>

    );
}