


function Home({pHome}){

  return (
    <div id="home">
      <h1 style={{ color: pHome.color }}>
        {pHome.name} is a Web Developer from {pHome.city}
      </h1>
      
    </div>
  );
}

export default Home;
