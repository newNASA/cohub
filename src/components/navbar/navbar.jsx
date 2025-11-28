import "./navbar.scss"

const Navbar = () => {
    return (
        <nav>
            <div className="left">
                <div className="logo">
                    <h2>Cohub</h2>
                </div>
            </div>
            <div className="right">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Courses</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Enroll</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;