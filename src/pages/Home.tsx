import Hero from "../components/HomePage/Hero"
import News from "../components/HomePage/News"
import Transformitive from "../components/HomePage/Transformitive"
import Work from "../components/HomePage/Work"

const Home = () => {
  return (
    <main>
        <Hero />
        <Transformitive />
        <Work />
        <News />
    </main>
  )
}

export default Home