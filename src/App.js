// Using react hooks to create functional components:
// 1) useState is used within functional components.
// 2) useEffect is used to trigger when a component loads to make a HTTP req to get data (i.e: name, img, etc.)
import React, { useState, useEffect } from "react";
import axios from "axios";
import SiteLogo from "./components/UI/SiteLogo";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/UI/Search";
import ShowInfo from "./components/UI/ShowInfo";
import "./App.css";

const App = () => {
  // UseState [Characters]: Our Breaking Bad characters from API. setChars is used to manipulate state.
  const [characters, setCharacters] = useState([]);

  const [charDeath, setCharDeath] = useState([]);

  // Represents/Checks whether our API data is loading & has loaded.
  const [isLoading, setIsLoading] = useState(true);

  // Represents whatever our current 'Search' query is (aka whatever is typed in the 'Search' form).
  const [query, setQuery] = useState("");

  // Make a request using axios:
  useEffect(() => {
    const fetchData = async () => {

      // Data that we will receive from our axios request: B.B Char Info + B.B Char Death Info
      const charInfo = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      const charDeathInfo = await axios("https://www.breakingbadapi.com/api/deaths");

      // Attempting to utilize multiple API request:
      axios.all([charInfo, charDeathInfo]).then(
        axios.spread((...allData) => {
          const a = allData[0];
          const b = allData[1];
          console.log(a.data);
          console.log(b.data);
          setCharacters(a.data);
          setCharDeath(b.data);
          setIsLoading(false);
        })
      );
    };
    // Retrieve API data:
    fetchData();

    // '[query]' is a dependency that constantly updates our 'Search' query w/ the help of getQuery() + props
  }, [query]);

  return (
    <div className="app">
      <SiteLogo />
      <Search getQuery={(q) => setQuery(q)} />
      <ShowInfo />
      <CharacterGrid isLoading={isLoading} characters={characters} charDeath={charDeath} />
    </div>
  );
};

export default App;
