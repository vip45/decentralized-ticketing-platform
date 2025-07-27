import React, { useState } from "react";
import con1 from '../assets/con1.jpg'
import { Link } from "react-router-dom";

const Upcoming = () => {
    const [filter,setFilter] = useState('Filter');
  return (
    <div className="upcoming-events w-100 bg-white py-md-5 py-3 ">
      <div className="upcoming-events-heading container d-flex justify-content-between align-items-center mb-3 mb-md-5">
        <p className="upcoming-title">Upcoming Events</p>
        <div className="dropdown custom-dropdown">
          <button
            className="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filter}
          </button>
          <ul className="dropdown-menu">
            <li>
              <p className="dropdown-item" onClick={() => setFilter("All")}>
                All
              </p>
            </li>
            <li>
              <p
                className="dropdown-item"
                onClick={() => setFilter("This Week")}
              >
                This Week
              </p>
            </li>
            <li>
              <p
                className="dropdown-item"
                onClick={() => setFilter("This Month")}
              >
                This Month
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="upcoming-events-list container d-flex justify-content-center align-items-center flex-wrap gap-5">
        <Link to="/events/1">
          <div className="upcoming-event-card">
            <img src={con1} alt="" width="340px" height="200px" />
            <div className="upcoming-details d-flex justify-content-between gap-3 p-3">
              <div className="upcoming-date">
                <p>APR</p>
                <p>14</p>
              </div>
              <div className="upcoming-data">
                <p>Wonder Girls 2010 Wonder Girls World Tour San Francisco</p>
                <p>
                  We’ll get you directly seated and inside for you to enjoy the
                  show.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/events/1">
          <div className="upcoming-event-card">
            <img src={con1} alt="" width="340px" height="200px" />
            <div className="upcoming-details d-flex justify-content-between gap-3 p-3">
              <div className="upcoming-date">
                <p>APR</p>
                <p>14</p>
              </div>
              <div className="upcoming-data">
                <p>Wonder Girls 2010 Wonder Girls World Tour San Francisco</p>
                <p>
                  We’ll get you directly seated and inside for you to enjoy the
                  show.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/events/1">
          <div className="upcoming-event-card">
            <img src={con1} alt="" width="340px" height="200px" />
            <div className="upcoming-details d-flex justify-content-between gap-3 p-3">
              <div className="upcoming-date">
                <p>APR</p>
                <p>14</p>
              </div>
              <div className="upcoming-data">
                <p>Wonder Girls 2010 Wonder Girls World Tour San Francisco</p>
                <p>
                  We’ll get you directly seated and inside for you to enjoy the
                  show.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/events/1">
          <div className="upcoming-event-card">
            <img src={con1} alt="" width="340px" height="200px" />
            <div className="upcoming-details d-flex justify-content-between gap-3 p-3">
              <div className="upcoming-date">
                <p>APR</p>
                <p>14</p>
              </div>
              <div className="upcoming-data">
                <p>Wonder Girls 2010 Wonder Girls World Tour San Francisco</p>
                <p>
                  We’ll get you directly seated and inside for you to enjoy the
                  show.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/events/1">
          <div className="upcoming-event-card">
            <img src={con1} alt="" width="340px" height="200px" />
            <div className="upcoming-details d-flex justify-content-between gap-3 p-3">
              <div className="upcoming-date">
                <p>APR</p>
                <p>14</p>
              </div>
              <div className="upcoming-data">
                <p>Wonder Girls 2010 Wonder Girls World Tour San Francisco</p>
                <p>
                  We’ll get you directly seated and inside for you to enjoy the
                  show.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/events/1">
          <div className="upcoming-event-card">
            <img src={con1} alt="" width="340px" height="200px" />
            <div className="upcoming-details d-flex justify-content-between gap-3 p-3">
              <div className="upcoming-date">
                <p>APR</p>
                <p>14</p>
              </div>
              <div className="upcoming-data">
                <p>Wonder Girls 2010 Wonder Girls World Tour San Francisco</p>
                <p>
                  We’ll get you directly seated and inside for you to enjoy the
                  show.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Upcoming;
