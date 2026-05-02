// Twilio SMS wrapper.

function sendSms(toNumber, body) {
  const url  = `https://api.twilio.com/2010-04-01/Accounts/${CONFIG.TWILIO_ACCOUNT_SID}/Messages.json`;
  const opts = {
    method:  'post',
    headers: {
      Authorization: 'Basic ' + Utilities.base64Encode(
        `${CONFIG.TWILIO_ACCOUNT_SID}:${CONFIG.TWILIO_AUTH_TOKEN}`
      ),
    },
    payload: {
      To:   toNumber,
      From: CONFIG.TWILIO_FROM_NUMBER,
      Body: body,
    },
    muteHttpExceptions: true,
  };

  const response = UrlFetchApp.fetch(url, opts);
  const result   = JSON.parse(response.getContentText());

  if (response.getResponseCode() !== 201) {
    console.error('Twilio error:', result.message);
    throw new Error(`SMS failed to ${toNumber}: ${result.message}`);
  }

  return result.sid;
}

function buildReviewSmsBody(parentName, patientId) {
  const link = `${CONFIG.REVIEW_LANDING_URL}?id=${encodeURIComponent(patientId)}`;
  return (
    `Hi ${parentName}! Thanks for visiting Sunsbeam Pediatric Dental today. ` +
    `We'd love your feedback — it only takes a minute: ${link} ` +
    `Reply STOP to opt out.`
  );
}
