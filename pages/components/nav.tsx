import Link from 'next/link';
// import React from 'react';

export default function NAV() {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-xl font-bold float-left">Dillon Greek</h1>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}


 