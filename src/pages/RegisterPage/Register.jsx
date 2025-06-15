import React from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { BsArrowLeft } from "react-icons/bs";
import SignInAnimation from "../../components/SignInAnimation";
import sweetMessage from "../../Utils/sweetMessage";

const Register = () => {
    const navigate = useNavigate();
    const { createUser, setUser, updateUserInfo } = useAuth();
    
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password, ...remainProp} = Object.fromEntries(formData.entries());
       
        //password validation
        if(password.length < 6) {
           return sweetMessage("password must be atleast 6 characters long.", "error")
        }
        else if(!/[a-z]/.test(password)) {
            return sweetMessage("Password must contain one lowercase.", "error")
        }
        else if(!/[A-Z]/.test(password)) {
            return sweetMessage("Password must contain one uppercase.", "error")
        }
        
        //sign in with firebase
        createUser(email, password)
          .then((result) => {
            const currentUser = result.user;
            if(currentUser) {
                updateUserInfo({ displayName: remainProp.name, photoURL: remainProp.photoUrl})                
                .then(() => {
                    sweetMessage("Your account created successfully")
                    setUser(currentUser)
                    navigate("/")
                }).catch(error => {
                    sweetMessage("somethings went wrong. try again.", "error")
                })
            }
          })
          .catch((error) => {
            if (
              error.message === "Firebase: Error (auth/email-already-in-use)."
            ) {
              sweetMessage("Account already exits", "error");
            } else {
              sweetMessage("somethings went wrong. try again.", "error");
            }
          })}

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
                <form className="fieldset" onSubmit={handleSignUp}>
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Photo URL</label>
                  <input
                    type="url"
                    name="photoUrl"
                    className="input"
                    placeholder="Photo URL"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                  <button type="submit" className="btn btn-primary mt-4">Register</button>
                  <p className="text-sm">Already have an account?<Link className="text-primary" to="/sign-in">Log in</Link> now.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
