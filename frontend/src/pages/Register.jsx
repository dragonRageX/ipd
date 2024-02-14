import React from "react"
import { FaUser } from "react-icons/fa"
// import axios from "axios";
import { useNavigate } from "react-router-dom"
// import utilsContext from "../context/utilsContext";
// import { toast } from "react-toastify";

export default function Register()
{
    let [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
        password2: ""
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
        console.log("Register form submitted!");
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>
            <section className="form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            placeholder="Enter your name" 
                            onChange={(e) => handleChange(e)} 
                        />
                    </div>
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
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password2" 
                            name="password2" 
                            value={formData.password2} 
                            placeholder="Confirm Password" 
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