// Read and write patient records in Google Sheets.

function getPatientsSheet() {
  return SpreadsheetApp
    .openById(CONFIG.SPREADSHEET_ID)
    .getSheetByName(CONFIG.PATIENTS_SHEET);
}

function getFeedbackSheet() {
  return SpreadsheetApp
    .openById(CONFIG.SPREADSHEET_ID)
    .getSheetByName(CONFIG.FEEDBACK_SHEET);
}

// Returns all patient rows where sms_sent is FALSE and visit_date is old
// enough to warrant sending (based on SMS_DELAY_HOURS).
function getPendingPatients() {
  const sheet = getPatientsSheet();
  const rows  = sheet.getDataRange().getValues();
  const now   = new Date();
  const pending = [];

  for (let i = 1; i < rows.length; i++) {
    const [id, parentName, phone, visitDate, provider, smsSent] = rows[i];
    if (smsSent) continue;
    if (!phone || !visitDate) continue;

    const visitTime  = new Date(visitDate);
    const hoursElapsed = (now - visitTime) / 36e5;
    if (hoursElapsed >= CONFIG.SMS_DELAY_HOURS) {
      pending.push({ rowIndex: i + 1, id, parentName, phone, visitDate, provider });
    }
  }

  return pending;
}

function markSmsSent(rowIndex) {
  const sheet = getPatientsSheet();
  sheet.getRange(rowIndex, 6).setValue(true);                      // sms_sent
  sheet.getRange(rowIndex, 7).setValue(new Date().toISOString());  // sms_sent_at
}

function recordOutcome(rowIndex, rating, outcome) {
  const sheet = getPatientsSheet();
  sheet.getRange(rowIndex, 9).setValue(rating);   // rating_given
  sheet.getRange(rowIndex, 10).setValue(outcome); // outcome
}
