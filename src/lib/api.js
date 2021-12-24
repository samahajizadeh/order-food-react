
const FIREBASE_DOMAIN = "https://order-food-project-cc48b-default-rtdb.firebaseio.com/";

export async function getAllOrder() {
  const response = await fetch(`${FIREBASE_DOMAIN}/products.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "could not fetch orders");
  }

  const transformedOrder = [];

  for (const key in data) {
    const orderObj = {
      id: key,
      ...data[key],
    };

    transformedOrder.push(orderObj);
  }

  return transformedOrder;
}

export async function getOrderDetail(orderId) {
  const responseData = await fetch(
    `${FIREBASE_DOMAIN}/products/${orderId}.json`
  );
  const data = await responseData.json();
  if (!responseData.ok) {
    throw new Error(data.message || "could not fetch order detail");
  }
  const loadedOrderDetail = {
    id: orderId,
    ...data,
  };

  return loadedOrderDetail;
}

export async function sendOrder(requestData) {
  const responseData = await fetch(`${FIREBASE_DOMAIN}/order.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });
  const data = await responseData.json();
  if (!responseData.ok) {
    throw new Error(data.message || "could not send order");
  }
 
}
