import { OrderFeedDetails } from "../components/order-feed/OrderFeedDetails";

import fStyles from "./FeedPage.module.css";

export default function OrderPage() {
  return (
    <div className={fStyles.contentCenter}>
      <OrderFeedDetails />
    </div>
  );
}
