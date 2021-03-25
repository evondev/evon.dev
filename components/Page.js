import React from "react";
import Meta from "./Meta";
import PropTypes from "prop-types";
import { Fragment } from "react";

const Page = ({ options, children }) => {
  return (
    <Fragment>
      <Meta options={options} />
      {children}
    </Fragment>
  );
};

Page.propTypes = {
  children: PropTypes.any,
  options: PropTypes.object,
};

export default Page;
