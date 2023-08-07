import { useContext } from "react";
import { TableContext } from "../component/TableContext";

export const Table = () => {
  const {
    tableState,
    handleSearch,
    sortId,
    sortName,
    sortWeight,
    sortPrice,
    sortCalories,
    sortIngredients,
  } = useContext(TableContext);

  return (
    <div className="div">
      <h1> Snack Table </h1>{" "}
      <div className="table">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search snacks"
        />

        <div>
          {" "}
          <table className="snacks-table">
            <thead>
              <tr>
                <th onClick={sortId}>Id</th>
                <th onClick={sortName}> Name </th>
                <th onClick={sortWeight}> Weight </th>
                <th onClick={sortPrice}> Price </th>
                <th onClick={sortCalories}> Calories </th>
                <th onClick={sortIngredients}> Ingredients </th>
              </tr>
            </thead>
            <tbody>
              {tableState.map((snack) => (
                <tr key={snack.id}>
                  <td> {snack.id} </td>
                  <td> {snack.product_name} </td>
                  <td> {snack.product_weight} </td>
                  <td> {snack.price} </td>
                  <td> {snack.calories} </td>
                  <td> {snack.ingredients} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
