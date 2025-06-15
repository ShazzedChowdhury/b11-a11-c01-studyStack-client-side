import React from 'react';
import SignInAnimation from '../../components/SignInAnimation';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import './SignInPage.css'
import useAuth from '../../Hooks/useAuth';
const SignInPage = () => {
    const navigate = useNavigate();
    const { logInUser } = useAuth();
    console.log(logInUser)
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        //sign in with firebase

    }
    return (
      <section className="min-h-screen flex justify-center items-center px-5 md:px-0">
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
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      name='password'
                      placeholder="Password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-primary mt-4">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SignInPage;