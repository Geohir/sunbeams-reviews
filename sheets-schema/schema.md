# Google Sheets Schema

## Sheet: `Patients`

| Column | Header | Type | Notes |
|--------|--------|------|-------|
| A | `patient_id` | String | Unique ID (e.g. `P-0001`) |
| B | `parent_name` | String | Guardian's first + last name |
| C | `phone` | String | E.164 format: `+1XXXXXXXXXX` |
| D | `visit_date` | Date | `YYYY-MM-DD` |
| E | `provider` | String | Dentist name |
| F | `sms_sent` | Boolean | `TRUE` once SMS is dispatched |
| G | `sms_sent_at` | Timestamp | ISO 8601 |
| H | `review_clicked` | Boolean | Set via landing page redirect |
| I | `rating_given` | Number | 1–5, set via landing page |
| J | `outcome` | String | `public_review` \| `private_feedback` \| `no_action` |
| K | `notes` | String | Internal staff notes |

## Sheet: `FeedbackResponses`

Populated automatically when a private Google Form is submitted.

| Column | Header | Type | Notes |
|--------|--------|------|-------|
| A | `timestamp` | Timestamp | Form submission time |
| B | `patient_id` | String | Passed as hidden field in form URL |
| C | `rating` | Number | 1–3 (carried from landing page) |
| D | `feedback_text` | String | Open-ended response |
| E | `contact_requested` | Boolean | Did they want a follow-up call? |
| F | `staff_notified` | Boolean | Set to TRUE once alert email is sent |
