import { Logo } from "../components"
import { Link } from "react-router-dom"
import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        Job <span>Tracking</span> App
                    </h1>
                    <p>
                        Job Tracker is a powerful job tracking application that helps users manage
                        and organize tasks, projects, and schedules. Whether used individually or
                        for team collaboration, it provides an efficient solution for work
                        management, enhancing productivity, and achieving goals.
                    </p>
                    <Link to="/register" className="btn btn-hero">
                        Login/Register
                    </Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    )
}
export default Landing
