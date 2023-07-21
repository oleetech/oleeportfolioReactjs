import React from "react";
import Config from "../config.json";
import uiux from "../images/services/ui-ux.svg";
function Experience() {
  return (
    <div className="section px-3 px-lg-4 pt-5" id="experience">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">Experience</h2>
        </div>
        <div className="row">
          {Config.experience.map((exp) => (
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-header px-3 py-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3 className="h5 mb-1">{exp.title}</h3>
                      <div className="text-muted text-small">
                        {exp.position} <small>{exp.duration}</small>
                      </div>
                    </div>
                    <img src={uiux} width={48} height={48} alt="ui-ux" />
                  </div>
                </div>
                <div className="card-body px-3 py-2">
                  <p>{exp.description1}</p>
                  <p>{exp.description2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Experience;
