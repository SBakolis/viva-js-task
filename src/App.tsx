import React, { useEffect, useState } from "react";

import { useQuery } from "react-query";
import axios from "axios";
import StepsWrapper from "./components/StepsWrapper";
import { CartItem } from "./types";
import { toCartItem } from "./helpers/utils";
import { mockable } from "./helpers/constants";

function App() {
  const [allProducts, setAllProducts] = useState<CartItem[]>([]);
  const { isLoading, error, data } = useQuery("products", () =>
    axios.get(`${mockable}products`).then((res) => res.data)
  );

  function mapDataToCartItem(data: any) {
    const typedData = data.products.map((item: any) => toCartItem(item));
    return typedData;
  }
  useEffect(() => {
    !isLoading && data && setAllProducts(mapDataToCartItem(data));
    data?.products && console.log(data.products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  return (
    <>
      <div className="flex flex-row h-screen w-screen items-center justify-center">
        {allProducts && <StepsWrapper products={allProducts} />}
      </div>
    </>
  );
}

export default App;
