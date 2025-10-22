export default async function Home() {
  let dbStatus = "Connecting...";

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/db-status`,
      {
        cache: "no-store",
      }
    );

    if (response.ok) {
      const data = await response.json();
      dbStatus =
        data.status === "connected" ? "Connected" : "Connection Failed";
    } else {
      dbStatus = "Connection Failed";
    }
  } catch {
    dbStatus = "Connection Failed";
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-8 text-white">
      <div className="space-y-4 text-center">
        <p className="text-gray-400 text-sm">Database Status: {dbStatus}</p>
      </div>
    </main>
  );
}
