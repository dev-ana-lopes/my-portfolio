import { InfraIcons } from "../Icons/infra-icon";
import { ProjectIcons } from "../Icons/project-icon";
import { TestingIcons } from "../Icons/testing-icon";
import { SectionTitle } from "../sectionTitles/section-title"
import "./experience.scss"

export function Experience(){
    return(

        <div className="experience">
            <SectionTitle text="Experience"/>
            <p> 3 years working with information technology, in companys such as Vivaweb and Crefaz.</p>
            <div className="experience-time">

                <div className="icon">
                    <ProjectIcons/>
                    <div className="experience-metric">
                        <div className="experience-count count-3"></div>
                            <span>1.5 Years</span>
                    </div>
                </div>

                <div className="icon">
                    <TestingIcons/>
                    <div className="experience-metric">
                        <div className="experience-count count-2"></div>
                            <span>1 Year</span>
                            
                    </div>
                </div>
                
                <div className="icon">
                    <InfraIcons/>
                    <div className="experience-metric">
                        <div className="experience-count count-1"></div>
                            <span>10 Months</span>
                    </div>
                </div>
            </div>
        </div>

    )
}