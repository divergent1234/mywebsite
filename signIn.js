// Sign in user
async function signIn(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    alert('Error: ' + error.message);
  } else {
    alert('Welcome back, ' + user.email);
  }
}
