import { FormEvent, useContext, useState } from "react";
import PlayerItem from "./PlayerItem";
import { formatDate, getTodayDate } from "../../utils/date";
import Submit from "../../components/Submit";
import Spinner from "../../components/Spinner";
import { updatePlayers } from "../../utils/players";
import SuccessToast from "../../components/SuccessToast";
import { PlayersContext } from "../../context/players-context";
import { UpdatedAttendancePlayer } from "../types";

const TodayPlayers = (): JSX.Element => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { todayPlayers, setTodayPlayers } = useContext(PlayersContext);
  if (!todayPlayers || todayPlayers.length === 0) return <Spinner />;

  const today = getTodayDate();
  const handlePlayerChange = ({ id, attendance }: UpdatedAttendancePlayer) => {
    if (!todayPlayers) return;
    const updateTodayPlayers = todayPlayers.map((player) => {
      if (player.id === id) return { ...player, attendance };
      return player;
    });
    setTodayPlayers(updateTodayPlayers);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const updatedPlayers = await updatePlayers(todayPlayers);
    if (updatedPlayers) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <>
      <h2>Liste des joueurs présents</h2>
      <h3>Le {formatDate(today)}</h3>
      <form className="vertical-stack form" onSubmit={handleSubmit}>
        {todayPlayers.map((player) => (
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
      {showSuccess && <SuccessToast message="Sauvegarder" />}
    </>
  );
};

export default TodayPlayers;
