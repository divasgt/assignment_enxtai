import Link from "next/link";

export default function Header() {
  return (
  <div>
    <header className="fixed z-100 top-8.5 left-17.5 right-17.5 font-lemon flex items-center justify-between">
      <Link href="/" className="flex flex-col justify-center items-center hover:text-[#999999] active:text-[#E7E7E7]">
        <span className="font-bold text-2xl tracking-wider -mb-0.5">DHRUVA</span>
        <span className="text-xs font-light tracking-widest">ASTRONOMY CLUB</span>
      </Link>

      <nav>
        <ul className="flex gap-10 font-medium tracking-wider text-xl">
          <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300" href="/" >HOME</Link></li>
          <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300" href="/events" >EVENTS</Link></li>
          <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300" href="/podcast" >PODCAST</Link></li>
          <li><Link className="hover:text-[#999999] active:text-[#E7E7E7] transition-all ease-linear duration-300" href="/about" >ABOUT</Link></li>
        </ul>
      </nav>
    </header>
  </div>
  )
}