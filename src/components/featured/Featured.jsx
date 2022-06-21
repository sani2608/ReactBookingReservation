import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/684533.webp?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o="
          alt="vs"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Delhi</h1>
          <h2>12 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/684764.webp?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o="
          alt="vs"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Mysore</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/684727.webp?k=a6fd59b0c31df52ae2a907dcf2441c7842bb56e2e68d89bffd2398024c0812d3&o="
          alt="vs"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Agra</h1>
          <h2>23 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
