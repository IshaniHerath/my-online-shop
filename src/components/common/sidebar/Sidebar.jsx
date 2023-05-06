import React from 'react';
import mainImage from '../../mainImage.png';
import "../../components/login/login.css";


const handleSubmitClick = (e) => {
}

const handleOnChange = (e) => {
}

function Login(props) {

    return (
        <div className="container">
            <div className="card">
                <div className="form">

                    <div className="left-side">
                        <img src={mainImage} />
                    </div>


                    <div className="right-side">
                            <h1> Login </h1>
                        <div className="text-label">
                            <label htmlFor="" className="mandatory">Email : </label>
                        </div>
                        <input type="text"
                            placeholder="Enter your Email"
                            name="Email"
                            onChange={handleOnChange}
                            required={true}
                            style={{ width: '50%' }}
                        />

                        <div className="text-label">
                            <label htmlFor="" className="mandatory">Password : </label>
                        </div>
                        <input type="password"
                            placeholder="Enter your Password"
                            id="standard-adornment-password"
                            name="Password"
                            style={{ width: '50%' }}
                        />

                        <div className="button">
                            <button
                                type="submit"
                                // className="btn btn-primary"
                                onClick={handleSubmitClick}
                            >
                                Login
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default Login;

