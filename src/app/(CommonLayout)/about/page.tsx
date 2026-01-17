

const About = async ({}) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
  return <div>
    <h1>This is about page</h1>

  </div>
}

export default About