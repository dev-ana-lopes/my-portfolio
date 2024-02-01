import { Header } from "./components/header/header";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>

      <div className="experience">
        <h3>Experience</h3>
        <p> 3 years working as a information technology, in companys such as Vivaworks and Crefaz</p>

        <div className="experience-time">

        </div>

        <div className="information">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>ES - Intermediary</span>
            <span>EN - Intermediary</span>
            <span>PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="education-info">
            <span>Software Engineer in Unicv</span>
            <span>Mobile Application Developer in Unicesumar</span>
          </div>
          <div className="buttons">
            <div className="social">

            </div>

            <div className="contact">
              <button> Contact me</button>
            </div>
          </div>
        </div>

      </div>

      
    </main>
  );
}
