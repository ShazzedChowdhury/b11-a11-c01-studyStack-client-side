import React from 'react';
import SignInAnimation from '../../components/SignInAnimation';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router';
import './SignInPage.css'
import useAuth from '../../Hooks/useAuth';
import SocialSignInBtn from '../../components/socialSignInButton/socialSignInBtn';
import sweetMessage from '../../Utils/sweetMessage';
const SignInPage = () => {
    const { logInUser, setUser } = useAuth();
    const navigate = useNavigate()
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        //sign in with firebase
        logInUser(email, password)
        .then(result => {
            const currentUser = result.user;
            setUser(currentUser);
            sweetMessage("Logged in successfully.", "success");
            navigate("/")
        })
        .catch(error => {
           if(error.message === "Firebase: Error (auth/invalid-credential).") {
             sweetMessage("Wrong password. try again.", "error")
           }else {
            sweetMessage("somethings went wrong. try again.", "error")
           }
        })
    }
    return (
      <section className="min-h-screen flex justify-center items-center px-5 md:px-0 py-10">
        <div className="h-fit max-w-3xl md:p-10">
          <div>
            <button
              className="btn bg-transparent border-0 shadow-none"
              title="Go back"
              onClick={() => navigate("/")}
            >
              <BsArrowLeft size={25} className="text-primary" />
            </button>
          </div>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 p-0">
              <div className="text-center lg:text-left">
                <SignInAnimation />
              </div>
              <div className="card w-full max-w-sm shrink-0">
                <div className="card-body">
                  <form className="fieldset" onSubmit={handleSignIn}>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input"
                      placeholder="Email"
                    />
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      name="password"
                      placeholder="Password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-primary mt-4">Login</button>
                  </form>
                  <SocialSignInBtn />
                  <p className="text-sm">
                    Don't have any account?
                    <Link className="text-primary" to="/register">
                      Register
                    </Link>{" "}
                    now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SignInPage;