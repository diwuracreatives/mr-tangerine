import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";

export default function Result() {
    return (
        <section className="homepage bg-secondary-1 h-dvh flex flex-col justify-between ">
            <div className="main px-6 lg:px-12 pt-8 lg:pt-6  pb-10 lg:pb-14">
                <Navbar pageNo={2} />

                <div className="content mt-16 lg:mt-0 flex flex-col items-center justify-center">
                    <div className="meme-container bg-white border-2 border-primary px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl">
                        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnRmancxNHJ3dHE2NmZubzE1cXk0cnlndDZ1aWg1dGl0NmQ4bTY5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BDQmMy3ZM8sgRNFkhe/giphy.gif" alt="giphy-img" className="w-[250px] lg:w-[300px] h-auto"></img>
                    </div>
                    <p className="mt-10 lg:mt-6 text-text-color text-xl lg:text-3xl">Your School country match is_</p>

                    <div className="result flex gap-x-4 lg:gap-x-6 mt-4 lg:mt-8 items-center">
                        <h1 className="country-emoji text-3xl lg:text-6xl text-center">🏴󠁧󠁢󠁥󠁮󠁧󠁿</h1>
                        <h1 className="question text-3xl lg:text-6xl  font-semibold text-text-color text-center underline decoration-secondary underline-offset-[11px] lg:underline-offset-[18px]">
                            England
                        </h1>
                    </div>
                </div>
            </div>

            <div className="footer bg-white w-full h-[150px] h-[200px] relative 
          [clip-path:ellipse(80%_100%_at_bottom)] px-10 flex items-center justify-center">
                <div className="footer-content flex gap-x-20">
                    <Link to={"/"} className="happy-btn flex flex-col items-center">
                        <img src="/happy.svg" className="w-[50px] h-[50px]" alt="happy-smiley-icon"></img>
                        <p className="icon-tag text-tagline text-lg text-center mt-1">Play again</p>
                    </Link>

                    <Popover className="relative">
                        <PopoverButton className="happy-btn flex flex-col items-center">
                            <img src="/share.svg" className="w-[50px] h-[50px]" alt="share icon"></img>
                            <p className="icon-tag text-tagline text-lg text-center mt-1">Share</p>
                        </PopoverButton>

                        <PopoverPanel anchor="bottom" className="ml-14 w-40 bg-white rounded-3xl border border-text-color px-3 py-4">
                            <div className="flex flex-col items-start text-center gap-y-3 ml-2">

                                <Link to={"/"}>
                                    <div className="flex gap-x-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#F28500]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                        <p className="text-lg text-text-color-light">X/Twitter</p></div>
                                </Link>

                                <Link to={"/"}>
                                    <div className="flex gap-x-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                        <p className="text-lg text-text-color-light">Whatsapp</p></div>
                                </Link>

                            </div>
                        </PopoverPanel>
                    </Popover>
                </div>
            </div>

        </section>
    );
}