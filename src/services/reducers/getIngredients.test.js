import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_STATE,
  FETCH_INGREDIENTS_ERROR,
  FETCH_INGREDIENTS_REQUEST,
} from "../actions/actionTypes";
import { initialState } from "../initialState";
import { fetchDataReducer } from "./getIngredients";

const initState = initialState.fetchDataReducer;

const mockedData = [
  {
    calories: 643,
    carbohydrates: 85,
    fat: 26,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    name: "Флюоресцентная булка R2-D3",
    price: 988,
    proteins: 44,
    type: "bun",
    __v: 0,
    _id: "643d69a5c3f7b9001cfa093d",
  },
  {
    calories: 986,
    carbohydrates: 609,
    fat: 689,
    image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
    image_large:
      "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
    image_mobile:
      "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
    name: "Хрустящие минеральные кольца",
    price: 300,
    proteins: 808,
    type: "main",
    __v: 0,
    _id: "643d69a5c3f7b9001cfa0946",
  },
];

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(fetchDataReducer(undefined, { type: undefined })).toEqual(initState);
  });

  it("should state get", () => {
    expect(
      fetchDataReducer(initState, { type: FETCH_INGREDIENTS_REQUEST })
    ).toEqual({
      ...initState,
      fetchIngredientsRequest: true,
      fetchIngredientsError: false,
    });
  });
  it("should set data", () => {
    expect(
      fetchDataReducer(initState, {
        type: FETCH_INGREDIENTS,
        payload: mockedData,
      })
    ).toEqual({
      ...initState,
      ingredients: mockedData,
      fetchIngredientsRequest: false,
      fetchIngredientsError: false,
    });
  });
  it("should set data fetch", () => {
    expect(
      fetchDataReducer(initState, {
        type: FETCH_INGREDIENTS_STATE,
        payload: mockedData,
      })
    ).toEqual({
      ...initState,
      fetchIngredients: mockedData,
      fetchIngredientsRequest: false,
      fetchIngredientsError: false,
    });
  });
  it("should get error", () => {
    expect(
      fetchDataReducer(initState, { type: FETCH_INGREDIENTS_ERROR })
    ).toEqual({
      ...initState,
      fetchIngredientsRequest: false,
      fetchIngredientsError: true,
    });
  });
});
