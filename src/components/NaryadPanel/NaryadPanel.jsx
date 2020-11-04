import React, { Component } from "react";
import "./naryadPanel.css";

export default class Naryad_panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanel: true,
      classPanel: "modal",
    }
  };

  handleSlider = () => {
    if (this.state.isPanel) this.setState({ classPanel: "modal modal_hide"});
      else this.setState({ classPanel: "modal"});
    this.setState({ isPanel: !this.state.isPanel});
  }    

  render() {
    return (
      <div className={this.state.classPanel}>
        <div className="modal__content">
          <div className="modal__header">
            {this.state.isPanel ? 
              <button className="slide_right" 
                      onClick={this.handleSlider}>
                        &gt;&gt;
              </button>
              : 
              <button className="slide_right"
                      onClick={this.handleSlider}>
                        &lt;&lt;
              </button>
            }            
            <span>Создание наряда:</span>
            <span class="close_btn" onClick={this.handleSlider}>&times;</span>
          </div>
          <div className="modal__body">
            <label>Дата
              <input type="date" name="date" value="2020-10-25" />
            </label>
            <br />
            <label>Ответственный
              <input type="text" name="fio" value="Иванов Иван Иванович" />
            </label>
            <br />
            <label>Соисполнители
              <button>Маршрут</button>
              <input type="text" name="co" value="Выберите соисполнителей" />
            </label>
            <br />

            <table cellSpacing="0">
              <tr>
                <td width="60%"></td>
                <td width="15%" className="centered">KM:</td>
                <td width="20%"></td>
                <td width="5%"></td>
              </tr>
              <tr>                
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime a assumenda, deserunt officia nam, veniam facere corporis, molestiae libero reiciendis natus. Saepe
                </td>
                <td className="centered">
                  0,7
                </td>
                <td className="greyBG">
                  2873161<br/>
                  24.10.2020
                </td>
                <td className="centered">&times;</td>
              </tr>
              <tr>                
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime a assumenda, deserunt officia nam, veniam facere corporis, molestiae libero reiciendis natus. Saepe
                </td>
                <td className="centered">
                  1,2
                </td>
                <td className="greyBG">
                  2873249<br/>
                  27.10.2020
                </td>
                <td className="centered">&times;</td>
              </tr>
              <tr>                
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime a assumenda, deserunt officia nam, veniam facere corporis, molestiae libero reiciendis natus. Saepe
                </td>
                <td className="centered">
                  3,1
                </td>
                <td className="greyBG">
                  2873328<br/>
                  29.10.2020
                </td>
                <td className="centered">&times;</td>
              </tr>
              <tr>                
                <td className="itogo">Итого</td>
                <td className="centered">5,0</td>
                <td></td>
                <td className="centered"></td>
              </tr>
            </table>
            </div>
        </div>
      </div>
    )
  };
};
