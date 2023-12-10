import React from "react"
import { FaSignInAlt } from "react-icons/fa"
// import axios from "axios";
import { useNavigate } from "react-router-dom"
// import utilsContext from "../context/utilsContext";
// import { toast } from "react-toastify";

export default function Login()
{
    let [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    function handleChange(e)
    {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    }

    async function handleSubmit(e)
    {
        e.preventDefault();
        console.log("Login Form Submitted!");
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Login to keep a check on your vehicle!</p>
            </section>
            <section className="form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email"
                            value={formData.email} 
                            placeholder="Enter your email" 
                            onChange={(e) => handleChange(e)} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            name="password" 
                            value={formData.password} 
                            placeholder="Enter password" 
                            onChange={(e) => handleChange(e)} 
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}