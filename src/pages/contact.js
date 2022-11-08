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
    <div className="mx-md-5 row">
        <div className="col-md-4 col-sm-12 text-md-start text-sm-start">
        <img style={{height: 30, width: 100}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAdCAYAAAA6ufdPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUCSURBVHgB7ZpNjts2FMf/mmn32g5QYDi7oF1UCbqPeoJOTzDKCZw5gd0T2D2BlRNkbiBnX2RcoAi6M7uapd1N0UViRS8iR0+0PixZkp2EP4A2RYrkE/nI90gJsFgsFovFYrFYLBaLxfJl4uD0EepfwjI0XhJGKr5Jwi2aQeWlKtsJkyTEDcIcwzBlbd7gMHzkn8GHpQ4fWX+t0IzXqtwaHfT1GU4XNwkv2fWvOE1oxaFBuU/CNSyEQNYX5ji24hu041/0D5kLicz0r3Ga0ID4Ku7CQmxU0P2xwAAI5E3mCpnyDNH2DKlrcqgS+OjH9EeszgBfFj7am36BbOwOZp8VNTKuX2C4jY1EB2bDchQkOhy7Oh91jPzq+Rt2l3HaWEUqeEaey/KimnKeitPMvVT3TNk9ffp/HmvntUoLmDz3Sl7Byuhn4888YvVMjDao7FTVV1bnPvLMD5CZM2b3rlQdAapxjXJVbfDx5WPns/SpqtPslxEaWG0fuya/iBXKzakw6igrR4Ku2fWluqdLs+qj3PTzvJXRrtkHbsmzVZ2MjIznM8O4QlZqk59+RAfIrLmvkCUqkWNdUW6NXcVaoXjsAkO2VYXcj3WWrah0w5xdk2P8M/qDTMSpbEQEMiWWBXncnJn5egNIQW84faS+mmuU42eLE5T7zAL1JlRgf5kDZFaAZAiRt5KvUIzLysmCvDGaI1B+Tk7pEWr0gpSUa3dVR3WxoupZaW6c+CoR4DB87LeiUrhH1oEC+ZVkZdRbJ2Nk1Ms7PkT9SsbzZ6yNtjJPWPqMpQvsuit+QRvcovBnM09l9llRdZ1eiXyVumdWNEc1XShqbplnHEtRTV/7GuUDUiWjKGhTsOAh7xK4JfJMUP88+8r8ErvjK1CMb9wravI5fHwDlh7U1EmELP+OEsxdPxUas2uJdAPVN7/jgJOEh2ffB3Cc546Dzftt/Od3b9+FaA+Zw6WRJlm8iYsijOuo5n5StkVBeohqmsgcIr9ZCVRYIDX7IYqR2B0jicNYlNRB6Tcq/iP9mIpqzq6hjqKWaMnDsx/mcNIZGyfz7zzR1kRxLy/evms7wTZ7pg2FRP0YNJFZ7zdorH2W7qtwiWEWJ0Lum843U7SS+uy66CiqDnO18dAj6Upa4BI4zuThpyc+jo+pLE+TcFURWk/YhkikykryvEJeMSbITl365rok/RcW/9SHWlEF8n6QRLs3Cs9ZXJ+P9cY2jv2yvHjr9DpJSjAnKikeV1YyuZKFjUpz0fFXRjUESMd8qeJPkVfWKwxD0WmBh7xP+4Z+tKKaGyaB4rOtog3WGxYnRz1S+Sv0/KrVcZxjmmTNPyxOSkfPTpsXrbTcjAbIDtd1H+k+u8EwBMgO46fq2jxgH7JfJ0j7QctknozM6KftRymcEPlO9lmcf5jQOc7Z2V3imI520uNEgbfxHYYhRPb8AtlqQP8zFSh9xO4RRh3UR0N9G8xlLTr6oX4bygXR+iFQfKrzuEfq4jO/BdJP8GRJem9c/PHXIllWc44/KWl8vr29WP4tMQwL7G4+9NdDGlKIoo3pRpUn0xtiGMg3vS2RhU5fXmA4aEKU6Q7JGeqErmexwPD+Fh68J2J7/q13Fn9w/9/+d3e1lMdwCfSbG4nqXTq/z1TooTmGLAEy13GB7I0nf+t1Ci6d5SsnQPHbuEpO+Qt/i+URq6iWz4Iudv0WSxP0BpLY+3ThI5aoO0ck9MgFAAAAAElFTkSuQmCC" />
        </div>
        <div className="col-md-4 col-sm-12 text-md-center text-sm-start mt-sm-2">
        <h6 style={{fontWeight: 'light',}}>HNG Internship 9 Frontend Task</h6>
        </div>
        <div className="col-md-4 col-sm-12 text-md-end text-sm-start">
        <img style={{height: 20, width: 100}} src="https://profound-sawine-367b11.netlify.app/assets/I4G.75927fc6.png" />
        </div>
    </div>
    </div>
    </>
    )
}
}

export default Contact;