import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { ModeContext } from "../../context/ModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function LoginForm() {
  const { mode } = useContext(ModeContext);
  return (
    <form
      className={`flex max-w-md flex-col gap-10 px-10  ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div>
        <div className="mb-2 block text-center">
          <Label
            htmlFor="email1"
            value="Your email"
            className={`font-MontserratBold text-3xl p-2  ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
          />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block text-center">
          <Label
            htmlFor="password1"
            value="Your password"
            className={`font-MontserratBold text-3xl p-2 ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
          />
        </div>
        <TextInput
          id="password1"
          type="password"
          required
          placeholder="Set your Password"
        />
        <div className="text-center mt-4">
          <span className={`font-Yakarta   p-2 ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}>You are not registered? <Link to="/signin"><span className="text-sky-500">Sign In</span></Link></span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label
          className={`font-MontserratBold  p-2 ${
            mode === "light" ? "text-gray-900" : "text-gray-200"
          }`}
          htmlFor="remember"
        >
          Remember me
        </Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default LoginForm;
