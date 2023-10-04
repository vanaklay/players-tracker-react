import { updatePlayerAttendance } from "../api/firebase-api";
import { Player } from "../features/types";

export const updatePlayers = async (players: Player[]) => {
  if (players.length === 0) throw new Error("Players is undefined !");
  try {
    return await Promise.all(
      players.map(async (player) => {
        const updatedPlayer = await updatePlayerAttendance(
          player.id,
          player.attendance
        );
        return updatedPlayer;
      })
    );
  } catch (error) {
    alert(`Error Update Players : ${error}`);
  }
};
