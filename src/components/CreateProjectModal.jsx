import { createPortal } from "react-dom";
import InputElement from "./inputElement.jsx";
export default function CreateProjectModal() {
  return createPortal(
    <dialog className="mt-3 lg:mt-6 p-2 lg:p-4 border border-[#333] rounded-md bg-stone-50 text-center text-xs lg:text-lg">
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
