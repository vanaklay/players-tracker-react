import clsx from "clsx";
import styles from "./index.module.css";
import { Player, UpdatedAttendancePlayer } from "../../types";

type PlayerItemProps = Player & {
  handlePlayerChange: ({ id, attendance }: UpdatedAttendancePlayer) => void;
};
const PlayerItem = ({
  firstName,
  lastName,
  attendance,
  id,
  handlePlayerChange,
}: PlayerItemProps): JSX.Element => {
  const toggleAttendance = () => {
    handlePlayerChange({ id, attendance: !attendance });
  };
  return (
    <div
      className={clsx(styles.root, { [styles.checked]: attendance })}
      onClick={toggleAttendance}
    >
      <div className={styles.section}>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
    </div>
  );
};

export default PlayerItem;
