import React, { createElement } from "react";

const CompWithProp = ({ elementType, className, children }) => (
  createElement(
    elementType,
    {
      className,

    },
    children
  )
)

export default CompWithProp;
