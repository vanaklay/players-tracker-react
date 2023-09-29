import { FormEvent } from "react";

type AddFormProps = {
  addPlayer: (firstName: string, lastName: string) => void;
};
const AddForm = ({ addPlayer }: AddFormProps): JSX.Element => {
  const handleAddForm = (event: FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    const firstNameInput = form.querySelector("input[name='firstName']");
    const lastNameInput = form.querySelector("input[name='lastName']");

    if (
      firstNameInput instanceof HTMLInputElement &&
      lastNameInput instanceof HTMLInputElement
    ) {
      const firstName = firstNameInput.value;
      const lastName = lastNameInput.value;

      addPlayer(firstName, lastName);

      firstNameInput.value = "";
      lastNameInput.value = "";
    }
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
      <input type="submit" value="Ajouter" />
    </form>
  );
};

export default AddForm;
