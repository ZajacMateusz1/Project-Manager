import { useState, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import InputElement from "./inputElement.jsx";
export default function CreateProjectModal({ ref, handleProjectAdd }) {
  const [fieldsEmpty, setFieldsEmpty] = useState(false);
  const dialog = useRef();
  const form = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  function clearForm() {
    form.current.reset();
    setFieldsEmpty(false);
    dialog.current.close();
  }
  function handleSubmit(e) {
    e.preventDefault();
    const name = form.current.elements.name.value;
    const description = form.current.elements.description.value;
    const date = form.current.elements.date.value;
    if (!name || !description || !date) {
      setFieldsEmpty(true);
      return;
    }
    setFieldsEmpty(false);
    handleProjectAdd({
      id: Date.now(),
      name: name,
      description: description,
      date: date,
      tasks: [],
    });
    clearForm();
  }
  return createPortal(
    <dialog
      ref={dialog}
      className="mt-3 lg:mt-6 p-2 lg:p-4 border border-[#333] rounded-md bg-stone-50 text-center text-xs lg:text-lg"
    >
      <form ref={form} onSubmit={handleSubmit}>
        <InputElement id="name" type="text">
          Project name
        </InputElement>
        <InputElement id="description" type="text" multiline>
          Description
        </InputElement>
        <InputElement id="date" type="date">
          Date of creation
        </InputElement>
        <p
          className={`${
            fieldsEmpty ? "text-red-700" : "text-transparent"
          } mt-2 font-semibold select-none`}
        >
          Fields cannot be empty!
        </p>
        <div className="buttons m-3">
          <button type="button" onClick={clearForm}>
            Cancel
          </button>
          <button
            className="ml-3 px-2 py-1 text-stone-50 bg-[#333] rounded-md"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
