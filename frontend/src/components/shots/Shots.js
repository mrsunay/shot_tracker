import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getShots, deleteShots } from "../../actions/shots";
import moment from "moment";

export class Shots extends Component {
  static propTypes = {
    shots: PropTypes.array.isRequired,
    getShots: PropTypes.func.isRequired,
    deleteShots: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getShots();
  }

  render() {
    return (
      <Fragment>
        <h2>Shots</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Threes Made</th>
              <th>Threes Attempted</th>
              <th>Twos Made</th>
              <th>Twos Attempted</th>
              <th>Layups Made</th>
              <th>Layups Attempted</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.shots.map(shots => (
              <tr key={shots.id}>
                <td>{moment(shots.workout_date).format("MMM Do YYYY")}</td>
                <td>{shots.threes_made}</td>
                <td>{shots.threes_attempted}</td>
                <td>{shots.twos_made}</td>
                <td>{shots.twos_attempted}</td>
                <td>{shots.layups_made}</td>
                <td>{shots.layups_attempted}</td>
                <td>
                  <button
                    onClick={this.props.deleteShots.bind(this, shots.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  shots: state.shots.shots
});

export default connect(mapStateToProps, { getShots, deleteShots })(Shots);
