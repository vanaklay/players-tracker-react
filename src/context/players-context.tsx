import { ReactNode, createContext, useEffect, useState } from "react";
import { getPlayers } from "../api/firebase-api";
import { Player, TodayPlayer } from "../features/types";
import { getTodayDate } from "../utils/date";

type Props = {
  children?: ReactNode;
};

export const PlayersContext = createContext<{
  todayPlayers: TodayPlayer[];
  setTodayPlayers: React.Dispatch<React.SetStateAction<TodayPlayer[]>>;
  players: Player[];
}>({
  todayPlayers: [],
  setTodayPlayers: () => {},
  players: [],
});

export const PlayersProvider = ({ children }: Props) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [todayPlayers, setTodayPlayers] = useState<TodayPlayer[]>([]);

  useEffect(() => {
    const getPlayersMap = async () => {
      const today = getTodayDate();
      try {
        const playersData = await getPlayers();
        setPlayers(playersData as Player[]);

        const todayPlayers = playersData.map((player) => {
          return {
            id: player.id,
            firstName: player.firstName,
            lastName: player.lastName,
            attendance: player.daysAttendance[today] || false,
          };
        });
        setTodayPlayers(todayPlayers as TodayPlayer[]);
      } catch (error) {
        alert(`Fetch players error with ${error}`);
      }
    };

    return () => {
      getPlayersMap();
    };
  }, []);

  const value = {
    todayPlayers,
    setTodayPlayers,
    players,
  };

  return (
    <PlayersContext.Provider value={value}>{children}</PlayersContext.Provider>
  );
};
