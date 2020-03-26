import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addShots } from "../../actions/shots";

export class Form extends Component {
  state = {
    threes_made: "",
    threes_attempted: "",
    twos_made: "",
    twos_attempted: "",
    layups_made: "",
    layups_attempted: ""
  };

  static propTypes = {
    addShots: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      threes_made,
      threes_attempted,
      twos_made,
      twos_attempted,
      layups_made,
      layups_attempted
    } = this.state;

    const shots = {
      threes_made,
      threes_attempted,
      twos_made,
      twos_attempted,
      layups_made,
      layups_attempted
    };

    this.props.addShots(shots);

    this.setState({
      threes_made: "",
      threes_attempted: "",
      twos_made: "",
      twos_attempted: "",
      layups_made: "",
      layups_attempted: ""
    });
  };

  render() {
    const {
      threes_made,
      threes_attempted,
      twos_made,
      twos_attempted,
      layups_made,
      layups_attempted
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Workout Info</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Threes Made</label>
            <input
              className="form-control"
              type="text"
              name="threes_made"
              onChange={this.onChange}
              value={threes_made}
            />
          </div>
          <div className="form-group">
            <label>Threes Attempted</label>
            <input
              className="form-control"
              type="text"
              name="threes_attempted"
              onChange={this.onChange}
              value={threes_attempted}
            />
          </div>
          <div className="form-group">
            <label>Twos Made</label>
            <input
              className="form-control"
              type="text"
              name="twos_made"
              onChange={this.onChange}
              value={twos_made}
            />
          </div>
          <div className="form-group">
            <label>Twos Attempted</label>
            <input
              className="form-control"
              type="text"
              name="twos_attempted"
              onChange={this.onChange}
              value={twos_attempted}
            />
          </div>
          <div className="form-group">
            <label>Layups Made</label>
            <input
              className="form-control"
              type="text"
              name="layups_made"
              onChange={this.onChange}
              value={layups_made}
            />
          </div>
          <div className="form-group">
            <label>Layups Attempted</label>
            <input
              className="form-control"
              type="text"
              name="layups_attempted"
              onChange={this.onChange}
              value={layups_attempted}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addShots })(Form);
