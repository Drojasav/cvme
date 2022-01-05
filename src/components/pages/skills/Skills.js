import React, { Component } from 'react'
import ImgProfile from "../../images/CODE QR.jpg";


export default class Skills extends Component {
  render() {
    return (
      <div>


        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong>HABILIDADES PROFESIONALES </strong>
            </h6>
            <hr />

            <p className="grey-text text-lighten-3 pt">
                </p>

            <p className="grey-text text-lighten-3 pt">
                </p>


            <div className="row pt">
              <div className="col m6 s12">
              <h6 className="white-text">
                <p className="grey-text text-lighten-3">Planificación, innovación, análisis y organización.</p>
                </h6>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '89%'}}></div>
                </div>
              </div>
              
              <div className="col m6 s12">
              <h6 className="white-text">
                <p className="grey-text text-lighten-3">Arquitectura de La Información.</p>
                </h6>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '50%'}}></div>
                </div>
              </div>
            </div>

            <p className="grey-text text-lighten-3 pt">
                </p>

            <p className="grey-text text-lighten-3 pt">
                </p>

            <div className="row pt">
              <div className="col m6 s12">
              <h6 className="white-text">
                <p className="grey-text text-lighten-3">Diseño de Interfaces UI- UX</p>
                </h6>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '50%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
              <h6 className="white-text">
                <p className="grey-text text-lighten-3">BPM-BUSINESS PROCESS MANAGEMENT</p>
                </h6>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '50%'}}></div>
                </div>
              </div>
            </div>

            <p className="grey-text text-lighten-3 pt">
                </p>

            <p className="grey-text text-lighten-3 pt">
                </p>


                <div className="avatarImg">
            <img
            src={ImgProfile}
            alt="QR"
            />
        </div>

        <p className="grey-text text-lighten-3 pt">
                </p>

            <p className="grey-text text-lighten-3 pt">
                </p>

            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3"></p>

              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3"></p>

                
                <p className="grey-text text-lighten-3 pt">
                </p>

            <p className="grey-text text-lighten-3 pt">
                </p>




        
                
              </div>
            </div>
          </div>
        </div>
      </div>


      
    )

    
  }
}
