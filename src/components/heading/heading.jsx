import "./heading.scss";

import Animation from "../head-animation/animation";

const Heading = () => {
    return(
        <header>
            <div className="left">
                <h1>Cohub – Modern <code>IT & Language</code> Education Center</h1>
                <p>Learn the skills of the future today.</p>
                <a href="">Enroll Now</a>
            </div>
            <div className="right">
                <Animation /> 
            </div>
        </header>
    )
}

export default Heading;