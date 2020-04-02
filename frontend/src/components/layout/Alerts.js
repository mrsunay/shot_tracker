import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.threes_made)
        alert.error(`Threes Made: ${error.msg.threes_made.join()}`);
      if (error.msg.threes_attempted)
        alert.error(`Threes Attempted: ${error.msg.threes_attempted.join()}`);
      if (error.msg.twos_made)
        alert.error(`Twos Made: ${error.msg.twos_made.join()}`);
      if (error.msg.twos_attempted)
        alert.error(`Twos Attempted: ${error.msg.twos_attempted.join()}`);
      if (error.msg.layups_made)
        alert.error(`Layups Made: ${error.msg.layups_made.join()}`);
      if (error.msg.layups_attempted)
        alert.error(`Layups Made: ${error.msg.layups_attempted.join()}`);
      if (error.msg.username) alert.error(error.msg.username.join());
    }

    if (message !== prevProps.message) {
      if (message.deleteShots) alert.success(message.deleteShots);
      if (message.addShots) alert.success(message.addShots);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
