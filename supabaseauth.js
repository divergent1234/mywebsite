const user = supabase.auth.user();
if (user) {
  // Proceed to the main page
} else {
  // Redirect to login page
  window.location.href = '/login.html';
}
