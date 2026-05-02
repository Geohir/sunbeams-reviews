# Sunsbeam — Post-Visit Review Automation

Automated review request system for a pediatric dental practice.

## Stack

| Layer | Technology |
|---|---|
| Landing page | Static HTML/CSS/JS → GitHub Pages |
| Automation | Google Apps Script |
| SMS | Twilio |
| Database | Google Sheets |
| Private feedback | Google Forms |

## Directory Structure

```
sunsbeam/
├── landing-page/          # GitHub Pages site
│   ├── index.html         # Review routing page (public review link)
│   ├── feedback.html      # Private feedback thank-you page
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── assets/            # Logo, images
│
├── apps-script/           # Google Apps Script source (copy into GAS editor)
│   ├── Code.gs            # Entry point / main controller
│   ├── config/
│   │   └── Config.gs      # Constants: Twilio creds, Sheet IDs, URLs
│   ├── lib/
│   │   ├── Sms.gs         # Twilio SMS wrapper
│   │   ├── Sheets.gs      # Read/write patient records
│   │   └── Reviews.gs     # Review link logic, rating routing
│   └── triggers/
│       └── Triggers.gs    # Time-driven trigger setup
│
├── sheets-schema/
│   └── schema.md          # Column definitions for the Sheets database
│
├── forms/
│   └── feedback-form.md   # Google Form structure / questions
│
└── docs/
    └── flow.md            # End-to-end automation flow diagram (text)
```

## Setup Checklist

- [ ] Configure Google Sheet and copy Sheet ID into `Config.gs`
- [ ] Add Twilio Account SID, Auth Token, and sender number to `Config.gs`
- [ ] Deploy landing page to GitHub Pages and update review URLs in `Config.gs`
- [ ] Create Google Form for private feedback and link it in `Config.gs`
- [ ] Deploy Apps Script as a Web App (for form webhook) and set up time-driven triggers
