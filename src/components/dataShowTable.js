import DataTable from "react-data-table-component";
import moment from "moment";
import React, { useEffect, useState, memo } from "react";
import { columns } from "./dataTableColumn";
import dotenv from "dotenv";
dotenv.config();

// decide component render state will update or not
const DataShowTable = memo(function DataShowTable() {
  const [state, setState] = useState();
  const [allData, setAllData] = useState();
  const configurationUrl = process.env.REACT_APP_API_WEBSITE_URL;

  const onFilter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const filterResults = state.filter((data) => {
        return data.description.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setState(filterResults);
    } else {
      setState(allData);
      // If the input text field is empty, show all data
    }
  };

  useEffect(() => {
    if (configurationUrl) {
      fetch(configurationUrl)
        .then((response) => response.json())
        .then((data) => {
          const modifiedData = data.map((mData, index) => ({
            ...mData,
            id: index,
            "start date": moment(mData["start date"]).format("DD.MM.YYYY"),
            currency: mData.currency === "NULL" ? "" : mData.currency,
          }));

          setState(modifiedData);
          setAllData(modifiedData);
        });
    } else {
      return;
    }
  }, [configurationUrl]);

  return (
    <>
      {state && configurationUrl ? (
        <>
          <input
            data-testid={"user-input"}
            placeholder="Search description..."
            onChange={onFilter}
          />
          <br />
          <DataTable columns={columns} data={state} />
        </>
      ) : (
        <>
          {configurationUrl ? (
            <h1>...loading</h1>
          ) : (
            <h1>Please check your configuration...</h1>
          )}
        </>
      )}
    </>
  );
});

export { DataShowTable };
