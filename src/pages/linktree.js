import React from 'react';
import {Link, Outlet } from "react-router-dom"


class LinkTree extends React.Component {
  render() {
    return (
      <>
  <div className="container-fluid vh-100 vw-100">
    <div className="d-flex flex-column align-items-center pt-5 px-md-5">
      <div className="d-flex flex-row justify-content-center">
        <div className="d-md-flex d-none flex-column align-items-center mb-3" style={{marginLeft: 200 }}>
          <img id="profile__img" alt="ProImg" src="assets/FaceApp_1654715597265~2.jpg" style={{borderRadius: 100, height: 50, width: 50}}/>
          <h5 id="twitter" className="mt-2" style={{fontWeight: "bold",}}>Shmorteen</h5>
          <h5 id="slack" className="d-none" style={{fontWeight: "bold",}}>Shmorteen</h5>
        </div>
        <div className="d-flex d-md-none flex-column align-items-center mb-3">
          <img id="profile__img" alt="ProImg" src="assets/FaceApp_1654715597265~2.jpg" style={{borderRadius: 100, height: 60, width: 60}}/>
          <h5 id="twitter" className="mt-2" style={{fontWeight: "bold",}}>Shmorteen</h5>
          <h5 id="slack" className="d-none" style={{fontWeight: "bold",}}>Shmorteen</h5>
        </div>
        <div className="d-md-flex d-none border P-1" style={{marginLeft: 170, borderRadius: 50, height: 20}} >
          <img src="assets/up-arrow.png" style={{width: 20, height: 15 }}/>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center w-100 px-md-5">
        <div
          className="d-flex flex-row d-inline-block justify-content-center align-items-center bg-light"
          style={{ height: 60, borderRadius: 10 }}
        >
          <a className="btn" id="btn_twitter"
            style={{
              textDecoration: "none",
              fontWeight: "bolder",
              color: "black"
            }} href="https://twitter.com/shmorteen/"
          >
            Twitter Link
          </a>
        </div>
        <div
          className="d-flex flex-row d-inline-block justify-content-center align-items-center bg-light mt-3"
          style={{ height: 60, borderRadius: 10 }}
        >
          <a  className="btn" id="btn_zuri"
            style={{
              textDecoration: "none",
              fontWeight: "bolder",
              color: "black",
              borderRadius: 10
            }}
            href="https://training.zuri.team/"
          >
            Zuri Team
          </a>
        </div>
        <div
          className="d-flex flex-row d-inline-block justify-content-center align-items-center bg-light mt-3"
          style={{ height: 60, borderRadius: 10 }}
        >
          <a className="btn" id="books"
          title="Existing books on Design and Coding are avaliable"
            style={{
              textDecoration: "none",
              fontWeight: "bolder",
              color: "black",
              borderRadius: 10
            }}
            href="http://books.zuri.team"
          >
            Zuri Books
          </a>
        </div>
        <div
          className="d-flex flex-row d-inline-block justify-content-center align-items-center bg-light mt-3"
          style={{ height: 60, borderRadius: 10 }}
        >
          <a className="btn" id="book_python"
            title="Educative books about coding sold for affordable price"
            style={{
              textDecoration: "none",
              fontWeight: "bolder",
              color: "black",
              borderRadius: 10
            }}
            href="http://books.zuri.team/python-for-beginners?ref_id=shmorteen"
          >
            Python Books
          </a>
        </div>
        <div
          className="d-flex flex-row d-inline-block justify-content-center align-items-center bg-light mt-3"
          style={{ height: 60, borderRadius: 10 }}
        >
          <a className="btn" id="pitch"
            title="Code reviews and debugging for coders"
            style={{
              textDecoration: "none",
              fontWeight: "bolder",
              color: "black",
              borderRadius: 10
            }}
            href="https://background.zuri.team"
          >
            Background Check for Coders
          </a>
        </div>
        <div
          className="d-flex flex-row d-inline-block justify-content-center align-items-center bg-light mt-3"
          style={{ height: 60, borderRadius: 10 }}
        >
          <a className="btn" id="book_design"
          title="These are free books for Design which are provided by Zuri"
            style={{
              textDecoration: "none",
              fontWeight: "bolder",
              color: "black",
              borderRadius: 10
            }}
            href="https://books.zuri.team/design-rules"
          >
            Design Books
          </a>
        </div>
        <div
          className="d-flex flex-row d-inline-block justify-content-center align-items-center bg-light mt-3 mb-3"
          style={{ height: 60, borderRadius: 10 }}
        >
          <a className="btn" id="book_design"
          title="These are free books for Design which are provided by Zuri"
            style={{
              textDecoration: "none",
              fontWeight: "bolder",
              color: "black",
              borderRadius: 10
            }}
            href="https://books.zuri.team/design-rules "
          >
            Contact Books
          </a>
        </div>
        <div
          className="d-flex flex-row d-inline-block justify-content-center align-items-center bg-light mb-3"
          style={{ height: 60, borderRadius: 10 }}
        >
          <Link className="btn" id="contact"
            style={{
              textDecoration: "none",
              fontWeight: "bolder",
              color: "black",
              borderRadius: 10
            }}
            to="/contact"
          >
            Contact me
          </Link>
        </div>
      </div>
      <div className="d-md-flex d-none flex-row">
        <img className="mx-2" style={{height: 20, width: 40}} src="data:image/png;base64,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" />
        <img style={{height: 20, width: 25}} src="data:image/png;base64,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" />
      </div>
    </div>
    <hr className="d-md-flex d-none mx-md-5 mt-5" />
    <div className="mx-md-5 row">
        <div className="col-md-4 col-sm-12 text-md-start text-sm-start">
        <img style={{height: 30, width: 100}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAdCAYAAAA6ufdPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUCSURBVHgB7ZpNjts2FMf/mmn32g5QYDi7oF1UCbqPeoJOTzDKCZw5gd0T2D2BlRNkbiBnX2RcoAi6M7uapd1N0UViRS8iR0+0PixZkp2EP4A2RYrkE/nI90gJsFgsFovFYrFYLBaLxfJl4uD0EepfwjI0XhJGKr5Jwi2aQeWlKtsJkyTEDcIcwzBlbd7gMHzkn8GHpQ4fWX+t0IzXqtwaHfT1GU4XNwkv2fWvOE1oxaFBuU/CNSyEQNYX5ji24hu041/0D5kLicz0r3Ga0ID4Ku7CQmxU0P2xwAAI5E3mCpnyDNH2DKlrcqgS+OjH9EeszgBfFj7am36BbOwOZp8VNTKuX2C4jY1EB2bDchQkOhy7Oh91jPzq+Rt2l3HaWEUqeEaey/KimnKeitPMvVT3TNk9ffp/HmvntUoLmDz3Sl7Byuhn4888YvVMjDao7FTVV1bnPvLMD5CZM2b3rlQdAapxjXJVbfDx5WPns/SpqtPslxEaWG0fuya/iBXKzakw6igrR4Ku2fWluqdLs+qj3PTzvJXRrtkHbsmzVZ2MjIznM8O4QlZqk59+RAfIrLmvkCUqkWNdUW6NXcVaoXjsAkO2VYXcj3WWrah0w5xdk2P8M/qDTMSpbEQEMiWWBXncnJn5egNIQW84faS+mmuU42eLE5T7zAL1JlRgf5kDZFaAZAiRt5KvUIzLysmCvDGaI1B+Tk7pEWr0gpSUa3dVR3WxoupZaW6c+CoR4DB87LeiUrhH1oEC+ZVkZdRbJ2Nk1Ms7PkT9SsbzZ6yNtjJPWPqMpQvsuit+QRvcovBnM09l9llRdZ1eiXyVumdWNEc1XShqbplnHEtRTV/7GuUDUiWjKGhTsOAh7xK4JfJMUP88+8r8ErvjK1CMb9wravI5fHwDlh7U1EmELP+OEsxdPxUas2uJdAPVN7/jgJOEh2ffB3Cc546Dzftt/Od3b9+FaA+Zw6WRJlm8iYsijOuo5n5StkVBeohqmsgcIr9ZCVRYIDX7IYqR2B0jicNYlNRB6Tcq/iP9mIpqzq6hjqKWaMnDsx/mcNIZGyfz7zzR1kRxLy/evms7wTZ7pg2FRP0YNJFZ7zdorH2W7qtwiWEWJ0Lum843U7SS+uy66CiqDnO18dAj6Upa4BI4zuThpyc+jo+pLE+TcFURWk/YhkikykryvEJeMSbITl365rok/RcW/9SHWlEF8n6QRLs3Cs9ZXJ+P9cY2jv2yvHjr9DpJSjAnKikeV1YyuZKFjUpz0fFXRjUESMd8qeJPkVfWKwxD0WmBh7xP+4Z+tKKaGyaB4rOtog3WGxYnRz1S+Sv0/KrVcZxjmmTNPyxOSkfPTpsXrbTcjAbIDtd1H+k+u8EwBMgO46fq2jxgH7JfJ0j7QctknozM6KftRymcEPlO9lmcf5jQOc7Z2V3imI520uNEgbfxHYYhRPb8AtlqQP8zFSh9xO4RRh3UR0N9G8xlLTr6oX4bygXR+iFQfKrzuEfq4jO/BdJP8GRJem9c/PHXIllWc44/KWl8vr29WP4tMQwL7G4+9NdDGlKIoo3pRpUn0xtiGMg3vS2RhU5fXmA4aEKU6Q7JGeqErmexwPD+Fh68J2J7/q13Fn9w/9/+d3e1lMdwCfSbG4nqXTq/z1TooTmGLAEy13GB7I0nf+t1Ci6d5SsnQPHbuEpO+Qt/i+URq6iWz4Iudv0WSxP0BpLY+3ThI5aoO0ck9MgFAAAAAElFTkSuQmCC" />
        </div>
        <div className="col-md-4 col-sm-12 text-md-center text-sm-start">
        <h6 style={{fontWeight: 'light',}}>HNG Internship 9 Frontend Task</h6>
        </div>
        <div className="col-md-4 col-sm-12 text-md-end text-sm-start">
        <img style={{height: 80, width: 150}} src="https://training.zuri.team/ingresive.jpg" />
        </div>
    </div>
  </div>
  <Outlet />
</>
    );
  }
}


export default LinkTree;
