import { updatePlayerAttendance } from "../api/firebase-api";
import { Player } from "../features/types";

export const updatePlayers = async (players: Player[]) => {
  if (players.length === 0) throw new Error("Players is undefined !");
  try {
    players.forEach(
      async (player) =>
        await updatePlayerAttendance(player.id, player.attendance)
    );
  } catch (error) {
    alert(`Error Update Players : ${error}`);
  }
};
