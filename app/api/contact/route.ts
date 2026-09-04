import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Handle audit requests from homepage CTA
    if (body.type === "audit" || (body.websiteUrl && body.contactHandle)) {
      const { websiteUrl, contactHandle } = body;
      if (!websiteUrl || !contactHandle) {
        return NextResponse.json(
          { error: "Please provide both your website URL and contact handle." },
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
          _subject: "Free 2-Point Mobile Spacing & Layout Audit Request",
          websiteUrl,
          contactHandle,
          requestType: "Free 2-Point Mobile Spacing & Layout Audit",
        }),
      });

      if (formspreeResponse.ok) {
        return NextResponse.json({ success: true }, { status: 200 });
      }

      const data = await formspreeResponse.json().catch(() => ({}));
      return NextResponse.json(
        { error: data?.errors?.[0]?.message || "Failed to submit audit request." },
        { status: formspreeResponse.status || 500 }
      );
    }

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
