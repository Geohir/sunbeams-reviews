# Automation Flow

```
[Front desk logs visit in Google Sheet]
        |
        v
[Time-driven trigger fires (e.g. 2 hrs after visit)]
        |
        v
[Apps Script reads new rows → Twilio sends SMS with review link]
        |
        v
[Patient taps link → landing-page/index.html]
        |
        +----- "Leave Us a Google Review" button -----> [Google Reviews page]
        |
        +----- "Share Private Feedback" button -------> [Private Google Form]
                                                               |
                                                               v
                                                    [Form response logged in Sheets]
                                                    [Optional: alert staff by email]
```

## Key Design Decisions

- **Two equal-access buttons**: every patient sees both options — a direct link
  to Google Reviews and a link to a private feedback form. There is no
  star-rating gate or any logic that filters who can leave a public review.
- **Google Sheets as the DB**: no backend server needed; front desk staff can
  add/edit rows directly.
- **Apps Script Web App**: receives Google Form submissions via `doPost` so
  staff can be notified in real time.
- **Twilio**: handles SMS delivery and optional reply parsing.
