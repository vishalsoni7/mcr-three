import { createContext, useReducer, useState } from "react";
import { snacks } from "../data";
import { tableReducer } from "../reducer";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [tableState, tableDispatch] = useReducer(tableReducer, snacks);
  const [sort, setSort] = useState(false);

  const handleSearch = (e) => {
    tableDispatch({ type: "SEARCH", payload: e.target.value });
  };

  const handleSorting = () => {
    setSort((pre) => !pre);
  };

  const sortId = () => {
    tableDispatch({ type: "SORT_BY_ID", payload: sort });
    handleSorting();
  };

  const sortName = () => {
    tableDispatch({ type: "SORT_BY_NAME", payload: sort });
    handleSorting();
  };

  const sortWeight = () => {
    tableDispatch({ type: "SORT_BY_WEIGHT", payload: sort });
    handleSorting();
  };

  const sortPrice = () => {
    tableDispatch({ type: "SORT_BY_PRICE", payload: sort });
    handleSorting();
  };

  const sortCalories = () => {
    tableDispatch({ type: "SORT_BY_CALORIES", payload: sort });
    handleSorting();
  };

  const sortIngredients = () => {
    tableDispatch({ type: "SORT_BY_INGREDIENTS", payload: sort });
    handleSorting();
  };

  const values = {
    tableState,
    tableDispatch,
    handleSearch,
    sortId,
    sortName,
    sortWeight,
    sortPrice,
    sortCalories,
    sortIngredients,
  };
  return (
    <>
      <TableContext.Provider value={values}> {children} </TableContext.Provider>
    </>
  );
};
