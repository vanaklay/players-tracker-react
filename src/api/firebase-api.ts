import { addDoc, collection, getDocs } from "firebase/firestore";
import { database } from "../service/firebase";

export const getPlayers = async () => {
  const playersCollection = collection(database, "test-players");
  const playersSnapshot = await getDocs(playersCollection);
  const players = playersSnapshot.docs.map((doc) => doc.data());
  return players;
};

export const addPlayerOnDatabase = async (
  firstName: string,
  lastName: string,
  daysAttendance = {}
) => {
  const playersCollection = collection(database, "test-players");
  try {
    const docRef = await addDoc(playersCollection, {
      firstName,
      lastName,
      daysAttendance,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
