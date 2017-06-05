import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutAction} from '../../store/actions';
import store from '../../store';
import PropTypes from 'prop-types';
import Navbar from '../../components/navbar';

const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logoutAction()),
});


class Create extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
    console.log("CREATE");
  }


  render() {
    return (
      <div>
       <Navbar user={this.state.user} />
      <div >ddddddd</div>
      </div>
    );
  }
}
Create.propTypes = {
  user: PropTypes.object,
};
Create.defaultProps = {
  user: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
