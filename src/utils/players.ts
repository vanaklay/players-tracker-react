import { updatePlayerAttendance } from "../api/firebase-api";
import { Player } from "../features/types";

export const updatePlayers = (players: Player[]) => {
  if (players.length === 0) throw new Error("Players is undefined !");
  try {
    return players.map((player) => {
      updatePlayerAttendance(player.id, player.attendance);
    });
  } catch (error) {
    alert(`Error Update Players : ${error}`);
  }
};
