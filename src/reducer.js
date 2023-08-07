import { snacks } from "./data";

export const tableReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SEARCH":
      const searchSnackes = snacks.filter(
        (item) =>
          item.product_name.toLowerCase().includes(payload.toLowerCase()) ||
          item.ingredients.some((item) =>
            item.toLowerCase().includes(payload.toLowerCase())
          )
      );
      return searchSnackes;

    case "SORT_BY_ID":
      const sortById = state.sort((a, b) =>
        payload ? a.id - b.id : b.id - a.id
      );
      return sortById;

    case "SORT_BY_NAME":
      const sortByName = state.sort((a, b) =>
        payload
          ? a.product_name[0].localeCompare(b.product_name[0])
          : b.product_name[0].localeCompare(a.product_name[0])
      );
      return sortByName;

    case "SORT_BY_WEIGHT":
      const sortByWeight = state.sort((a, b) =>
        payload
          ? a.product_weight - b.product_weight
          : b.product_weight - a.product_weight
      );
      return sortByWeight;

    case "SORT_BY_PRICE":
      const sortByPrice = state.sort((a, b) =>
        payload ? a.price - b.price : b.price - a.price
      );
      return sortByPrice;

    case "SORT_BY_CALORIES":
      const sortByCalories = state.sort((a, b) =>
        payload ? a.calories - b.calories : b.calories - a.calories
      );
      return sortByCalories;

    case "SORT_BY_INGREDIENTS":
      const sortByIngredients = state.sort((a, b) =>
        payload
          ? a.ingredients[0].localeCompare(b.ingredients[0])
          : b.ingredients[0].localeCompare(a.ingredients[0])
      );
      return sortByIngredients;

    default:
      return state;
  }
};
