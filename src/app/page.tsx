import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Information } from "./components/information/information";
import { SocialButtons } from "./components/social-buttons/social-buttons";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Information/>
      <div className="buttons">
        <SocialButtons/>
        <button className="contact-button"><a href="mailto:anajulia2015.ds@gmail.com"></a>Contact me</button>
      </div>

    </main>
  );
}
