import React from "react";
import './description.css';
import Logo from '../../assets/dummy.png';
import Wing from '../../assets/wing.png';

const Description = ({description, companyname, employees}) => {
  return (
<div className="company-header-container">
        <div className="company-header-left">
          <div className="company-header">
            <div className="company-header-logo"></div>
            <div className="company-header-h1">
            <img src={Logo} alt="company-logo" />
            <h1 >{companyname}</h1>
            {/* <h1 >Salesforce CRM</h1> */}
            </div>
          </div>
          <div className="company-description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus iste laboriosam voluptas
              aspernatur adipisci hic ipsum. Vel maiores tempora modi ab
              asperiores aliquam necessitatibus eum consequatur, ducimus ut quas
              explicabo.adipisicing elit. Voluptatum sapiente reiciendis
              dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Hic ratione architecto debitis non iusto rem officia laboriosam
              sit, fuga nisi voluptas voluptatum excepturi labore cum maxime
              doloribus quidem? Ad, cum? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum vero iusto voluptatem deleniti
              incidunt ex eligendi fugiat distinctio modi odio, impedit vitae
              consequuntur nam aliquid minus doloribus quia! Enim, temporibus!
              eligendi cupiditate, pariatur id illo repellat, saepe sequi dolor.
              Quam cum aut culpa dolor repellendus quae voluptas facilis!
            </p> */}
            <p>{description}</p>
          </div>
        </div>
        <div className="company-header-right">
          <div className="company-header-right-flex">
          <h1>THE ENTERPRISES MONITORED THROUGH <span>{companyname}</span></h1>
            <div className="company-header-logo">
             <img src={Wing} alt="" />
             <h1>{employees}</h1>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Description;
