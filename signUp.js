// Sign up user
async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    alert('Error: ' + error.message);
  } else {
    alert('Sign up successful! Please check your email for verification.');
  }
}
