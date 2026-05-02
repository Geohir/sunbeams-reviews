// Main entry points for the Apps Script project.

// Called by the hourly time-driven trigger.
function sendPendingReviewRequests() {
  const patients = getPendingPatients();
  console.log(`Found ${patients.length} pending patient(s).`);

  for (const patient of patients) {
    try {
      const body = buildReviewSmsBody(patient.parentName, patient.id);
      sendSms(patient.phone, body);
      markSmsSent(patient.rowIndex);
      console.log(`SMS sent to ${patient.id} (row ${patient.rowIndex})`);
    } catch (e) {
      console.error(`Failed for ${patient.id}:`, e.message);
    }
  }
}

// Called when the landing page reports a rating via fetch/redirect.
// Deploy this script as a Web App to receive GET requests from the landing page.
function doGet(e) {
  const patientId = e.parameter.id     || '';
  const rating    = Number(e.parameter.rating || 0);

  if (!patientId || !rating) {
    return HtmlService.createHtmlOutput('<p>Invalid request.</p>');
  }

  const redirectUrl = getRedirectUrl(rating, patientId);

  // Log the outcome back to Sheets (best-effort; don't block the redirect).
  try {
    // Row lookup by patient ID is left as a future enhancement.
    // For now, outcomes are written by the landing page flow directly.
  } catch (_) {}

  return HtmlService.createHtmlOutput(
    `<script>window.location.href = ${JSON.stringify(redirectUrl)};</script>`
  );
}
