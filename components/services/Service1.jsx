import Link from "next/link";

const services = [
  {
    iconSrc: "/images/icon/icon_104.svg",
    title: "Home Loan",
    delayAnim: 0,
  },
  {
    iconSrc: "/images/icon/icon_105.svg",
    title: "Refinance Loan",
    delayAnim: 100,
  },
  {
    iconSrc: "/images/icon/icon_106.svg",
    title: "Investment Loan ",
    delayAnim: 200,
  },
  {
    iconSrc: "/images/icon/icon_107.svg",
    title: "Business Loan",
    delayAnim: 300,
  },
  {
    iconSrc: "/images/icon/icon_104.svg",
    title: "Car Loan ",
    delayAnim: 0,
  },
  {
    iconSrc: "/images/icon/icon_105.svg",
    title: "Asset Finance",
    delayAnim: 100,
  },
  {
    iconSrc: "/images/icon/icon_106.svg",
    title: "Debt Consolidation",
    delayAnim: 200,
  },
  {
    iconSrc: "/images/icon/icon_107.svg",
    title: "Cashflow Finance",
    delayAnim: 300,
  },
];



const Service1 = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={service.delay}
          key={index}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-40">
            <div className="icon">
              <img
                src={service.iconSrc}
                alt="icon"
                className="lazy-img m-auto"
              />
            </div>
            <p className="fs-20 m0 pt-20">I want</p>
            <h4 className="tx-dark">{service.title}</h4>
            <Link
              href="/pages-menu/service-details"
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service1;
