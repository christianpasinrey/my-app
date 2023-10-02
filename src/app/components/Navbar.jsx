
import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid gap-3">
                <Link href="/" className="navbar-brand">
                Home
                </Link>
               {/*  <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav"> */}
                        <Link className="nav-link" href="/users/index">
                            Users
                        </Link>
                        <Link className="nav-link" href="/users/create">
                            Users create
                        </Link>
                        <Link className="nav-link" href="/users/show">
                            Users show
                        </Link>
                    {/* </div>
                </div> */}
            </div>
        </nav>
    );
}