import { Label, Textarea } from "flowbite-react";
import { ModeContext } from "../../context/ModeContext";
import { useContext } from "react";

function TextAreaComponent({label}) {

    const {mode} = useContext(ModeContext)
  return (
    <div className="max-w-md w-72">
      <div className="mb-2 flex flex-col items-center">
        <Label className={`${mode === "light" ? "text-gray-900" : "text-white"} text-xl`} htmlFor="comment" value={label} />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>
  );
}

export default TextAreaComponent