import './Navbar.css'
function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <h1>CisisLens</h1>
            </div>
            <ul>
                <li><a href='#'>Features</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div>
                <button>Login</button>
            </div>

        </nav>
    )
}

export default Navbar