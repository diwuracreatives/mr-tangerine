import "./index.css";
// import { SchoolMatches } from "./datas/popular_words_to_school";
// import { CountriesMatches } from "./datas/school_to_country";
import Header from "./components/Header";

function App() {
  return (
    <div className="App pt-8 pb-16 px-4 bg-gradient min-h-screen flex flex-col justify-between align-center">
      <Header />
      <main className="max-w-4xl flex flex-col items-center justify-between mx-auto py-8 px-4">
        <div className="text-center flex flex-col items-center gap-6">
          <p className="text-main">What is the name of your Uni</p>
          <input
            type="text"
            className="text-center mx-auto border-2 bg-primary1 border-[#096C1E] rounded-full py-6 mt-8 w-full text-black"
            placeholder="Speak to your microphone..."
            disabled
          />
          {/* Transcript */}
          <p className="text-alt">University of Ib...</p>
        </div>
        {/* Footer */}
      </main>
      <footer className="self-center flex gap-16 sm:gap-32 mt-8 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center [&>*]:cursor-pointer [&>*]:gap-2">
        <div>
          <img src="/happy.svg" />
          <p>Good to go!</p>
        </div>
        <div>
          <img src="/sad.svg" />
          <p>There's an issue!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
