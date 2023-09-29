import { collection, getDocs } from "firebase/firestore";
import { database } from "../service/firebase";

export const getPlayers = async () => {
  const playersCollection = collection(database, "players");
  const playersSnapshot = await getDocs(playersCollection);
  const players = playersSnapshot.docs.map((doc) => doc.data());
  return players;
};
