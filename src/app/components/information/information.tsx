import { SectionTitle } from "../sectionTitles/section-title"
import "./information.scss"
import Image from "next/image";
import { GraduateIcons } from "../Icons/graduate-icon";

export function Information(){
    return(

        <div className="information">
            <SectionTitle text="Languages"/>
            <div className="languages-info">
                <div className="bandeira">
                    <Image className="icon"
                    src="/espanha.png"
                    alt="bandeira do brasil"
                    width={30}
                    height={30}
                    priority
                        /> 
                    <span>ES - Intermediary</span>
                </div>
                
                <div className="bandeira">
                    <Image className="icon"
                        src="/brasil.png"
                        alt="bandeira do brasil"
                        width={30}
                        height={30}
                        priority
                            /> 
                        <span>PT-BR - Native Speaker</span>
                </div>
            </div>

            <SectionTitle text="Education"/>
            <div className="education-info">
                <div className="bandeira">
                    <a href=""><GraduateIcons/></a>
                    <span>Software Engineer in Unicv - Bachelors Degree</span>
                </div>
                <div className="bandeira">
                    <a href=""><GraduateIcons/></a>
                    <span>Mobile Application Developer in Unicesumar - Technology Degree</span>
                </div>
            </div>
            
        </div>

    )
}