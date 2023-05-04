import { ADD_INGREDIENT_DETAILS } from "../actions/actionTypes";
import { initialState } from "../initialState";
import { ingredientReducer } from "./ingredientDetails";

const initState = initialState.ingredientReducer;

const mockedData = {
  calories: 643,
  carbohydrates: 85,
  dragId: "d5d8903f-7598-12ab-aa1c-9b35466d306d",
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
};

describe("ingredientReducer", () => {
  it("should return the initial state", () => {
    expect(ingredientReducer(undefined, { type: undefined })).toEqual(
      initState
    );
  });

  it("should set data current ingredient", () => {
    expect(
      ingredientReducer(initState, {
        type: ADD_INGREDIENT_DETAILS,
        payload: mockedData,
      })
    ).toEqual({
      ...initState,
      currentIngredient: mockedData,
    });
  });
});
