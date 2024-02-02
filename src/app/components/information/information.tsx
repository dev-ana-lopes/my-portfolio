import { SectionTitle } from "../sectionTitles/section-title"
import "./information.scss"

export function Information(){
    return(

        <div className="information">
            <SectionTitle text="Languages"/>
            <div className="languages-info">
                <span>ES - Intermediary</span>
                <span>EN - Intermediary</span>
                <span>PT-BR - Native Speaker</span>
            </div>

            <SectionTitle text="Education"/>
            <div className="education-info">
                <span>Software Engineer in Unicv</span>
                <span>Mobile Application Developer in Unicesumar</span>
            </div>
            
        </div>

    )
}