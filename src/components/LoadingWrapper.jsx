import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

const LoadingWrapper = ({ children, loading }) => {
  return <div>{loading ? <CircularProgress /> : children}</div>;
};

export default LoadingWrapper;

LoadingWrapper.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool,
};
