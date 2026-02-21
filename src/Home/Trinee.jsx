import React, { useContext } from "react";
import { Apidata } from "../Data/datainstractor";
import "./courses.css";

function Trinee() {
  const data = useContext(Apidata);

  // Handilg Errore
  if (!data || data.length === 0) {
    return <h3 className="font-weight-bold text-primary">Loading...</h3>;
  }
  return (
    <div>
      <div className="Instractor my-4">
        <div className="container">
          <div className="row">
            <h2 className="text-dark font-weight-bold mb-5">Top Instructors</h2>

            {data.map((instructor) =>
              instructor.id > 6 ? (
                <div className="col-md-2 mb-4" key={instructor.id}>
                  <div className="card h-100">
                    <img
                      src={instructor.image}
                      className="card-img-top p-3"
                      alt={instructor.title}
                    />
                    <div className="card-body">
                      <h6 className="card-title font-weight-bold text-center">
                        {instructor.name}
                      </h6>
                      <p className="card-text text-secondary">
                        by {instructor.title}
                      </p>
                      <hr />
                      <div className="icons">
                        <i class="fa-solid fa-star"></i>
                        {instructor.rating}
                        <span className="ml-4">{instructor.students}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trinee;
