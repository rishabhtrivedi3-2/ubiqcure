import { useState } from 'react';
import './App.css';

function App() {
  const [lang, setLang] = useState(null);

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden relative"
    >
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover filter blur-sm"
        style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/doctor-stethoscope-hand-hospital-background-gown-94227568.jpg')" }}
      ></div>


      <div className="absolute inset-0 bg-slate-700 opacity-10"></div>

      <div className="relative flex flex-col items-center justify-center z-20">
        <div className="flex flex-row items-center justify-center mb-4">
          <img
            alt="Logo"
            src="https://ubiqcure.com/assets/images/logo2.jpg"
            className="h-[35px] lg:h-[45px] app-sidebar-logo-default theme-light-show rounded"
          />
          <span className="ml-4 mt-1 text-blue-800 text-lg lg:text-xl font-semibold">
            UBIQ<span className="text-red-500 font-semibold">CURE</span>
          </span>
        </div>

        {lang === null ? (
          <div className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 text-center backdrop-blur-sm flex flex-col justify-center mb-3 bg-white bg-opacity-20 shadow-lg border border-gray-300 rounded-lg p-4">
            <h1 className="text-2xl text-[#810de6] font-semibold font-sans shadow-sm">Select your language</h1>
            <div className="flex flex-row justify-around mt-4">
              <button
                className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 shadow-md"
                onClick={() => setLang('english')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-600"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span className="text-blue-600 font-medium">English</span>
              </button>

              <button
                className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 shadow-md"
                onClick={() => setLang('hindi')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-600"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span className="text-blue-600 font-medium">हिन्दी</span>
              </button>
            </div>
          </div>
        ) : lang === 'english' ? (
          <div className="text-center">
            <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="40" fontFamily="Brush Script MT, cursive" fontSize="75" fill="url(#grad1)" stroke="url(#grad1)" strokeWidth="0" className="animated-text">
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

            <p className="text-xl text-white  mt-4">You have selected English.</p>
          </div>
        ) : (
          <div className="text-center">
            <svg width="300" height="50" viewBox="0 0 300 50" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="40" fontFamily="Nirmala UI, sans-serif" fontSize="40" fill="url(#grad2)" stroke="url(#grad2)" strokeWidth="1" className="animated-text">
                आपका स्वागत है
              </text>
              <defs>
                <linearGradient id="grad2">
                  <stop offset="0%" style={{ stopColor: "#8a2be2", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#daa520", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#ff4500", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-xl text-white mt-4">आपने हिन्दी का चयन किया है।</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
