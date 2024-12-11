async function getProductImageURL(imageKey) {
  const { signedURL, error } = await supabase.storage
    .from('product-images')
    .getPublicUrl(imageKey);

  if (error) {
    console.error('Error fetching image URL: ', error);
  } else {
    console.log('Image URL: ', signedURL);
    return signedURL;
  }
}
