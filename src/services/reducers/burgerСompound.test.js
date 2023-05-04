import { GET_CONSTRUCTOR } from "../actions/actionTypes";
import { initialState } from "../initialState";
import { burgerReducer } from "./burgerСompound";

const initState = initialState.burgerReducer;

const mockedData = [
  {
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
  },
  {
    calories: 643,
    carbohydrates: 85,
    dragId: "78868160-2a10-54e2-a824-92829eec7db8",
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
    calories: 99,
    carbohydrates: 42,
    dragId: "f1da63af-56d1-8c3e-34f3-17c924653ac8",
    fat: 24,
    image: "https://code.s3.yandex.net/react/code/sauce-03.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
    name: "Соус традиционный галактический",
    price: 15,
    proteins: 42,
    type: "sauce",
    __v: 0,
    _id: "643d69a5c3f7b9001cfa0944",
  },
];

describe("burgerReducer", () => {
  it("should return the initial state", () => {
    expect(burgerReducer(undefined, { type: undefined })).toEqual(initState);
  });

  it("should set data", () => {
    expect(
      burgerReducer(initState, { type: GET_CONSTRUCTOR, payload: mockedData })
    ).toEqual({
      ...initState,
      constructorB: mockedData,
      currentItemsID: mockedData.map((item) => item._id),
    });
  });
});
