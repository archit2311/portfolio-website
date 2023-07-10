import React from "react";
import "./project.css";
function Project() {
  return (
    <div className="projects" id="project">
      <h1 style={{color:"orangered"}}>Projects</h1>
      <div className="project-container">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://colorlib.com/wp/wp-content/uploads/sites/2/car-rental-wordpress-themes.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Get n Go</h5>
            <p className="card-text">
            A full-stack website that addresses the issue of arriving late for work. It offers the ability to
reserve cars at your convenience.
            </p>
            <a href="https://github.com/archit2311/GetnGo" target="_blank" className="btn btn-primary">
             View
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://images.wisetour.com/hostel-room-with-four-bunk-beds.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">VITB Hostel Allocation</h5>
            <p className="card-text">
            A comprehensive website created for VIT students offering the option to apply for a hostel
room and have one assigned based on preferences to simplify the procedure of hostel assignment.
            </p>
            <a href="https://github.com/archit2311" target="_blank" className="btn btn-primary">
            View
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://i0.wp.com/www.thestartupfounder.com/wp-content/uploads/2022/10/Link-Shortener.jpg?fit=640%2C480&ssl=1" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">URL Shrinker</h5>
            <p className="card-text">
            Shortens to a nice looking and easy to post URL.
            </p>
            <a href="https://github.com/archit2311" target="_blank" className="btn btn-primary">
            View
            </a>
          </div>
        </div>

{/*         
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://images.wisetour.com/hostel-room-with-four-bunk-beds.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">VITB Hostel Allocation</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
            View
            </a>
          </div>
        </div>

        
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://images.wisetour.com/hostel-room-with-four-bunk-beds.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">VITB Hostel Allocation</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
            View
            </a>
          </div>
        </div>

        
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="https://images.wisetour.com/hostel-room-with-four-bunk-beds.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">VITB Hostel Allocation</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
            View
            </a>
          </div>
        </div> */}
        
      </div>
    </div>
  );
}

export default Project;
