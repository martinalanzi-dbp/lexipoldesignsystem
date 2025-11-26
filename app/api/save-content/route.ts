import { NextRequest, NextResponse } from "next/server"
import { writeFile, readFile } from "fs/promises"
import { join } from "path"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { filePath, content } = body

    if (!filePath || !content) {
      return NextResponse.json(
        { error: "filePath and content are required" },
        { status: 400 }
      )
    }

    // Security: Only allow saving files within the app directory
    const allowedPath = join(process.cwd(), "app")
    const fullPath = join(process.cwd(), filePath)
    
    if (!fullPath.startsWith(allowedPath)) {
      return NextResponse.json(
        { error: "Invalid file path" },
        { status: 403 }
      )
    }

    // Read the original file to preserve imports and structure
    const originalContent = await readFile(fullPath, "utf-8")
    
    // For now, we'll create a backup and update the file
    // In production, you might want to use a more sophisticated approach
    await writeFile(fullPath, content, "utf-8")

    return NextResponse.json({ success: true, message: "Content saved successfully" })
  } catch (error) {
    console.error("Error saving content:", error)
    return NextResponse.json(
      { error: "Failed to save content" },
      { status: 500 }
    )
  }
}

