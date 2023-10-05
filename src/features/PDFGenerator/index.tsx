import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";
import { useContext } from "react";
import { PlayersContext } from "../../context/players-context";
import Spinner from "../../components/Spinner";

const PDFGenerator = () => {
  const { players } = useContext(PlayersContext);
  if (!players || players.length === 0) return <Spinner />;

  return (
    <>
      <PDFViewer>
        <PDFDocument data={players} />
      </PDFViewer>
      <PDFDownloadLink
        document={<PDFDocument data={players} />}
        fileName="example.pdf"
      >
        {({ loading }) => (loading ? "Chargement" : "Télécharger")}
      </PDFDownloadLink>
    </>
  );
};

export default PDFGenerator;
