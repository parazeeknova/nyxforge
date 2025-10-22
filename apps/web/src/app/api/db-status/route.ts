import { db } from "@nyxforge/database";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await db.execute("SELECT 1");

    return NextResponse.json({
      status: "connected",
      message: "Database connection successful",
    });
  } catch (error) {
    console.error("Database connection failed:", error);

    return NextResponse.json(
      {
        status: "failed",
        message: "Database connection failed",
        error: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}
