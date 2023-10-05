import Layer from "../components/Layer";
import Navigation from "../features/Navigation";
import PDFGenerator from "../features/PDFGenerator";

const DownloadPage = () => {
  return (
    <Layer>
      <Navigation option="other" />
      <PDFGenerator />
    </Layer>
  );
};

export default DownloadPage;
