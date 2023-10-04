import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { database } from "../service/firebase";
import { getTodayDate } from "../utils/date";

const collectionName = "test-players";

export const getPlayers = async () => {
  const today = getTodayDate();
  const playersCollection = collection(database, collectionName);
  const playersSnapshot = await getDocs(playersCollection);
  const players = playersSnapshot.docs.map((doc) => {
    const { firstName, lastName, daysAttendance } = doc.data();
    return {
      id: doc.id,
      firstName,
      lastName,
      attendance: daysAttendance[today] || false,
    };
  });
  return players;
};

export const addPlayerOnDatabase = async (
  firstName: string,
  lastName: string,
  daysAttendance = {}
) => {
  const playersCollection = collection(database, collectionName);
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

export const updatePlayerAttendance = async (
  id: string,
  attendance: boolean
) => {
  const playerRef = doc(database, collectionName, id);
  try {
    const snapshot = await getDoc(playerRef);

    if (!snapshot.exists())
      throw new Error("This player doesn't exist on database !");

    const today = getTodayDate();
    const { firstName, lastName, daysAttendance } = snapshot.data();
    daysAttendance[today] = attendance;
    await updateDoc(playerRef, {
      firstName,
      lastName,
      daysAttendance,
    });
    return { firstName, lastName, daysAttendance, id: snapshot.id };
  } catch (error) {
    alert("Error on updating player");
  }
};
