import React from "react";
import { Space, Table, Tag } from "antd";
const Card = ({ weekday, day, month, region, times }) => {
  return (
    <>
      <table class="table col-6">
        <thead className=" table-dark">
          <tr>
            <th scope="col">Viloyat</th>
            <th scope="col">data</th>
            <th scope="col">weekday</th>
            <th scope="col">Tong saharlik</th>
            <th scope="col">Quyosh</th>
            <th scope="col">Peshin</th>
            <th scope="col">Asr</th>
            <th scope="col">Shom iftor</th>
            <th scope="col">Hufton</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{region}</td>
            <td>{day}.{month}</td>
            <td>{weekday}</td>
            <td><mark>{times?.tong_saharlik}</mark></td>
            <td>{times?.quyosh}</td>
            <td>{times?.peshin}</td>
            <td>{times?.asr}</td>
            <td><mark>{times?.shom_iftor}</mark></td>
            <td>{times?.hufton}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Card;
