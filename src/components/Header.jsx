import { UserButton } from "@clerk/clerk-react"


const Header = () => {
  return (
    <div>
         <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Header