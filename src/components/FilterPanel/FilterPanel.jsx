import React, { Component } from "react";
import "./filterPanel.css";

export default class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanel: true,
      classPanel: "filter__modal",
    }
  };
    
  graph_block = [0, 1, 2, 3];

  handleSlider = () => {
    if (this.state.isPanel) this.setState({ classPanel: "filter__modal filter__modal_hide"});
      else this.setState({ classPanel: "filter__modal"});
    this.setState({ isPanel: !this.state.isPanel});
  }

  render() {
    return (
      <div className={this.state.classPanel}>
        <div className="filter__modal__content">
          <div className="filter__modal__header">
            <span><b>Фильтры:</b></span>

            {this.state.isPanel ? 
              <button className="filter__slide_right" 
                      onClick={this.handleSlider}>
                        &lt;&lt;
              </button>
              : 
              <button className="filter__slide_right"
                      onClick={this.handleSlider}>
                        &gt;&gt;
              </button>
            }
          </div>
          <div className="filter__modal__body">
            { this.graph_block.map( block => <div className="filter__graph_block"></div> )
            }
            { this.graph_block.map( paragraph => <p className="filter__paragraph">+</p> )
            }
          </div>
        </div>
      </div>
    )
  };
};
