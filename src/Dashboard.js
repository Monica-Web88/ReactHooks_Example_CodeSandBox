import React, { createContext, useState, useContext, useEffect } from "react";
import GenerateJSON from "./GenerateJSON";
import Context from "./context";

const Dashboard = () => {
  const [jsonData, setData] = useState(null);

  const generateJSON = async () => {
    try {
      const response = await fetch(
        "https://fake-json-api.mock.beeceptor.com/users"
      );
      const respData = await response.json();
      console.log("value got : ", respData);
      setData(respData);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="alignClass">
      <div> Welcome to Dashboard </div>
      <br />
      <button type="submit" onClick={generateJSON}>
        Generate JSON
      </button>
      <div>
        <Context.Provider value={jsonData}>
          <GenerateJSON />
        </Context.Provider>
      </div>
    </div>
  );
};

export default Dashboard;
