import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
const Error = () => {
    return (
        <Wrapper className="full-page">
            <div>
                <img src={img} alt="not found page" />
                <h2>Oops! Something went wrong. </h2>
                <p>
                    Error 404: Page not found. Please check the URL or navigate back to the
                    homepage.
                </p>
                <Link to="/">Back to Home</Link>
            </div>
        </Wrapper>
    );
};

export default Error;
