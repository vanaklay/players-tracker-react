import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Player } from "../../types";
import AttendanceTable from "../AttendanceTable";
// import { formatDate, getTodayDate } from "../../../utils/date";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
  },
  subTitle: {
    fontSize: "2rem",
    lineHeight: "1.1",
  },
  title: {
    fontSize: "30px",
  },
  heading: {
    flexDirection: "column",
    textAlign: "center",
    marginBottom: "16px",
    marginTop: "16px",
  },
  section: {
    flexDirection: "column",
  },
});

type PDFDocumentProps = {
  data: Player[];
};
const PDFDocument = ({ data }: PDFDocumentProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.heading]}>
          <Text style={styles.title}>CS Ternes U-18</Text>
          <Text style={styles.subTitle}>Présence des joueurs</Text>
        </View>
        <AttendanceTable data={data} />
      </Page>
    </Document>
  );
};

export default PDFDocument;
