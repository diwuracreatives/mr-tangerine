
import Navbar from "../components/layout/Navbar";

export default function Review() {
    return (
        <section className="homepage bg-secondary-1 h-dvh flex flex-col justify-between ">
            <div className="main px-6 lg:px-12 pt-8 lg:pt-10  pb-10 lg:pb-20">
                <Navbar pageNo={3} />

                <div className="content mt-20 lg:mt-4 flex flex-col items-center justify-center">
                    <h1 className="question text-2xl lg:text-6xl text-text-color text-center underline decoration-secondary underline-offset-8">
                        Leave us a review.
                    </h1>

                    <div className="form-container bg-white border-2 border-primary px-4 lg:px-6 py-8 lg:py-8 mt-6 lg:mt-10 rounded-2xl">
                        <form action={"/"}>
                            <div className="flex flex-col lg:flex-row lg:gap-x-6">
                                <label className="text-xl lg:text-2xl text-text-color font-medium tracking-tighter">Your Nickname:</label>
                                <div className="w-[250px] lg:w-[350px] pb-2 bg-input-bg/25 border-b-2 border-secondary/75">
                                    <input type="text" className="appearance-none bg-transparent border-none w-full text-lg text-text-color focus:outline-none"></input>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:gap-x-6 mt-10">
                                <label className="text-xl lg:text-2xl text-text-color font-medium tracking-tighter">How did we do:</label>
                                <div className="ml-2 w-[250px]  lg:w-[350px] bg-input-bg/25 border-b-2 border-secondary/75">
                                    <textarea type="text" className="appearance-none bg-transparent border-none w-full text-lg text-text-color focus:outline-none resize-none"></textarea>
                                </div>
                            </div>

                            <div className="mt-20 flex lg:item-center lg:justify-center">
                                <button className="text-xl lg:text-2xl text-text-color text-center underline decoration-secondary underline-offset-8">SUBMIT YOUR REVIEW</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <div className="footer bg-white w-full h-[150px] h-[200px] relative 
          [clip-path:ellipse(80%_100%_at_bottom)] px-10 flex items-center justify-center">
                <div className="footer-content flex flex-col items-center justify-center">
                    <img src="/icon-head.svg" className="w-[60px] h-[60px]" alt="happy-smiley-icon"></img>
                    <p className="text-tagline text-2xl text-center py-2">Thank You</p>
                </div>
            </div>

        </section>
    );
}