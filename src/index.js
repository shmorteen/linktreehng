import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";





class Linktree extends React.Component {
 

  render() {
    return (
      <>
  <div className="container-fluid vh-100 vw-100">
    <div className="d-flex flex-column align-items-center pt-5 px-md-5">
      <div className="d-flex flex-row justify-content-center">
        <div className="d-md-flex d-none flex-column align-items-center mb-3" style={{marginLeft: 200 }}>
          <img id="profile__img" alt="ProImg" src="assets/proimag.jfif" style={{borderRadius: 100, height: 50, width: 50}}/>
          <h6 id="twitter" className="mt-2">Shmorteen</h6>
          <h6 id="slack" className="d-none">Shmorteen</h6>
        </div>
        <div className="d-flex d-md-none flex-column align-items-center mb-3">
          <img id="profile__img" alt="ProImg" src="assets/proimag.jfif" style={{borderRadius: 100, height: 50, width: 50}}/>
          <h6 id="twitter" className="mt-2">Shmorteen</h6>
          <h6 id="slack" className="d-none">Shmorteen</h6>
        </div>
        <div className="d-md-flex d-none" style={{marginLeft: 200 }} >
          <img src="assets/more (2).png" style={{width: 10, height: 15 }}/>
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
          title="Books on Design and Coding can be found here"
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
            title="subtext"
            style={{
              textDecoration: "none",
              fontWeight: "bolder",
              color: "black",
              borderRadius: 10
            }}
            href="http://books.zuri.team/python-for-beginners?ref_id=Mateen"
          >
            Python Books
          </a>
        </div>
        <div
          className="d-flex flex-row d-inline-block justify-content-center align-items-center bg-light mt-3"
          style={{ height: 60, borderRadius: 10 }}
        >
          <a className="btn" id="pitch"
            title="subtext"
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
            Design Books
          </a>
        </div>
      </div>
      <div className="d-flex flex-row">
        {/* <img className="mx-2" src="assets/blog-icon.png" /> */}
        {/* <img src="assets/blog-icon.png" /> */}
      </div>
    </div>
    <hr className="mx-md-5 mt-5" />
    <div className="mx-5 d-flex flex-row justify-content-between">
      {/* <img src="assets/blog-icon.png" />
      <img src="assets/blog-icon.png" />
      <img src="assets/blog-icon.png" /> */}
    </div>
  </div>
</>

    );
  }
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Linktree />);
