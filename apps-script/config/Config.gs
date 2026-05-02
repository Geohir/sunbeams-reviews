// Central configuration — fill these in before deploying.

const CONFIG = {
  // Google Sheets
  SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID',
  PATIENTS_SHEET: 'Patients',
  FEEDBACK_SHEET: 'FeedbackResponses',

  // Twilio
  TWILIO_ACCOUNT_SID: 'YOUR_TWILIO_ACCOUNT_SID',
  TWILIO_AUTH_TOKEN:  'YOUR_TWILIO_AUTH_TOKEN',
  TWILIO_FROM_NUMBER: '+1XXXXXXXXXX',

  // Landing page (GitHub Pages URL)
  REVIEW_LANDING_URL: 'https://YOUR_ORG.github.io/sunsbeam/',

  // Public review destinations
  GOOGLE_REVIEW_URL: 'https://g.page/r/YOUR_PLACE_ID/review',
  YELP_REVIEW_URL:   'https://www.yelp.com/writeareview/biz/YOUR_BIZ_ID',

  // Google Form (private feedback)
  FEEDBACK_FORM_URL: 'https://docs.google.com/forms/d/YOUR_FORM_ID/viewform',

  // Staff alert email
  ALERT_EMAIL: 'office@yourpractice.com',

  // Rating threshold: at or above → public review; below → private form
  PUBLIC_REVIEW_MIN_RATING: 4,

  // Hours after visit_date before SMS is sent
  SMS_DELAY_HOURS: 2,
};
