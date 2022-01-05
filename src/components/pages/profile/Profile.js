import React, { Component } from 'react';
import ImgProfile from "../../images/me.jpg";


export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatarImg">
            <img className="circle responsive-img"
            src={ImgProfile}
            alt="Diego Rojas"
            />
        </div>
        <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
            <div className="card-content center social">
                <h2 className="grey-text text-lighten-3">
                    <strong>DIEGO ROJAS AVELLANEDA</strong>
                </h2>
                <h5 className="grey-text text-lighten-1">ADMINISTRADOR DOCUMENTAL  TP : Nº 2782</h5>

                <a href="https://www.linkedin.com/in/diegorojasavellaneda/" target="blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/Drojasav" target="blank">
                    <i className="fab fa-github-square fa-2x"></i>
                </a>
                <a href="drojas.avellaneda@gmail.com" target="blank">
                    <i class="fas fa-envelope-square fa-2x"></i>
                </a>
            </div>
        </div>
        <p className="grey-text text-lighten-3 pt">
                </p>

        <p className="grey-text text-lighten-3 pt">
                </p>

        <p className="grey-text text-lighten-3 pt">
                </p>

        <div className="card light-blue darken-4 z-depth-0">
            <div className="card-content">
                <h6 className="white-text">
                    <strong>PERFIL PROFESIONAL</strong>
                </h6>
                <hr />

                <p className="grey-text text-lighten-3 pt">
                </p>

                <p className="grey-text text-lighten-3 pt">
                </p>



                <h6 className="white-text">

                <p className="grey-text text-lighten-3 pt">
                Gestor Documental con más de 10 años de experiencia ,Realizando asesorías en el desarrollo de la función archivística y en la implementación de Herramientas
                Documentales como:
                </p>

                <p className="grey-text text-lighten-3 pt">
                </p>

                <p className="grey-text text-lighten-3 pt">
                </p>


                <p className="grey-text text-lighten-3 pt">
                - Plan Institucional de Archivos - PINAR
                </p>
                
                <p className="grey-text text-lighten-3 pt">
                </p>

                <p className="grey-text text-lighten-3 pt">
                - Plan de Gestión Documental - PGD 
                </p>

                <p className="grey-text text-lighten-3 pt">
                </p>

                <p className="grey-text text-lighten-3 pt">
                - Tablas De Retención Documental - TRD
                </p>

                <p className="grey-text text-lighten-3 pt">
                </p>

                <p className="grey-text text-lighten-3 pt">
                - FORMATO UNICO DE INVENTARIO DOCUMENTAL - FUID.
                </p>

                <p className="grey-text text-lighten-3 pt">
                </p>

                <p className="grey-text text-lighten-3 pt">
                </p>

                <p className="grey-text text-lighten-3 pt">
                conforme a la ley 594 de 2000 Ley General De Archivos y normatividad complementaria , Diseñando, modelando y actualizando y realizando seguimiento a cada uno de los
                procesos de Gestión Documental armonizados y alineados con El sistema De Gestión De Calidad y la Gestión de procesos
                de Negocio (BPM).
                </p>




                </h6>

            </div>
        </div>
      </div>
    )
  }
}
