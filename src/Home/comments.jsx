import React, { useContext, useState } from "react";
import { apiValue } from "../Data/AllData";

function Comments() {
    const { data, error } = useContext(apiValue) || {};
    const testimonials = data?.testimonials ?? [];
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;
    const [activeArrow, setActiveArrow] = useState(null);

    if (error) return <h3>Failed to load data.</h3>;
    if (!data) return <h3>Loading...</h3>;
    if (!testimonials.length) return null;

    const total = testimonials.length;

    const handlePrev = () => {
        if (total <= visibleCount) return;
        setActiveArrow("prev");
        setStartIndex((prev) => (prev - 1 + total) % total);
    };

    const handleNext = () => {
        if (total <= visibleCount) return;
        setActiveArrow("next");
        setStartIndex((prev) => (prev + 1) % total);
    };

    const visibleTestimonials =
        total <= visibleCount
            ? testimonials
            : Array.from({ length: visibleCount }, (_, i) => {
                const index = (startIndex + i) % total;
                return testimonials[index];
            });

    return (
        <div className="my-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-dark font-weight-bold mb-0">
                        What Our Customer Say
                        <br /> About Us
                    </h2>
                    <div>
                        <button
                            type="button"
                            className={`btn rounded-circle shadow-sm mr-2 ${activeArrow === "prev" ? "btn-primary text-white" : "btn-light"
                                }`}
                            onClick={handlePrev}
                            disabled={total <= visibleCount}
                        >
                            <i
                                className={`fa-solid fa-chevron-left ${activeArrow === "prev" ? "text-white" : "text-primary"
                                    }`}
                            />
                        </button>
                        <button
                            type="button"
                            className={`btn rounded-circle shadow-sm ${activeArrow === "next" ? "btn-primary text-white" : "btn-light"
                                }`}
                            onClick={handleNext}
                            disabled={total <= visibleCount}
                        >
                            <i
                                className={`fa-solid fa-chevron-right ${activeArrow === "next" ? "text-white" : "text-primary"
                                    }`}
                            />
                        </button>
                    </div>
                </div>

                <div className="row">
                    {visibleTestimonials.map((t, idx) => (
                        <div className="col-md-4 mb-4" key={t.id}>
                            <div className="card h-100 border-0 shadow-sm p-4">
                                <i
                                    className="fa-solid fa-quote-left text-primary mb-3"
                                    style={{ fontSize: "32px" }}
                                />
                                <p className="text-secondary mb-4">"{t.comment}"</p>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                        }}
                                    />
                                    <div className="ml-3">
                                        <h6 className="font-weight-bold mb-0">{t.name}</h6>
                                        <small className="text-secondary">{t.job}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Comments;
