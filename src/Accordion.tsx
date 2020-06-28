import React from "react";

export const Accordion = () => {
  return (
    <div className="accordion shadow-soft rounded" id="accordionExample1">
      <div className="card card-sm card-body bg-primary border-light mb-0">
        <a href="#panel-1" data-target="#panel-1" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
          <span className="h6 mb-0 font-weight-bold">Our Company</span>
          <span className="icon"><span className="fas fa-plus"></span></span>
        </a>
        <div className="collapse" id="panel-1">
          <div className="pt-3">
            <p className="mb-0">
              At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also
              helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.
                </p>
          </div>
        </div>
      </div>
      <div className="card card-sm card-body bg-primary border-light mb-0">
        <a href="#panel-2" data-target="#panel-2" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
          <span className="h6 mb-0 font-weight-bold">Neumorph Components</span>
          <span className="icon"><span className="fas fa-plus"></span></span>
        </a>
        <div className="collapse" id="panel-2">
          <div className="pt-3">
            <p className="mb-0">
              At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also
                    helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision. </p>
          </div>
        </div>
      </div>
      <div className="card card-sm card-body bg-primary border-light">
        <a href="#panel-3" data-target="#panel-3" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
          <span className="h6 mb-0 font-weight-bold">Licenses</span>
          <span className="icon"><span className="fas fa-plus"></span></span>
        </a>
        <div className="collapse" id="panel-3">
          <div className="pt-3">
            <p className="mb-0">
              At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also
                    helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
