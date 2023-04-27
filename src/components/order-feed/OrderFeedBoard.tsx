import React from "react";
import oFStyles from "./OrderFeed.module.css";
import { TOrderFeed } from "./OrderFeed";


function OrderFeedBoard(props: any) {
  let ReadyOrders = [];
  let WorkOrders = [];
  if (props.dataOrders) {
    ReadyOrders =
    props.dataOrders["orders"] ?
    props.dataOrders.orders.filter((item: TOrderFeed) => item.status === "done") : [];
   WorkOrders =
    props.dataOrders["orders"] ?
    props.dataOrders.orders.filter((item: TOrderFeed) => item.status === "pending") : [];
  }

  return (
    <div className={oFStyles.mainColumn + " " + oFStyles.wOrders}>
      <div className={oFStyles.mainRow + " mb-5"}>
          <div className={oFStyles.mainColumn + " " + oFStyles.hOrders}>
            <p className={"text text_type_main-medium pl-15 pb-2"}>Готовы:</p>
            <div className={oFStyles.mainRow + " pl-15"}>
              <div className={"text text_type_digits-default pb-5 pr-10"}>
                {ReadyOrders.map((item: TOrderFeed, index: number) => {
                  if (index < 10) {
                     return (
                      <section
                        className={oFStyles.colorOrders}
                        key={item._id}
                      >
                       {item.number}
                      </section>
                     );
                  }
                })}
              </div>
              <div className={"text text_type_digits-default pb-5"}>
                {ReadyOrders.map((item: TOrderFeed, index: number) => {
                  if ((index >= 10) && (index < 20)) {
                     return (
                      <section
                        className={oFStyles.colorOrders}
                        key={item._id}
                      >
                       {item.number}
                      </section>
                     );
                  }
                })}
              </div>
            </div>
            </div>
            <div className={oFStyles.mainColumn + " " + oFStyles.hOrders}>
              <p className={oFStyles.contentLeft + " text text_type_main-medium pl-15 pb-2"}>В работе:</p>
              <div className={oFStyles.mainRow + " pl-15 pr-10"}>
                {WorkOrders.map((item: TOrderFeed, index: number) => {
                  if (index > 10) {
                    return null;
                  }
                  return (
                    <section
                      className={oFStyles.feed_orders_work_item}
                      key={item._id}
                    >
                      {item.number}
                    </section>
                  );
                })}
              </div>
              <div className={oFStyles.mainRow + " pl-15"}>
                {WorkOrders.map((item: TOrderFeed, index: number) => {
                  if ((index >= 10) && (index < 20)) {
                    return null;
                  }
                  return (
                    <section
                      className={oFStyles.feed_orders_work_item}
                      key={item._id}
                    >
                      {item.number}
                    </section>
                  );
                })}
              </div>
            </div>
          </div>

          <div >
            <p className={"text text_type_main-medium pl-15 pt-3"}>
              Выполнено за все время:
            </p>
            <p className={"text text_type_digits-large pl-15 pb-10"}>
              {(props.dataOrders) ? props.dataOrders.total : ""}
            </p>
          </div>
          <div>
            <p className={"text text_type_main-medium pl-15"}>Выполнено за сегодня:</p>
            <p className={"text text_type_digits-large pl-15"}>
              {(props.dataOrders.totalToday) && props.dataOrders.totalToday}
            </p>
          </div>
      
    </div>
  );
}

export default OrderFeedBoard;
