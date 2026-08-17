import './Navbar.css'
function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <h1>CrisisLens</h1>
            </div>
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
            </ul>
            <div>
                <button>Login</button>
            </div>

        </nav>
    )
}

export default Navbar