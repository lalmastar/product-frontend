import React, { useEffect, useState } from "react";
import doctorProfile from "../assets/doctor.png";


const Doctor = ({firstname, lastname, department, title, company, seniority, personLinkedinUrl, website, companyLinkedinUrl, city, state, country}) => {

  return (
    <div className="dr-profile-main-div">
      <div className="card-div">
        <div className="md-list-box-thumb">
          <img src={doctorProfile} />
        </div>
        <div className="list-box-content">
          <div className="pull-left">
            <div className="lp-grid-box-description">
              <p>{department}</p>
              <h2 className="h2-title">
                {firstname} {lastname} <i className="fa-solid fa-award" />
              </h2>
              <div className="star-list">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="status">
                <p className="md-rat-exp">{title}</p>
                <p className="md-rat-exp">{company}</p>
                <p className="md-rat-exp">{seniority}</p>
              </div>
              <div className="site-link">
                <p>
                  {" "}
                  <i className="fa-brands fa-linkedin" />{" "}
                  <a href={personLinkedinUrl}>
                    Linked In
                  </a>{" "}
                  <i className="fa-solid fa-earth-americas" />{" "}
                  <a href={website}>Website Link</a>{" "}
                  <i className="fa-solid fa-earth-americas" />{" "}
                  <a href={companyLinkedinUrl}>
                    Company Link{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="pull-right">
            <ul className="md-experiences">
              <li>
                <i className="fa-solid fa-city" /> {city}
              </li>
              <li>
                <i className="fa-solid fa-earth-americas" /> {state}
              </li>
              <li>
                <i className="fa-solid fa-location-dot" /> {country}
              </li>
            </ul>

            {/* <div className="mp-list-view-right-bottom-content">
              <div className="mp-profile-location-book-outer">
                <a
                  href="https://medicalpro.listingprowp.com/listing/dr-sara-petersen/"
                  className="mp-profile-location-book"
                >
                  {" "}
                  Book Appoinment
                </a>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
