import { useContext, useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";
import Spinner from "../../components/Spinner";
import styles from "./index.module.css";
import MonthSelector from "./MonthSelector";
import { PlayersContext } from "../../context/players-context";

const PDFGenerator = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const { players } = useContext(PlayersContext);
  if (!players || players.length === 0) return <Spinner />;

  return (
    <>
      <MonthSelector
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      {selectedMonth && (
        <div className={styles.section}>
          <PDFViewer>
            <PDFDocument data={players} month={selectedMonth} />
          </PDFViewer>
          <PDFDownloadLink
            document={<PDFDocument data={players} month={selectedMonth} />}
            fileName="example.pdf"
          >
            {({ loading }) => (
              <button className={styles.downloadButton}>
                {loading ? "Chargement" : "Télécharger"}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      )}
    </>
  );
};

export default PDFGenerator;
