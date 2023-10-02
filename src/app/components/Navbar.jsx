
import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 px-4">
            <div className="flex sticky top-0 left-0 w-full z-90 gap-3">
                <Link href="/" className="font-medium uppercase text-lg rounded-md px-2 dark:hover:bg-slate-700">
                Home
                </Link>
               {/*  <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav"> */}
                        <Link className="font-medium uppercase text-lg rounded-md px-2 dark:hover:bg-slate-700" href="/users/index">
                            Users
                        </Link>
                        <Link className="font-medium uppercase text-lg rounded-md px-2 dark:hover:bg-slate-700" href="/users/create">
                            Users create
                        </Link>
                        <Link className="font-medium uppercase text-lg rounded-md px-2 dark:hover:bg-slate-700" href="/users/show">
                            Users show
                        </Link>
                    {/* </div>
                </div> */}
            </div>
        </nav>
    );
}