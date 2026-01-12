# EmailJS Setup Guide

Your contact form is now configured to use EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month)
3. Verify your email address

## Step 2: Connect Your Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - For Gmail: Select "Gmail"
   - Click **Connect Account** and authorize with your Google account (niharika1018.work@gmail.com)
4. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   From: {{from_name}} ({{from_email}})
   Subject: Portfolio Contact: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{from_email}}
   ```
4. Note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update Your Code

Open `/workspaces/portfolio/src/components/Contact.jsx` and replace these values around line 30:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Test Your Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email inbox (niharika1018.work@gmail.com)

## Template Variables Reference

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (optional, can be hardcoded in template)

## Troubleshooting

- **Emails not sending?** Check the browser console for errors
- **Wrong format?** Verify template variable names match exactly
- **Gmail blocking?** Enable "Less secure app access" or use App Password
- **Rate limited?** Free tier allows 200 emails/month

## Security Note

Your EmailJS keys are safe to expose in frontend code - they're designed for client-side use. EmailJS has built-in spam protection and rate limiting.
