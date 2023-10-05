import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";
import Spinner from "../../components/Spinner";
import styles from "./index.module.css";

const PDFGenerator = () => {
  const data = [
    {
      firstName: "Jean",
      lastName: "Pierre",
      id: "1",
      daysAttendance: {
        "2023-10-01": true,
        "2023-10-02": true,
        "2023-10-03": false,
      },
    },
    {
      firstName: "Jean",
      lastName: "Michel",
      id: "2",
      daysAttendance: {
        "2023-10-01": true,
        "2023-10-02": false,
        "2023-10-03": true,
      },
    },
  ];
  if (!data || data.length === 0) return <Spinner />;

  return (
    <>
      <div className={styles.section}>
        <PDFViewer>
          <PDFDocument data={data} />
        </PDFViewer>
        <PDFDownloadLink
          document={<PDFDocument data={data} />}
          fileName="example.pdf"
        >
          {({ loading }) => (
            <button className={styles.downloadButton}>
              {loading ? "Chargement" : "Télécharger"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default PDFGenerator;
