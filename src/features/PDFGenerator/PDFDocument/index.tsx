import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Player } from "../../types";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    flexGrow: 1,
  },
});

type PDFDocumentProps = {
  data: Player[];
};
const PDFDocument = ({ data }: PDFDocumentProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {data.map((player) => {
            return <Text key={player.id}>{player.firstName}</Text>;
          })}
        </View>
        <View style={styles.section}>
          <Text>We're inside a PDF!</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
