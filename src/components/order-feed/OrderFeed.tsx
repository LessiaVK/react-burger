import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Tab,
  CurrencyIcon,
  Counter,
  FormattedDate
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../modal/Modal";

import oFStyles from "./OrderFeed.module.css";
import {
  ingredientsSelector,
  constructorSelector,
  currentIngredientSelector,
} from "../../services/selectors";
import { PATH_INGREDIENTS } from "../../utils/constants";
import { RefObject } from "react";
import { StringLiteralLike } from "typescript";
import { OrderFeedDetails } from "./OrderFeedDetails";
import { getIngredients } from "../../services/thunks";
import { log } from "console";


const exampleOrder = {
  "success": true,
    "orders": [
      {
        "ingredients": [
          "60d3463f7034a000269f45e7",
          "60d3463f7034a000269f45e9",
          "60d3463f7034a000269f45e8",
          "60d3463f7034a000269f45ea"
        ],
        "_id": "",
        "status": "done",
        "number": 0,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
  } ],
  "total": 1,
    "totalToday": 1
}

export type TOrderFeed = {
  ingredients: string[],
  _id: string,
  status: string,
  number: number,
  createdAt: string,
  updatedAt: string,
  name: string,
};

export type TDataIngr = {
  _id?: string | any;
  name?: string;
  ref1?: RefObject<HTMLParagraphElement>;
  type?: string;
  image?: string;
  price?: string;
  data?: any;
  index?:string;
  text?:string;
  key?:string;
};

type TOrdersProps = {
  data: any;
  onClick: () => void;
  keyIndex: any;
  // className: string;
};

const ImageListIngredients = (props: any) => {
  console.log("ImageListIngredients",props.dataIngradients, props.ingredients);
  // image
  let price = 0;
  const imageList = props.ingredients.map( (ingredient: string) => {
    
    const  v = props.dataIngradients.filter( (item: TDataIngr) => {
      return item._id ==  ingredient;
    })
    // price = price + v[0].price;
    if (v[0]) {
      // console.log("v",v[0].price);
      price = price + v[0].price;
    }
    
    return {burger: v[0], price: price};
  } )
  console.log("imageList",imageList);
  
return(
  <div >
    {/* imageList.map */}
  </div>
)
}

const Orders = (props: TOrdersProps) => {
  const dispatch = useDispatch() as any;
  React.useEffect(() => {
    dispatch(getIngredients());
  }, []);


  let element = useSelector(currentIngredientSelector) as any;
  const dataIngradients = useSelector(ingredientsSelector) as any;
  let { id } = useParams();
  if (id) {
    let data = dataIngradients.filter((item: TDataIngr) => item._id == id);
    if (data.length === 1) {
      //console.log("data", data[0]);
      element = data[0];
    }
  }
  // console.log("Orders",props);
  
  return (
    <div key={props.keyIndex + "w1"} className={oFStyles.mainColumn + " " + oFStyles.itemOrderBackground }>
      <div className={oFStyles.mainRow + " " + oFStyles.row_between}>
        <div className={"text text_type_digits-default  "} >#{props.data.number}</div>
        <div className={"text text_type_main-small text_color_inactive "} >
          <FormattedDate date={new Date(props.data.createdAt)}  /></div>
      </div>
    <div className={"text text_type_main-medium pb-10 pt-10 " + oFStyles.caption}
      key={props.data._id}
      >
        {props.data.name}
      </div>
      <div className={oFStyles.mainRow + " " + oFStyles.row_between}>
        <div className={"text text_type_digits-default  "} >
        <ImageListIngredients dataIngradients={dataIngradients} ingredients={props.data.ingredients}/>  
        </div>
        <div className={"text text_type_main-small  "} >
        <p
            className={`constructor-element__price text text_type_digits-default`}
          >
            123
            <CurrencyIcon
              // className={bIStyles.sizeIcon}
              type="primary"
            />
          </p>

        </div>
      </div>
      </div>
  )
}

function OrderFeed(props: any) {
  const location = useLocation();
  const navigate = useNavigate();
  const data = useSelector(ingredientsSelector);
  // const currentOrder = useSelector(currentOrderSelector);
  
  const onClickOrder = () => {

  }
  
  return (
    <div>
      {/* <p className={oFStyles.main + " text text_type_main-large pb-10 pt-10"}>
        Лента заказов
      </p> */}
     
        {/* <Orders data={data} onClick={onClickOrder} className={oFStyles.ofScroll} /> */}
        {props.orders.map((ordersElement : any,index: any) => {
            // console.log("123",index)
        })}
        {props.orders.map((ordersElement : any,index: any) => (
       
          <Orders data={ordersElement} keyIndex={index} onClick={() =>{}}/>
          // // _id: string,
          // // status: string
          //   <div className={"text text_type_main-medium pb-10 pt-10"}
          //   key={val._id}
          //   >
          //     {val.name}
          //   </div>
          ))}
      
      {location.state && (
        <Modal
          close={() => {
            navigate(-1);
          }}
          modalProps="modals"
          caption="Детали ингредиента"
        >
          <OrderFeedDetails />
        </Modal>
      )}
    </div>
  );
}

export default OrderFeed;