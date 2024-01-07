import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
function AboutUs() {
  return (
    <div className='bg-[#0f051d] mt-2 flex items-center justify-center flex-col'>
    <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 ">
    <h2 class="mb-1 text-6xl  mt-10 font-extrabold leading-tight text-white">Services</h2>
    <p class="mb-12 text-lg text-white">Here is a few of the awesome Services we provide.</p>
    <div class="w-full">
        <div class="flex flex-col w-full mb-10 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Real-time Price Tracking:</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Display real-time cryptocurrency prices. <br />
Provide historical price charts and trends.</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Currency Conversion:

</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Support multiple fiat currencies for price conversion. <br />
Allow users to switch between different currency options.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full mb-5 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Support and Contact:</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Provide a way for users to contact support. <br />
Include a FAQ section or documentation for common queries.</p>
                    </div>
                </div>
            </div>
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Responsive Design:</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Ensure the app is responsive and works well on various devices (desktop, tablet, mobile).</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Charts and Graphs:</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Display interactive charts and graphs for historical price data. <br />
Include technical analysis indicators for advanced users.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
<footer class="bg-[#0f051d] text-white py-8">
      <div class="container mx-auto">
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 lg:mb-0">
            <h4 class="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li class="mb-2 md:mb-3 lg:mb-4"><router-link to="/">Home</router-link></li>
              <li class="mb-2 md:mb-3 lg:mb-4"><router-link to="/about">About Us</router-link></li>
              <li class="mb-2 md:mb-3 lg:mb-4"><router-link to="/services">Services</router-link></li>
              <li class="mb-2 md:mb-3 lg:mb-4"><router-link to="/contact">Contact Us</router-link></li>
            </ul>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 lg:mb-0">
            <h4 class="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-xl"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" class="text-xl"><FontAwesomeIcon icon={faFacebookSquare} /></a>
              <a href="#" class="text-xl"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <h4 class="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Contact Info</h4>
            <p class="mb-2 md:mb-3 lg:mb-4">Email: info@cryptovue.com</p>
            <p class="mb-2 md:mb-3 lg:mb-4">Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        <hr class="my-6 border-gray-700"></hr>
        <div class="text-center text-sm">
          <p class="mb-2 md:mb-3 lg:mb-4">&copy; 2024 CryptoVue. All rights reserved.</p>
          <p class="mb-2 md:mb-3 lg:mb-4">Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
    
    </div>
    
  )
}

export default AboutUs
