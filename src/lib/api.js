const FIREBASE_DOMAIN = "https://order-food-ea554-default-rtdb.firebaseio.com";

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
