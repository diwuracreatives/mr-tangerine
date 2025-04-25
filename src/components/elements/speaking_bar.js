
export default function SpeakingBar(){

     return(
        
        <div className="mt-6 lg:mt-14 bg-secondary-2 border-2 border-primary rounded-full w-5/6 lg:w-3/5 h-[70px] lg:h-[90px] flex flex-col items-center justify-center">
           <div className="speaking-icon"></div>
           <p className="status-text text-sm text-tagline">speak to your microphone......</p>
        </div>
          
     )
}