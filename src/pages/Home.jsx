import country1 from "../assets/video/country1.mp4"
function Home() {
  return (
    <>
    <div className="home h-auto flex-col lg:flex lg:flex-row justify-center items-center mt-3 mb-5 gap-3">

    <div className="box2 lg:flex lg:flex-col justify-center items-center text-center ">
      <h1 className="text-4xl font-bold mb-2 hover:text-blue-950 transition-all hover:text-5xl duration-700"> The World's Nations</h1>
      <p className="text-lg mt-3 text-lime-950 ">Our world is composed of 195 countries (193 recognized by the United Nations and 2 observer states), each contributing to the rich diversity of human life. These countries vary vastly in size, population, language, culture, governance, and natural beauty, making every nation a unique part of the global community.</p>
      </div>


      <div className="box1 mt-3 mb-12">

      <video className="video lg:rounded-s-full" autoplay muted loop id="myVideo" autoPlay  >
  <source src={country1} type="video/mp4" />
  Your browser does not support HTML5 video.
</video>
      </div>

      

    
    </div>
    </>
  )
}

export default Home