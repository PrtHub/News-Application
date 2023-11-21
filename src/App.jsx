import { SignedIn, SignedOut } from "@clerk/clerk-react"



const App = () => {
  return (
    <>
      <SignedOut>
        Sign in hero section
      </SignedOut>
      <SignedIn>
        <h2>Hero</h2>
        <h2>Products</h2>
        <h2>Footer</h2>
      </SignedIn>
    </>
  )
}

export default App