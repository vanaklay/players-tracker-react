import { FormEvent } from "react";
import Submit from "../../components/Submit";
import { addPlayerOnDatabase } from "../../api/firebase-api";
import { useNavigate } from "react-router-dom";

const AddForm = (): JSX.Element => {
  const navigate = useNavigate();
  const addPlayer = async (firstName: string, lastName: string) => {
    await addPlayerOnDatabase(firstName, lastName);
  };

  const handleAddForm = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    const firstNameInput = form.querySelector("input[name='firstName']");
    const lastNameInput = form.querySelector("input[name='lastName']");

    if (
      !(firstNameInput instanceof HTMLInputElement) ||
      !(lastNameInput instanceof HTMLInputElement) ||
      firstNameInput.value.trim().length === 0 ||
      lastNameInput.value.trim().length === 0
    ) {
      alert("Invalid inputs !");
      return;
    }

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    await addPlayer(firstName, lastName);

    firstNameInput.value = "";
    lastNameInput.value = "";
    navigate("/");
  };

  return (
    <form className="vertical-stack form" onSubmit={handleAddForm}>
      <label>
        Nom :
        <input type="text" name="lastName" />
      </label>
      <label>
        Prénom :
        <input type="text" name="firstName" />
      </label>
      <Submit inputValue="Ajouter" />
    </form>
  );
};

export default AddForm;
