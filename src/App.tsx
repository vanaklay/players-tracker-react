import "./App.css";
import AddForm from "./features/AddForm";
import PDFGenerator from "./features/PDFGenerator";
import TodayPlayers from "./features/TodayPlayers";

function App() {
  return (
    <>
      <h1>U-18 CS Ternes</h1>
      <AddForm />
      <TodayPlayers />
      <PDFGenerator />
    </>
  );
}

export default App;
