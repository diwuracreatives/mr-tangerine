import './index.css';
import { SchoolMatches } from "./datas/popular_words_to_school";
import { CountriesMatches } from "./datas/school_to_country";

function App() {

  const res = SchoolMatches.find((school) => school.word === "ui")

  return (
    <div className="App m-4">
      <img src="/logo.svg" alt="logo"></img>
         <p className='mt-6'>School: {CountriesMatches[res.schoolMatchId].school}</p>
         <p className="text-3xl font-bold">Country: {CountriesMatches[res.schoolMatchId].country}</p>
    </div>
  );
}

export default App;
