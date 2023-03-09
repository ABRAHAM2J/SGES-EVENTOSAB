import "./HeroStyles.css";

function Hero(props){
    return(
    <>  
        <div className={props.cName}>
            <img className="hero" src={props.heroImage} alt="img de muestra"></img>            
        </div>

        <div className="hero-text">
            <h1>{props.title}</h1> 
            <p>{props.text}</p>
            
            <a href="/" className="show">Register Now</a>
        </div>
    </>
    )
}

export default Hero;