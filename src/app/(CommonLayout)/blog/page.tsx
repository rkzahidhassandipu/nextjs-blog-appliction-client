const Blog = async ({}) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
  return <div>
    <h1>This is blog page</h1>
  </div>
}

export default Blog