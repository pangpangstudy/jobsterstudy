import { toast } from "react-toastify";
import { useState } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
};
const Register = () => {
    const [values, setValues] = useState(initialState);
    // change
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };
    // submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
            toast.error("Please Fill Out All Fields");
            return;
        }
    };
    // toggle
    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };
    return (
        <Wrapper className="full-page">
            <form action="#" className="form" onSubmit={handleSubmit}>
                <Logo />
                <h3> {values.isMember ? "Login" : "Register"} </h3>

                {/* name */}
                {!values.isMember && (
                    <FormRow
                        type="name"
                        name="name"
                        value={values.name}
                        handleChange={handleChange}
                    />
                )}
                {/* email */}
                <FormRow
                    type="email"
                    name="email"
                    value={values.email}
                    handleChange={handleChange}
                />
                {/* password */}
                <FormRow
                    type="password"
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                />
                <button className="btn btn-block" type="submit">
                    Submit
                </button>
                <p>
                    {values.isMember ? "Not a member yet?" : "Already a member?"}
                    <button className="member-btn" type="button" onClick={toggleMember}>
                        {values.isMember ? "Register" : "Login"}
                    </button>
                </p>
            </form>
        </Wrapper>
    );
};

export default Register;
