import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../assets/image4.jpg"
function Home(){
    return(
        <>
            <Navbar/>
            <Hero 
                cName="hero"
                heroImage={HeroImage}
                title="Academic events management system"
                text="Organizing wasn't easier ever"    
            />
        </>
    )
}

export default Home;