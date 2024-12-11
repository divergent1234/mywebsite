async function uploadProductImage(file) {
  const { data, error } = await supabase.storage
    .from('product-images')  // Replace with your bucket name
    .upload('products/' + file.name, file);

  if (error) {
    console.error(error);
  } else {
    console.log('File uploaded: ', data);
    // Save the image URL to the products table
    saveProductImageURL(data.Key);
  }
}

async function saveProductImageURL(imageKey) {
  const { data, error } = await supabase
    .from('products')
    .insert([
      { name: 'Product 1', description: 'Description', price: 29.99, image_url: imageKey },
    ]);

  if (error) {
    console.error('Error inserting product: ', error);
  } else {
    console.log('Product added successfully');
  }
}
