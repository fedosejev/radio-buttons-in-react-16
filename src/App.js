import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:", this.state.selectedOption);
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Option 1
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Option 2
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Option 3
                </label>
              </div>
              <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
