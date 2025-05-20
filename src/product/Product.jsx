import React from "react";

export default function Product() {
  return (
    <div className="mt-4">
      <div className="list-group ">
        <button
          type="button"
          className="list-group-item list-group-item-action list-group-item-primary"
        >
          My Accounts
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action  list-group-item-success"
        >
          My Personal Info
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          My Search History
        </button>
      </div>
    </div>
  );
}
