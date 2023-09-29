import { useState, useEffect } from "react";
import "./App.css";
import AddForm from "./features/AddForm";
import TodayPlayers from "./features/TodayPlayers";
import { addPlayerOnDatabase, getPlayers } from "./api/firebase-api";
import { TodayPlayer } from "./features/types";

function App() {
  const [players, setPlayers] = useState<TodayPlayer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playersData = await getPlayers();
        setPlayers(playersData as TodayPlayer[]);
      } catch (error) {
        console.log("Fetch players error with :", error);
      }
    };
    fetchData();
  }, []);

  const addPlayer = async (firstName: string, lastName: string) => {
    await addPlayerOnDatabase(firstName, lastName);
  };
  return (
    <>
      <h1>U-18 CS Ternes</h1>
      <AddForm addPlayer={addPlayer} />
      <TodayPlayers players={players} />
    </>
  );
}

export default App;
