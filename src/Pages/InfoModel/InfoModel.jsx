import Header from "../../Components/Header/Header";
import { StyledTitle, StyledTitleLogin, StyledTitleMain } from "../../Components/StyledTitle";
import { Container } from "./Styled";
import logo from "../../assets/SGTitleCrest.png"
import { StyledProfiles } from "../../Components/StyledProfiles";
import { StyledInfoPicture } from "../../Components/StyledInfoPicture";
import picture from "../../assets/Neeko_10.jpg";
import { StyledInfoText } from "../../Components/StyledInfoText";

export default function InfoModel(){
    const token = localStorage.token
    const navigate = useNavigate()
    useEffect(() => {
    if (!token) {
        navigate("/");
        return;
      }
    console.log(token)
    const authentication = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    };
    const res = apiAuth.pets(authentication);
    res.then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        alert(error.message);
      });

    }, []);
    return(
        <Container>
            <Header/>
            <StyledTitle>
                <img className="logo" src={logo}/>
                <h1>STAR MODELS</h1>
            </StyledTitle>
            <StyledProfiles>
            </StyledProfiles>
            <StyledInfoPicture>
                <img src={picture}/>
                <div>
                    <span>AHRI</span>
                    <p>
                        <h1>
                            <h2>
                                Telephone
                            </h2>
                            <h3>
                                (19)99433-0867
                            </h3>
                        </h1>
                        <h1>
                            <h2>
                                Email
                            </h2>
                            <h3>
                                fiddlesticks@gmail.com
                            </h3>
                        </h1>
                        <h1>
                            <h2>
                                CPF
                            </h2>
                            <h3>
                                483.747.288-50
                            </h3>
                        </h1>
                    </p>
                </div>
                <ul className="linha1">.</ul>
                <ul className="linha2">.</ul>
            </StyledInfoPicture>
            <StyledInfoText>
                <div>
                    <h2>ABOUT STAR GUARDIAN AHRI</h2>
                    <h3>Ahri is a charismatic captain who leads a team of both new and veteran Star Guardians, from the outer edges of the cosmos. Having experienced the pain of losing teammates in the line of duty, she is viciously protective of her “family,” and a strong desire burns within her to ensure no one she cares for ever fades away again. These events have also shaped how she approaches other teams and their captains, especially the less experienced ones like Lux. There’s no more room for patience and understanding in her universe—tough love is all that’s left. Though that be the case, none are immune to Ahri’s own unique charms.</h3>
                </div>
                <img className="userImg" src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltc7a97e75ee923e94/60ee122d8a77034ffea23386/ahri-bio.jpg"/>
            </StyledInfoText>
            <StyledInfoText>
                <img className="petImg" src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt3675a107d939912f/60ee12305397524ead389183/ahri-familiar.jpg"/>
                <div className="pet">
                    <h2>MEET THE MAGICAL PET</h2>
                    <h1>KIKO</h1>
                    <h3>The mischievous Kiko accompanies Ahri as a vulpine embodiment of her charisma… and sass. Even unprompted, Kiko isn’t shy about saying how it really feels, though only Ahri can understand its unique language. As biting as the creature’s manners can sometimes be, it’s not too proud to turn down a good belly rub and cuddle. Just try to refrain from saying, “Aww.”</h3>
                </div>
            </StyledInfoText>

        </Container>
    )
}