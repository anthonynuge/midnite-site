import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const email = parsed.data.email.trim().toLowerCase()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Newsletter" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: 'New Newsletter Subscription',
      text: `New newsletter subscription: ${email}`,
      html: `<p>New newsletter subscription: ${email}</p>`,
    })

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
    return NextResponse.json(
      { error: 'Something went wrong, please try again later' },
      { status: 500 },
    )
  }
}
