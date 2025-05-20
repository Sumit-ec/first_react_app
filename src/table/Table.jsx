import React from "react";
import "./Table.css";

export default function Table() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SI.No</th>
            <th scope="col">Item</th>
            <th scope="col">Cost</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Iphone</td>
            <td>190000</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ipad</td>
            <td>50000</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>MacBook</td>
            <td>80000</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
