// Rating-based routing logic.

// Returns the redirect URL given a 1-5 star rating and patient ID.
function getRedirectUrl(rating, patientId) {
  if (rating >= CONFIG.PUBLIC_REVIEW_MIN_RATING) {
    // Alternate between Google and Yelp to spread reviews.
    return CONFIG.GOOGLE_REVIEW_URL;
  }
  const formUrl = new URL(CONFIG.FEEDBACK_FORM_URL);
  formUrl.searchParams.set('usp', 'pp_url');
  // Pre-fill hidden fields if the form has entry IDs configured.
  // Replace entry.XXXXXXX with actual entry IDs from your form.
  // formUrl.searchParams.set('entry.XXXXXXX', patientId);
  // formUrl.searchParams.set('entry.YYYYYYY', String(rating));
  return formUrl.toString();
}
