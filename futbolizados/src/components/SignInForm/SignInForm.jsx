import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { ModeContext } from "../../context/ModeContext";
import { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignInForm() {
  const { mode } = useContext(ModeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  const isValidPassword = passwordRegex.test(password);

  const handleEmail = (e) => {
    let emailInput = e.target.value;
    setEmail(emailInput);
  };

  const handlePassword = (e) => {
    let password = e.target.value;
    setPassword(password);
    if (password === repeatPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const handleRepeatPassword = (e) => {
    let repeatedPassword = e.target.value;
    setRepeatPassword(repeatedPassword);
    if (repeatedPassword === password) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const handleCheckbox = () => {
    setCheckBox(!checkBox);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    
    const dataAEnviar = {email: email, password: password};
    console.log(dataAEnviar)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('Usuario registrado correctamente:', user.uid);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error durante el registro:', errorCode, errorMessage);
        // ..
      });
  };

  return (
    <form onSubmit={onSubmit}
      className={`flex max-w-md flex-col gap-10 px-10  ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div>
        <div className="mb-2 block">
          <Label
            className={`font-MontserratBold text-3xl p-2  ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
            htmlFor="email2"
            value="Your email"
          />
        </div>
        <TextInput
          onChange={handleEmail}
          id="email2"
          type="email"
          placeholder="name@flowbite.com"
          required
          shadow
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            className={`font-MontserratBold text-3xl p-2  ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
            htmlFor="password2"
            value="Your password"
          />
        </div>
        <TextInput
          color={!isValidPassword && password.length > 0 && "failure"}
          helperText={
            <>
              <span
                className={`${
                  !isValidPassword && password.length > 0
                    ? "font-medium text-center"
                    : "hidden"
                }`}
              >
                La contraseña debe contar de una mayuscula, un numer y 8 (ocho)
                caracteres
              </span>{" "}
            </>
          }
          onChange={handlePassword}
          id="password2"
          type="password"
          required
          shadow
          autoComplete="off"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            className={`font-MontserratBold text-3xl p-2  ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
            htmlFor="repeat-password"
            value="Repeat password"
          />
        </div>
        <TextInput
          onChange={handleRepeatPassword}
          color={!passwordsMatch && repeatPassword.length > 0 && "failure"}
          id="repeat-password"
          type="password"
          required
          shadow
          autoComplete="off"
          helperText={
            <>
              <span
                className={`${
                  !passwordsMatch && repeatPassword.length > 0
                    ? "font-medium text-center"
                    : "hidden"
                }`}
              >
                Las contraseñas no coinciden
              </span>{" "}
            </>
          }
        />
      </div>
      <div className="flex items-center text-center gap-2">
        <Checkbox id="agree" onChange={handleCheckbox} />
        <Label
          className={`font-Yakarta p-2 ${
            mode === "light" ? "text-gray-900" : "text-gray-200"
          }`}
          htmlFor="agree"
        >
          I agree with the&nbsp;
          <Link
            to="/terms"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button  type="submit">
        Register new account
      </Button>
    </form>
  );
}

export default SignInForm;
