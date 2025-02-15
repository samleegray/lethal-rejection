import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
            Lethal Rejection
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/events">Events</Link>
            </li>
            </ul>
        </div>
        </div>
    );
}