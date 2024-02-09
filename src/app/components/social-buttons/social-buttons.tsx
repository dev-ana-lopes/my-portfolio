import { GithubIcons } from "../Icons/github-icon";
import { GraduateIcons } from "../Icons/graduate-icon";
import { InstagramIcons } from "../Icons/instagram-icon";
import { LinkedinIcons } from "../Icons/linkedin-icon";
import "./social-buttons.scss"

interface SocialButtonsProps {

}
export function SocialButtons(props : SocialButtonsProps){
    return(
        <div className="social">
          <a href=""><InstagramIcons/></a>
          <a href=""><LinkedinIcons/></a>
          <a href=""><GithubIcons/></a>
          
        </div>
    )
}