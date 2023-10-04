import { useState, useEffect } from "react";
import "./App.css";
import AddForm from "./features/AddForm";
import TodayPlayers from "./features/TodayPlayers";
import { getPlayers } from "./api/firebase-api";
import { TodayPlayer } from "./features/types";

function App() {
  const [players, setPlayers] = useState<TodayPlayer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playersData = await getPlayers();
        setPlayers(playersData as TodayPlayer[]);
      } catch (error) {
        alert(`Fetch players error with ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>U-18 CS Ternes</h1>
      <AddForm />
      <TodayPlayers players={players} setPlayers={setPlayers} />
    </>
  );
}

export default App;
