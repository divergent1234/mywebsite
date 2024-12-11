// Sign out user
async function signOut() {
  await supabase.auth.signOut();
  alert('You have been signed out.');
}
