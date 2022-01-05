import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0 hide-on-med-and-down pt">
          <div className="card-content social">
            <h2 className="grey-text text-darken-3">
              <strong>DIEGO ROJAS AVELLANEDA</strong>
            </h2>
            <h5 className="grey-text text-darken-1">ADMINISTRADOR DOCUMENTAL - TP : Nº 2782</h5>
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
      </div>
    )
  }
}
