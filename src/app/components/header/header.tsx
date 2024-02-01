import Image from "next/image";
import "./header.scss"

export function Header(){
    return(

        <div className="header">
            <div className="title">
                <h1>Hi, I´m Ana Lopes! </h1>
                <h2>Software Engineer</h2>
            </div>
    
            <Image
            src="/me.jpeg"
            alt="Ana profile"
            width={380}
            height={380}
            priority
            /> 

        </div>

    )
}