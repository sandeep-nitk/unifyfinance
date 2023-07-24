const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_108.svg",
    title: "We find the right loan for you.",
    content:
      "We analyze your situation and identify the most suitable loan options for your needs. We have access to 100s of loan products from multiple lenders",
  },
  {
    id: 2,
    icon: "/images/icon/icon_109.svg",
    title: "We simplify the complete loan Process",
    content:
      "We take care of the end to end process of your loan application. We work on your behalf and do all the legwork for you. ",
  },
  {
    id: 3,
    icon: "/images/icon/icon_110.svg",
    title: "Faster loan processing ",
    content:
      "We understand the loan process and paperwork required by the lenders. Our team works on your behalf for faster loan processing.",
  },
];










const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
