import Image from "next/image";
import "./header.scss"

export function Header(){
    return(

        <div className="header">
            <div className="title">
                <h1>Hi, I´m Ana Lopes! </h1>
                <h2 className="subtitle">Software Engineer</h2>
            </div>
    
            <Image className="img"
            src="/me.jpeg"
            alt="Ana profile"
            width={280}
            height={300}
            priority
            /> 

        </div>

    )
}