import React, { useState, useEffect } from "react";
import UserList from "../UserList/UserList";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { ageTableHeaders, dropdownValues } from "../../contants/Constant";
import DropDown from "../Dropdown/DropDown";
import { fetchUserDataByItem } from "../../store/Actions/AgeAction";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    marginLeft: "20%",
  },
}));

const AgeDemographic = (props) => {
  const { data, fetchUserDetailByItem } = props;
  const [selectedItem, setSelectedItem] = useState("");
  const classes = useStyles();

  useEffect(() => {
    if (selectedItem) {
      fetchUserDetailByItem(selectedItem);
    }
  }, [selectedItem]);

  const handleChange = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={classes.root}>
      <h1>Age Demographic With: {selectedItem}</h1>
      <DropDown items={dropdownValues} handleChange={handleChange} />
      <UserList tableHeader={ageTableHeaders} data={data} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.AgeReducer.ages,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserDetailByItem: (selectedItem) => {
      dispatch(fetchUserDataByItem(selectedItem));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AgeDemographic);
