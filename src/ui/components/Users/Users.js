import React, { useEffect } from "react";
import UserList from "../UserList/UserList";
import { userTableHeaders } from "../../contants/Constant";
import { makeStyles } from "@material-ui/core/styles";
import { fetchUserData, isBinded } from "../../store/Actions/UserAction";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    marginLeft: "20%",
  },
});
const Users = (props) => {
  const classes = useStyles();
  const { users, fetchUserDetail } = props;
  useEffect(() => {
    if (users.length === 0) {
      fetchUserDetail();
    }
  }, [users]);
  return (
    <div className={classes.root}>
      <h1 className="title">All Users</h1>
      <p>Users and their age</p>
      <UserList tableHeader={userTableHeaders} data={users} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.UserReducer.userData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserDetail: () => {
      dispatch(fetchUserData());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
