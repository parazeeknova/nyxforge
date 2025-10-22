import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={200}
        height={200}
      />
    </main>
  );
}
