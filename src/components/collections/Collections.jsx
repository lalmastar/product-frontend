import React from "react";
import "./collections.css";
import Collection from "./Collection";

const Collections = () => {
  return (
    <div className="collections-container">
      <h2 className="h2-header">Collections related to Salesforce CRM</h2>
      <div className="collections">
        <div className="flex-container">
        <Collection/>
        </div>
      </div>
    </div>
  );
};

export default Collections;
