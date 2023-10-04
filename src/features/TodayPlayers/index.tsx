import { FormEvent } from "react";
import { TodayPlayer, UpdatedAttendancePlayer } from "../types";
import PlayerItem from "./PlayerItem";
import { formatDate, getTodayDate } from "../../utils/date";
import Submit from "../../components/Submit";
import Spinner from "../../components/Spinner";
import { updatePlayers } from "../../utils/players";

type TodayPlayersProps = {
  players: TodayPlayer[];
  setPlayers: (players: TodayPlayer[]) => void;
};
const TodayPlayers = ({
  players,
  setPlayers,
}: TodayPlayersProps): JSX.Element => {
  if (!players || players.length === 0) return <Spinner />;

  const today = getTodayDate();
  const handlePlayerChange = ({ id, attendance }: UpdatedAttendancePlayer) => {
    if (!players) return;
    const updateTodayPlayers = players.map((player) => {
      if (player.id === id) return { ...player, attendance };
      return player;
    });
    setPlayers(updateTodayPlayers);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await updatePlayers(players);
  };

  return (
    <>
      <h2>Liste des joueurs présents</h2>
      <h3>Le {formatDate(today)}</h3>
      <form className="vertical-stack form" onSubmit={handleSubmit}>
        {players.map((player) => (
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
    </>
  );
};

export default TodayPlayers;
