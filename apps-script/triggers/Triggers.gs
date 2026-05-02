// Run this function once manually to install the time-driven trigger.
// After that, Apps Script will call sendPendingReviewRequests automatically.

function installTrigger() {
  // Remove any existing triggers for this function to avoid duplicates.
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'sendPendingReviewRequests')
    .forEach(t => ScriptApp.deleteTrigger(t));

  ScriptApp.newTrigger('sendPendingReviewRequests')
    .timeBased()
    .everyHours(1)
    .create();

  console.log('Trigger installed: sendPendingReviewRequests fires every hour.');
}
