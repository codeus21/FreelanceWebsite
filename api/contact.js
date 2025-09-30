import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const { name, contact, message } = req.body;

    // Validate required fields
    if (!name || !contact || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Aviles Web Solutions <onboarding@resend.dev>', // You'll change this to your domain
      to: ['davidfrontweb@gmail.com'], // Your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #4682b4, #87ceeb); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #4682b4; margin-bottom: 10px; font-size: 18px;">👤 Contact Information</h3>
              <p style="margin: 5px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; font-size: 16px;"><strong>Contact:</strong> ${contact}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #4682b4; margin-bottom: 10px; font-size: 18px;">💬 Message</h3>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #4682b4;">
                <p style="margin: 0; line-height: 1.6; font-size: 16px; color: #333;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
              <p style="color: #6c757d; font-size: 14px; margin: 0;">
                This message was sent from your Aviles Web Solutions contact form
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
      });
    }

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
    });
  }
}
