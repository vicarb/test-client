import { GetStaticPaths, GetStaticProps } from 'next'

function Product({ product }:any) {
    return(
      <h1>{product.name}</h1>
    )
    // Render post...
  }
  export const getStaticPaths = async () => {
    const res = await fetch('http://host.docker.internal/api/products');
    const data = await res.json();
    console.log("Data: ", data);
    
    const paths = data.map((producto:any) => {
        return {
            params: { id: producto.id.toString()}
        }
    })
    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps = async (context:any) => {
  const id = context.params.id;
  const res = await fetch('http://host.docker.internal/api/products/' + id);
  const data = await res.json()




  return {
      props: {
          product: data,

      },
      revalidate: 30
  }
}
  // This function gets called at build time
  // export const getStaticPaths: GetStaticPaths = async () => {
  //   const res = await fetch(`http://localhost:8000/api/products`)
  //   const paths = await res.json()
  //   return {
  //     paths,
  //     fallback: false,
  //   }
  // }
  // export const getStaticProps: GetStaticProps = async ({ params }:any) => {
  //   const res = await fetch(`http://localhost:8000/api/products/${params.id}`)
  //   const data = await res.json()
  //   return {
  //     props: {
  //       data,
  //     },
  //   }
  // }
  // export async function getStaticPaths() {
  //   // Call an external API endpoint to get posts
  //   const res = await fetch('http://localhost:8000/api/products')
  //   const products = await res.json()
  
  //   // Get the paths we want to pre-render based on posts
  //   const paths = products.map((product:any) => ({
  //     params: { id: product.id },
  //   }))
  
  //   // We'll pre-render only these paths at build time.
  //   // { fallback: false } means other routes should 404.
  //   return { paths, fallback: false }
  // }
  
  // // This also gets called at build time
  // export async function getStaticProps({ params }:any) {
  //   // params contains the post `id`.
  //   // If the route is like /posts/1, then params.id is 1
  //   const res = await fetch(`http://localhost:8000/api/products/${params.id}`)
  //   const product = await res.json()
  
  //   // Pass post data to the page via props
  //   return { props: { product } }
  // }
  
  
  
export default Product