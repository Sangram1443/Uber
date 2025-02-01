import React from "react";

const Home = () => {
  return (
    <>
      <div className="justify-between flex flex-col h-screen">
        <div className="bg-cover bg-top bg-[url(https://imgs.search.brave.com/y5j7nSocPX47QnP6CTa0mocRWhw9rWE3COvm2q9g5vc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by90cmFmZmljLWxp/Z2h0LWdyZWVuLXJv/YWQtc2lnbmFsLXll/bGxvdy10cmFmZmlj/bGlnaHQtcm9hZHdh/eS1jbG91ZC1iYWNr/Z3JvdW5kLWNvbG9y/ZnVsLWdvLXdhcm5p/bmctc2lnbl84MzE5/NC0xMjcyLmpwZz9z/ZW10PWFpc19oeWJy/aWQ)] h-screen">
          <img
            className="w-1/3 ml-5"
            src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
            alt=""
          />
        </div>
        <div className="bg-white px-5 py-2 flex items-center flex-col">
          <h1 className="font-bold text-2xl pb-2 float-left">Getting started</h1>
          <div className="bg-black text-white w-full border rounded-lg py-2 flex  justify-between">
            <h3 className="pl-[8.0rem] pb-1 font-bold text-xl">Continue</h3>
            <svg
              className="pr-2 mt-1 w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
