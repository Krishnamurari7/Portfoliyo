import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // Log the contact form submission
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
    });

    // Email configuration
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || 'krishnamurari.dev@gmail.com';

    if (!emailUser || !emailPass) {
      console.warn('Email credentials not configured, only logging message');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message logged successfully (email not configured)' 
        },
        { status: 200 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass, // Use App Password for Gmail
      },
    });

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${emailUser}>`,
      to: emailTo,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${validatedData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 8px; font-size: 12px; color: #666;">
            <p><strong>Reply to:</strong> ${validatedData.email}</p>
            <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      replyTo: validatedData.email,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully to:', emailTo);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!' 
      },
      { status: 200 }
    );
    
  } catch (error: any) {
    console.error('Contact API error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data',
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    // Handle email authentication errors specifically
    if (error?.code === 'EAUTH' || error?.responseCode === 535) {
      console.error('Email authentication failed - check EMAIL_USER and EMAIL_PASS in .env.local');
      console.error('Make sure to use Gmail App Password, not regular password');
      
      // Still return success to user, but log the issue
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message received (email service temporarily unavailable)' 
        },
        { status: 200 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      },
      { status: 500 }
    );
  }
}
