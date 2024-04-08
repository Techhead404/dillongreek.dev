import Link from 'next/link';

export default function NAV() {
  return (
    <nav className="flex justify-between w-screen">
      <h1 className="text-xl font-bold pl-10">Dillon Greek</h1>
      <ul className="flex space-x-1 pr-5">
        <li className="hover:drop-shadow-[0_0_0.7rem_#29cce5] rounded-md px-3">
          <Link href="/">Home</Link>
        </li>
        <li className='hover:drop-shadow-[0_0_0.7rem_#29cce5] rounded-md px-3'>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}


 