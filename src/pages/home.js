import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import SpeakingBar from "../components/elements/speaking_bar";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="homepage bg-secondary-1 h-dvh flex flex-col justify-between ">
      <div className="main px-6 lg:px-12 pt-8 lg:pt-10  pb-10 lg:pb-20">
        <Navbar pageNo={1} />

        <div className="content mt-20 lg:mt-16 flex flex-col items-center justify-center">
          <h1 className="question text-2xl  lg:text-5xl text-text-color text-center">
            What is the name of your <span className="underline decoration-secondary underline-offset-8">Uni</span>?
          </h1>

          <SpeakingBar />

          <h1 className="result text-2xl lg:text-4xl text-text-color-light mt-6 lg:mt-8">university of ibadan</h1>
        </div>
      </div>

      <div className="footer bg-white w-full h-[150px] h-[200px] relative 
          [clip-path:ellipse(80%_100%_at_bottom)] px-10 flex items-center justify-center">
        <div className="footer-content flex gap-x-20">
          <Link to={"/result"} className="happy-btn flex flex-col items-center">
            <img src="/happy.svg" className="w-[50px] h-[50px]" alt="happy-smiley-icon"></img>
            <p className="icon-tag text-tagline text-lg text-center mt-1">good to go!</p>
          </Link>
          
          <Popover className="relative">
            <PopoverButton className="happy-btn flex flex-col items-center">
              <img src="/sad.svg" className="w-[50px] h-[50px]" alt="sad-smiley-icon"></img>
              <p className="icon-tag text-tagline text-lg text-center mt-1">There's an issue!</p>
            </PopoverButton>

            <PopoverPanel  anchor="bottom" className="ml-14 w-40 bg-white rounded-3xl border border-text-color py-4 px-3">
              <div className="flex flex-col items-center justify-center text-center">
                <img src="/info.svg" className="w-[30px] h-auto" alt="info icon"></img>
               <p className="text-base text-text-color-light font-medium pt-3 leading-4">Oops! Please try again.!</p>
              </div>
            </PopoverPanel>
          </Popover>

        </div>
      </div>

    </section>
  );
}