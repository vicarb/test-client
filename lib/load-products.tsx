export async function loadProducts() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://djangogunicorn:8000/api/products/')
    const data = await res.json()
  
    return data
  }