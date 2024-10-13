import Link from "next/link";


export default function Header() {
    return (
        <div className="header">
            <ul className="header-buttons">
                <Link href={"/"}><li className="menu-item">Home</li></Link>
                <Link href={"/about-us"}><li className="menu-item">About Us</li></Link>
                <Link href={"/contact-us"}><li className="menu-item">Links</li></Link>
                <Link href={"/jobs"}><li className="menu-item">Articles</li></Link>
            </ul>
        </div>
    )
}
