import Layer from "../components/Layer";
import AddForm from "../features/AddForm";
import Navigation from "../features/Navigation";

const AddPlayerPage = () => {
  return (
    <Layer>
      <Navigation option="other" />
      <AddForm />
    </Layer>
  );
};

export default AddPlayerPage;
