import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Player } from "../../types";
import { generateDate, getDate } from "../../../utils/date";

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
    textAlign: "center",
  },
  table: {
    width: "auto",
    borderCollapse: "collapse",
    marginBottom: 10,
  },
  tableRow: {
    marginLeft: "10px",
    flexDirection: "row",
  },
  tableCell: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    width: "80px",
    alignSelf: "center",
  },
  playerTableCell: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    width: "150px",
  },
  present: {
    color: "green",
  },
  notPresent: {
    color: "red",
  },
  center: {
    alignSelf: "center",
  },
});

type AttendanceTableProps = {
  data: Player[];
};
const AttendanceTable = ({ data }: AttendanceTableProps) => {
  const dates = getDate(data);

  return (
    <>
      <View style={styles.header}>
        <Text>Présence des joueurs</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.playerTableCell}>
            <Text>Player</Text>
          </View>
          {dates.map((date) => (
            <View key={date} style={styles.tableCell}>
              <Text style={styles.center}>{generateDate(date)}</Text>
            </View>
          ))}
        </View>
        {data.map((player) => (
          <View key={player.id} style={styles.tableRow}>
            <View style={styles.playerTableCell}>
              <Text>
                {player.firstName} {player.lastName}
              </Text>
            </View>
            {dates.map((date) => (
              <View key={date} style={styles.tableCell}>
                {player.daysAttendance[date] ? (
                  <Text style={[styles.present, styles.center]}>Oui</Text>
                ) : (
                  <Text style={[styles.notPresent, styles.center]}>Non</Text>
                )}
              </View>
            ))}
          </View>
        ))}
      </View>
    </>
  );
};

export default AttendanceTable;
