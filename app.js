// Import Supabase client library
import { createClient } from '@supabase/supabase-js';

// Supabase URL and API Key
const supabaseUrl = 'https://qzqtpwlothxnjpdbesiv.supabase.co';
const supabaseKey = 'YOUR_API_KEY';  // Replace 'YOUR_API_KEY' with your actual key (use your public key if needed)
const supabase = createClient(supabaseUrl, supabaseKey);

// Example: Fetch all products from a "products" table
async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Error fetching products:', error);
  } else {
    console.log('Fetched products:', data);
  }
}

// Example usage of Supabase client
fetchProducts();
