import React, { useState } from "react";

export default function FilterButton(props) {
  const [isActive, setActive] = useState(false);
  const { handleClick } = props;
  const updateButtonState = () => {
    setActive(!isActive);
    return handleClick(isActive);
  };

  const className = isActive
    ? "filter-button filter-button--active"
    : "filter-button";

  return (
    <button className={className} onClick={() => updateButtonState()}>
      <i className="fal fa-filter"></i>
    </button>
  );
}
