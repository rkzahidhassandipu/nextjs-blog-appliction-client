

const Home = async ({}) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
  return <div>
    <h1>This is home page</h1>

  </div>
}

export default Home