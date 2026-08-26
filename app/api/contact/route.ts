import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, businessName, websiteUrl, projectGoal } = body;

    if (!name || !email || !businessName || !projectGoal) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const formspreeResponse = await fetch("https://formspree.io/f/mdajonkr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        businessName,
        websiteUrl: websiteUrl || "Not Provided",
        projectGoal,
      }),
    });

    if (formspreeResponse.ok) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const data = await formspreeResponse.json().catch(() => ({}));
    return NextResponse.json(
      { error: data?.errors?.[0]?.message || "Failed to submit enquiry." },
      { status: formspreeResponse.status || 500 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Server error occurred while sending enquiry." },
      { status: 500 }
    );
  }
}
