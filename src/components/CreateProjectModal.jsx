import InputElement from "./inputElement.jsx";
export default function CreateProjectModal() {
  return (
    <dialog open className="bg-transparent text-center text-sm">
      <form method="dialog">
        <InputElement id="name" type="text">
          Project name
        </InputElement>
        <InputElement id="description" type="text" multiline>
          Description
        </InputElement>
        <InputElement id="date" type="date">
          Date of creation
        </InputElement>
        <div className="buttons m-3">
          <button>Cancel</button>
          <button
            className="ml-3 p-1 text-stone-50 bg-[#333] rounded-md"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </dialog>
  );
}
