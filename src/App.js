import { useState } from 'react';
import './App.css';

function App() {
  const [lang, setLang] = useState(null);

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden relative " style={{ fontFamily: '"Press Start 2P", cursive' }}
    >
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover blur-sm  "
        style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/doctor-stethoscope-hand-hospital-background-gown-94227568.jpg')" }}
      ></div>


      <div className="absolute inset-0  "></div>

      <div className="relative flex flex-col items-center justify-center ">
        <div className="flex flex-row items-center justify-center mb-4 ">
          <img
            alt="Logo"
            src="https://ubiqcure.com/assets/images/logo2.jpg"
            className="h-[35px] lg:h-[45px] app-sidebar-logo-default theme-light-show rounded"
          />
          <span className="ml-4 mt-1 text-blue-800 text-3xl lg:text-3xl font-semibold ">
            UBIQ<span className="text-red-500 font-semibold">CURE</span>
          </span>
        </div>

        {lang === null ? (
          <div className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 text-center flex flex-col justify-center mb-3 bg-white border    rounded-3xl shadow-2xl shadow-purple-500/80 p-4 ">
            <h1 className="text-3xl   text-[#c03c07] font-semibold   shadow-sm">Select your language</h1>
            <div className="flex flex-row justify-around mt-5">
              <button
                className="flex items-center space-x-2 p-2   rounded-md bg-[#F2EB80] hover:bg-gray-100  hover:before:bg-red relative  overflow-hidden border   px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-violet-700 before:transition-all before:duration-500 hover:text-white hover:shadow-violet-700 hover:before:left-0 hover:before:w-full "
                // className="flex items-center space-x-2 p-2   rounded-md bg-[#F2EB80] hover:bg-gray-100 shadow-md"
                onClick={() => setLang('english')}
              >
                
                <span className="text-black z-10  font-medium">English</span>
              </button>

              <button
                className="flex items-center space-x-2 p-2   rounded-md bg-[#66D998] hover:bg-gray-100  hover:before:bg-red relative  overflow-hidden border   px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-700 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-700 hover:before:left-0 hover:before:w-full "
                onClick={() => setLang('hindi')}
                >
                
              
                <span className="text-white-500 z-10 font-medium">हिन्दी</span>
              </button>
            </div>
          </div>
        ) : lang === 'english' ? (
          <div className="text-center">
            <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="40" fontFamily="Brush Script MT, cursive" fontSize="75" fill="url(#grad1)" stroke="url(#grad1)" strokeWidth="0" className="animated-text font-semibold">
                welcome
              </text>
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" style={{ stopColor: "#8a2be2", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#daa520", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#ff4500", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>

          </div>
        ) : (
          <div className="flex flex-col justify-center items-center text-center ">
            <svg width="300" height="50" viewBox="0 0 300 50" xmlns="http://www.w3.org/2000/svg">
              <text x="30%" y="40" fontFamily="Nirmala UI, sans-serif" fontSize="40" fill="url(#grad2)" stroke="url(#grad2)" strokeWidth="1" className="animated-text flex-row justify-center items-center text-center ">
                नमस्ते
              </text>
              <defs>
                <linearGradient id="grad2">
                  <stop offset="0%" style={{ stopColor: "#8a2be2", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#daa520", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#ff4500", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>

          </div>
        )}
      </div>
    </div>
  );
}

export default App;
