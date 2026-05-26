import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (
      !data.fullName ||
      !data.email ||
      !data.phone ||
      !data.educationLevel ||
      !data.studyLevel ||
      !data.programme
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you can:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Add to mailing list

    // Example: Send email to admin and user
    const emailData = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      country: data.country,
      currentEducation: data.currentEducation,
      educationLevel: data.educationLevel,
      studyLevel: data.studyLevel,
      programme: data.programme,
      message: data.message,
      submittedAt: new Date().toISOString(),
    };

    // Log the application (you can replace this with actual storage)
    console.log("New Application Received:", emailData);

    // TODO: Implement actual functionality:
    // - Save to database
    // - Send confirmation email to user
    // - Send notification email to admin
    // - Add to CRM

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: emailData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
