import React from "react";


class Contact extends React.Component {
    render(){
    return (
    <>
    <div className="container-fluid vh-100 vw-100">
    <div className="d-flex flex-column align-items-start pt-5 px-md-5 ">
        <div className="mb-3">
        <h3>Contact Me</h3>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        </div>
        <div className="row" style={{ width: "100%" }}>
        <div className="col-md-6 col-sm-12  mb-3">
            <label style={{ fontWeight: "bold" }}>First name</label>
            <input
            className="form-control"
            type="text"
            id="first_name"
            placeholder="Enter your first name"
            style={{ width: "100%" }}
            />
        </div>
        <div className="col-md-6 col-sm-12  mb-3">
            <label style={{ fontWeight: "bold" }}>Last name</label>
            <input
            className="form-control"
            type="text"
            id="last_name"
            placeholder="Enter your last name"
            style={{ width: "100%" }}
            />
        </div>
        </div>
        <div className="row" style={{ width: "100%" }}>
        <div className="col-md-12 col-sm-12 ">
            <label style={{ fontWeight: "bold" }}>Email</label>
            <input
            className="form-control"
            type="email"
            id="email"
            placeholder="yourname@email.com"
            style={{ width: "100%" }}
            />
        </div>
        </div>
        <div className="row mt-3" style={{ width: "100%" }}>
        <div className="col-md-12 col-sm-12 ">
            <label style={{ fontWeight: "bold" }}>Message</label>
            <textarea
            className="form-control"
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible"
            style={{ width: "100%", height: 120 }}
            defaultValue={""}
            />
            <p className="text-danger d-none">Please enter a message</p>
        </div>
        </div>
        <div className="mt-2 mb-4 px-2">
        <input type="checkbox" x="" />
        <span className="mx-2">
            You agree to providing data to shmorteen who may contact you
        </span>
        </div>
        <div className="row px-2" style={{ width: "100%" }}>
        <button
            className="btn btn-primary text-center"
            id="btn_submit"
            style={{ width: "100%", fontWeight: "bold", color: "white" }}
        >
            Send message
        </button>
        </div>
    </div>
    <hr className="mx-md-5 mt-5" />
    
    </div>
    </>
    )
}
}

export default Contact;