import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-5xl">Hola mundo :P</span>
      <Link href={'/about'}>About Page</Link>
    </main>
  );
}
