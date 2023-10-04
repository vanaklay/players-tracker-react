import { FormEvent, useState, useEffect } from "react";
import { Player, TodayPlayer, UpdatedAttendancePlayer } from "../types";
import PlayerItem from "./PlayerItem";
import { formatDate, getTodayDate } from "../../utils/date";
import Submit from "../../components/Submit";
import Spinner from "../../components/Spinner";
import { updatePlayers } from "../../utils/players";

type TodayPlayersProps = {
  players: TodayPlayer[];
};
const TodayPlayers = ({ players }: TodayPlayersProps): JSX.Element => {
  const [todayPlayers, setTodayPlayers] = useState<Player[] | null>(null);
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

  if (!todayPlayers) return <h2>En chargement ...</h2>;

  const handlePlayerChange = ({ id, attendance }: UpdatedAttendancePlayer) => {
    if (!todayPlayers) return;
    const updateTodayPlayers = todayPlayers.map((player) => {
      if (player.id === id) return { ...player, attendance };
      return player;
    });
    setTodayPlayers(updateTodayPlayers);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const updatedPlayers = updatePlayers(todayPlayers);
    console.log("updatedPlayers", updatedPlayers);
  };

  return (
    <>
      <h2>Liste des joueurs présents</h2>
      <h3>Le {formatDate(today)}</h3>
      {todayPlayers.length === 0 ? (
        <Spinner />
      ) : (
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
          <Submit inputValue="Valider" />
        </form>
      )}
    </>
  );
};

export default TodayPlayers;
