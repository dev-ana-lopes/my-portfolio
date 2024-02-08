import { SectionTitle } from "../sectionTitles/section-title"
import "./information.scss"

export function Information(){
    return(

        <div className="information">
            <SectionTitle text="Languages"/>
            <div className="languages-info">
                <span>ES - Intermediary</span>
                <span>PT-BR - Native Speaker</span>
            </div>

            <SectionTitle text="Education"/>
            <div className="education-info">
                <span>Software Engineer in Unicv - Bachelors Degree</span>
                <span>Mobile Application Developer in Unicesumar - Technology Degree</span>
            </div>
            
        </div>

    )
}