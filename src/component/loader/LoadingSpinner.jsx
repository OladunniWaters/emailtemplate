import React from "react";
import "./LoadingSpinner.scss";

export default function LoadingSpinner() {
  return (
    <>
      <div class="loader-wrapper">
        <div class="loader"></div>
        <h1 class='loader-h1'>Your order is been processed</h1>
      </div>
    </>
  );
}