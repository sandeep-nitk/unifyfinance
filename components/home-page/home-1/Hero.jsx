import Image from "next/image";
import React from "react";
import Link from "next/link";
const Hero1 = () => {
  const options = [
    { value: 0, display: "Select insurance type.." },
    { value: 1, display: "Life Insurance" },
    { value: 2, display: "Health insurance" },
    { value: 3, display: "Property insurance" },
    { value: 4, display: "Motor insurance" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h2 className="main-text fw-500 tx-dark">
              Simplifying the loan process for your{" "}
              <span style={{ color: "#f58634" }}>Home</span> &amp; Future.
            </h2>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Your trusted mortgage brokers in Melbourne. Book an obligation
              free call today
            </p>
            <div className="d-sm-flex justify-content-center align-items-center">
              <Link
                href="/contact"
                className="tran3s fs-17 fw-500 btn-three mb-25 ms-2 me-3"
              >
                <i className="fas fa-phone" />

                <span> 1800 864393 </span>
              </Link>

              <Link
                href="/contact"
                className="  tran3s fs-17 fw-500 btn-three mb-25 ms-2 me-3"
              >
                Request a callback
              </Link>
            </div>
            {/* <form
              className="search-area d-md-inline-flex m-auto"
              onSubmit={handleSubmit}
            >
              <select className="nice-select form-select">
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.display}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="zip-code-input"
                placeholder="Your Zip code"
              />
              <button className="fw-500 text-white tran3s" type="submit">
                Search
              </button>
            </form> */}
            {/* End form */}

            <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
                <img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span>An Unify finance approved by the UICO.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <Image
        width={487}
        height={649}
        src="/images/assets/ils_11.png"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
        layout="intrinsic"
      />
      <Image
        width={537}
        height={658}
        src="/images/assets/ils_12.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
        layout="intrinsic"
      />
    </div>
  );
};

export default Hero1;
