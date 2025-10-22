import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <Image alt="Vercel Logo" height={200} src="/vercel.svg" width={200} />
    </main>
  );
}
