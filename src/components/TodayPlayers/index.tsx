import { FormEvent, useState, useEffect } from "react";
import { Player, UpdatedAttendancePlayer } from "../types";
import PlayerItem from "./PlayerItem";
import { getTodayDate } from "../../utils/date";

type TodayPlayersProps = {
  players: Player[];
};
const TodayPlayers = ({ players }: TodayPlayersProps): JSX.Element => {
  const [todayPlayers, setTodayPlayers] = useState<Player[] | null>(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  const today = getTodayDate();
  useEffect(() => {
    const todayPlayer = players.map((player) => {
      return {
        id: player.id,
        firstName: player.firstName,
        lastName: player.lastName,
        attendance:
          (player.daysAttendance && player.daysAttendance[today]) || false,
      };
    });
    setTodayPlayers(todayPlayer);
  }, [players, today]);

  const handlePlayerChange = ({ id, attendance }: UpdatedAttendancePlayer) => {
    console.log(id, attendance);
    if (!todayPlayers) return;
    const updateTodayPlayers = todayPlayers.map((player) => {
      if (player.id === id) return { ...player, attendance };
      return player;
    });
    setTodayPlayers(updateTodayPlayers);
  };

  return (
    <>
      <h2>Liste des joueurs présents le </h2>
      <form className="vertical-stack form" onSubmit={handleSubmit}>
        {todayPlayers &&
          todayPlayers.map((player) => (
            <PlayerItem
              key={`${player.id}-${player.lastName}`}
              lastName={player.lastName}
              firstName={player.firstName}
              attendance={player.attendance}
              handlePlayerChange={handlePlayerChange}
              id={player.id}
            />
          ))}
      </form>
    </>
  );
};

export default TodayPlayers;
