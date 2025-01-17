import "./styles.css";
import { useContext } from "react";
import Context from "./context";

export default function GenerateJSON() {
  const jsonData = useContext(Context);

  if (jsonData) {
    console.log("update div : ", jsonData);

    return (
      <div className="customerList">
        {
          // use data State Variable For Get Data Use JavaScript Map Mathod
          jsonData
            ? jsonData.map((data) => {
                return (
                  <div key={data.id}>
                    <h4> ID : {data.id}</h4>
                    <h5> Name : {data.name}</h5>
                    <h5> State : {data.state}</h5>
                    <h5> Country : {data.country} </h5>
                  </div>
                );
              })
            : ""
        }
      </div>
    );
  } else {
    return null;
  }
}
