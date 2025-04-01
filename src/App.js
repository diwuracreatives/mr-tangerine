import "./index.css";
// import { SchoolMatches } from "./datas/popular_words_to_school";
// import { CountriesMatches } from "./datas/school_to_country";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
