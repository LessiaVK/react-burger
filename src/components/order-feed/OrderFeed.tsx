import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import {
  CurrencyIcon,
  FormattedDate
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../modal/Modal";

import oFStyles from "./OrderFeed.module.css";
import {
  ingredientsSelector,
  currentIngredientSelector,
} from "../../services/selectors";
import { PATH_FEED, PATH_INGREDIENTS } from "../../utils/constants";
import { OrderFeedDetails } from "./OrderFeedDetails";
import { getIngredients } from "../../services/thunks";
import { TDataIngr } from "../burger-ingredients/BurgerIngredients";

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
  count?: number,
};

type TOrdersProps = {
  data: any;
  onClick: () => void;
  keyIndex: any;
};

const ImageListIngredients = (props: any) => {
  // console.log("ImageListIngredients",props.dataIngradients, props.ingredients);
  let price = 0;
  let imageList = [];
  if (props.dataIngradients.length > 0 ) {
      imageList = props.ingredients.map( (ingredient: string) => {
        const  v = props.dataIngradients.filter( (item: TDataIngr) => {
          return item._id == ingredient;
        })
        if (v[0]) {
          price = price + v[0].price;
        }
        return v[0];
      } )
  }
  let countBun = 0;
  let maxCount = 0;
  let additionalNumber = 0;
  // console.log("props.ingredients",props.ingredients, props.dataIngradients);
  
  imageList = imageList.filter( (item: TDataIngr) => {
    if (item.type == "bun") {
      countBun++;
    }
    maxCount++;
    if (maxCount > 5 && item.type != "bun") {
      additionalNumber++;
    }
    
    return (item.type != "bun" || countBun == 1) && maxCount<= 5;
    
  })

 
  // console.log("imageList",imageList);
  
return(
 
<>
      <div className={"text text_type_digits-default  " + oFStyles.imageList } >
          {imageList.map((item: any, index: Number) => {
            // console.log("imageList",item);
            const n: Number = 150 - Number(index);
            const zIndex: React.CSSProperties = {zIndex: n.toString()};

            return <div key={index.toString()} className={oFStyles.sizeImg} style={zIndex} > 
                        <img src={item.image} className={oFStyles.sizePicure} alt= "Ингредиент" />
                    </div>
          })}
          { additionalNumber > 0 &&
             <div className={oFStyles.sizeImg}> 
                <div className={oFStyles.numberInfo}>{additionalNumber}</div>
            </div>
          }
    
        </div>
        <div className={"text text_type_main-small  "} >
        <p
            className={`constructor-element__price text text_type_digits-default`}
          >
            {price}
            <CurrencyIcon
              type="primary"
            />
          </p>

    </div>
</>
)
}

const Orders = (props: TOrdersProps) => {
  const dispatch = useDispatch() as any;
  React.useEffect(() => {
    dispatch(getIngredients());
  }, []);


 const dataIngradients = useSelector(ingredientsSelector) as any;
  // let { id } = useParams();
  // if (id) {
  //   let data = dataIngradients.filter((item: TDataIngr) => item._id == id);
  //   if (data.length === 1) {
  //     //console.log("data", data[0]);
  //     element = data[0];
  //   }
  // }
  // console.log("Orders",props);
  
  return (
    <div key={props.keyIndex + "w1"} className={oFStyles.mainColumn + " " + oFStyles.itemOrderBackground }>
      <div className={oFStyles.mainRow + " " + oFStyles.row_between}>
        <div className={"text text_type_digits-default  "} >#{props.data.number}</div>
        <div className={"text text_type_main-small text_color_inactive "} >
          <FormattedDate date={new Date(props.data.createdAt)}  /></div>
      </div>
    <div className={"text text_type_main-medium pb-5 pt-5 " + oFStyles.caption}
      key={props.data._id}
      >
        {props.data.name}
      </div>
      <div className={oFStyles.mainRow + " " + oFStyles.row_between}>
        
        <ImageListIngredients dataIngradients={dataIngradients} ingredients={props.data.ingredients}/>  
       
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
  // let t = new Date();
  // let time = t.getTime().toString();
  return (
    <div>
      {props.orders.map((ordersElement : any,index: number) => (
       <Link 
       key={index} 
       to={{
        pathname: PATH_FEED + `/${ordersElement.number}`,
      }}
      state={{ background: location }}
       className={oFStyles.elementMenu + " " + oFStyles.textWhite}
       >
          <Orders data={ordersElement} keyIndex={index} onClick={() =>{}}/>
        </Link>
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
          caption=""
        >
          <OrderFeedDetails />
        </Modal>
      )}
    </div>
  );
}

export default OrderFeed;