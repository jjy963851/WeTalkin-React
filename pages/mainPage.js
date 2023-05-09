import Link from "next/link";


export default function MainPage(){
    return(
        <>  
        
        
        <div className="flex flex-col mx-auto">
       
        <h1 className="flex justify-center items-center pt-5 font-semibold text-4xl pb-10 text-white">
        <span className="text-center">Welcome to WeTalkin by Blossend!</span>
        </h1>

        <img src="/wt_logo.png" className=" mx-auto w-1/2 md:w-3/12 App-logo1" alt="logo" />

        <h1 className="text-white mx-auto font-extrabold text-4xl pt-5">
            WeTalkin.Com
        </h1>

        <h1 className="text-white mx-auto font-extrabold text-2xl py-5">
            Download on the APPStore :
        </h1>

        <Link href="https://apps.apple.com/us/app/wetalkin/id1598817389" className="mx-auto">
        <button className="font-semibold border-1 rounded-md bg-yellow-400 py-3 px-1 hover:ease-in duration-300 hover:bg-green-400 hover:scale-95 hover:lg:scale-105 hover:text-white"> 
        WeTalkin - AppStore
        </button>
        </Link>

        <a
                    className="App-link mx-auto pt-5 text-xl lg:text-2xl hover: ease-in duration-300 hover:scale-105"
                    href="https://blossend.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn more about Blossend
        </a>
        <img src="/logo.svg" className="App-logo" alt="logo" />

        </div>
      
        
        </>
    );
}