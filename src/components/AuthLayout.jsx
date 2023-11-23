import { useClerk } from "@clerk/clerk-react";
import { background } from "../assets";

function SignUpButton() {
    const clerk = useClerk();
  
    return (
      <button
        className="bg-white text-black font-semibold px-10 py-2 rounded-3xl"
        onClick={() => clerk.openSignUp({})}
      >
        Sign up
      </button>
    );
  }
  
  function SignInButton() {
    const clerk = useClerk();
  
    return (
      <button
        className="bg-red-600 text-white font-semibold px-10 py-2 rounded-3xl"
        onClick={() => clerk.openSignIn({})}
      >
        Sign in
      </button>
    );
  }

  const AuthLayout = () => {
    return (
      <section className="w-full h-screen relative text-white">
      <img
        src={background}
        alt=""
        className="w-full h-full absolute object-cover"
      />
      <section className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-5xl font-bold">
            Stay informed, stay connected.
          </h1>
          <p className="max-w-4xl text-3xl font-medium text-center">
            A news application that delivers the latest and most
            relevant news from around the world to your fingertips.
          </p>
        </div>
        <ul className="flex items-center justify-center gap-5">
          <li>
            <SignUpButton />
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </section>
    </section>
    )
  }
  
  export default AuthLayout