// import { useState, useEffect } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import TodayPlayers from "./components/TodayPlayers";
// import { getPlayers } from "./api/firebase-api";
// import { DocumentData } from "firebase/firestore";

function App() {
  // const [players, setPlayers] = useState<DocumentData[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const playersData = await getPlayers();
  //       setPlayers(playersData);
  //     } catch (error) {
  //       console.log("Fetch players error with :", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const players = [
    {
      id: 1,
      firstName: "Nicolas",
      lastName: "Anelka",
      daysAttendance: { "2023-09-26": true },
    },
    {
      id: 2,
      firstName: "Thierry",
      lastName: "Henry",
      daysAttendance: { "2023-09-26": true },
    },
    {
      id: 3,
      firstName: "Zinedine",
      lastName: "Zidane",
      daysAttendance: { "2023-09-26": true },
    },
  ];
  const addPlayer = (firstName: string, lastName: string) => {
    console.log(firstName, lastName);
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
