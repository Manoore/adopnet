import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { leads } from "@/db/schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const db = getDb();
  if (!db) {
    // No DATABASE_URL configured yet — accept the request without persisting.
    return NextResponse.json({ stored: false });
  }

  await db.insert(leads).values({
    name: body.name.trim(),
    email: body.email.trim(),
    company: typeof body.company === "string" ? body.company.trim() || null : null,
    message: body.message.trim(),
    packageSlug: typeof body.packageSlug === "string" ? body.packageSlug : null,
  });

  return NextResponse.json({ stored: true });
}
