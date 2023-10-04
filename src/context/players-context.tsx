import { ReactNode, createContext, useEffect, useState } from "react";
import { getPlayers } from "../api/firebase-api";
import { TodayPlayer } from "../features/types";

type Props = {
  children?: ReactNode;
};

export const PlayersContext = createContext<{
  players: TodayPlayer[];
  setPlayers: React.Dispatch<React.SetStateAction<TodayPlayer[]>>;
}>({
  players: [],
  setPlayers: () => {},
});

export const PlayersProvider = ({ children }: Props) => {
  const [players, setPlayers] = useState<TodayPlayer[]>([]);

  useEffect(() => {
    const getPlayersMap = async () => {
      try {
        const playersData = await getPlayers();
        setPlayers(playersData as TodayPlayer[]);
      } catch (error) {
        alert(`Fetch players error with ${error}`);
      }
    };

    return () => {
      getPlayersMap();
    };
  }, []);

  const value = {
    players,
    setPlayers,
  };

  return (
    <PlayersContext.Provider value={value}>{children}</PlayersContext.Provider>
  );
};
