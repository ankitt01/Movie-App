import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="flex items-center justify-around bg-secondary-color text-white px-4 py-4">
        <div>
            <Link to="/" className="text-3xl font-bold text-font-primary">MOVIE APP</Link>
        </div>
        <div>
            <img src="/images/user.png" alt="user" className="w-12" />
        </div>
    </div>
  )
}

export default Header