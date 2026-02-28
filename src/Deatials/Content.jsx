import React from "react";
import { useContext } from "react";
import { apiValue } from "../Data/AllData";
import { useParams } from "react-router-dom";
import "./Content.css";

function Content() {
  const { data, error } = useContext(apiValue) || {};
  const { id } = useParams();

  const course = data?.courses?.find((course) => course.id === Number(id));

  const mentor = data?.mentors?.find(
    (mentor) => mentor.name === course?.mentor,
  );
  if (error) {
    return <h3>Failed to load data.</h3>;
  }

  if (!data) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 Click">
            <button className="px-4 py-3 rounded">Description</button>
            <button
              className="px-4 mx-2 py-3 rounded"
              onClick={() => {
                document
                  .getElementById("instractor")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Instructor
            </button>
            <button
              className="px-4 mr-3 py-3 rounded"
              onClick={() => {
                document
                  .getElementById("syllabus")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Syllabus
            </button>
            <button className="px-4 py-3 rounded">Reviews</button>
            <hr />
          </div>
          <div className="col-md-8">
            <h3 className="font-weight-bold text-dark">Course Description</h3>
            <p>
              This interactive e-learning course will introduce you to User
              Experience (UX) design, the art of creating <br />
              products and services that are intuitive, enjoyable, and
              user-friendly. Gain a solid foundation in UX principles <br />
              and learn to apply them in real-world scenarios through engaging
              modules and interactive exercises.
            </p>
            <h3 className="font-weight-bold text-dark">Certification</h3>
            <p>
              At Byway, we understand the significance of formal recognition for
              your hard work and dedication to <br /> continuous learning. Upon
              successful completion of our courses, you will earn a prestigious
              certification that <br /> not only validates your expertise but
              also opens doors to new opportunities in your chosen field.
              <hr />
            </p>
          </div>
          <div className="col-md-8" id="instractor">
            <h3 className="mb-2 font-weight-bold text-dark">Instructor</h3>
            <h4 className="text-primary">{mentor?.name}</h4>
            <h6 className="text-dark">{mentor?.jobTitle}</h6>
            <img
              src="/img/Frame 427318979.png"
              alt="photoinstractor"
              className="my-2"
            />
            <p>
              With over a decade of industry experience, Ronald brings a wealth
              of practical knowledge to the classroom. He <br /> has played a
              pivotal role in designing user-centric interfaces for renowned
              tech companies, ensuring seamless <br /> and engaging user
              experiences.
            </p>
            <hr />
          </div>
          <div className="col-md-8 ">
            <h4 className="my-3 text-dark font-weight-bold" id="syllabus">
              Syllabus
            </h4>
            <div className="border rounded">
              <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
                <div>
                  <span className="me-2">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                  Introduction to {mentor?.jobTitle}
                </div>
                <div className="text-muted small">5 Lessons | 1 hour</div>
              </div>

              <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
                <div>
                  <span className="me-2">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                  Basics of {mentor?.jobTitle}
                </div>
                <div className="text-muted small">5 Lessons | 1 hour</div>
              </div>

              <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
                <div>
                  <span className="me-2">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                  Elements of {mentor?.jobTitle}
                </div>
                <div className="text-muted small">5 Lessons | 1 hour</div>
              </div>

              <div className="d-flex justify-content-between align-items-center p-4">
                <div>
                  <span className="me-2">
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                  Visual Design Principles
                </div>
                <div className="text-muted small">5 Lessons | 1 hour</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
