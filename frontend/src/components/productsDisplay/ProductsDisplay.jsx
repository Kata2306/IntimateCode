import { useEffect, useState } from "react";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductsDisplay.css";
//import fetchProducts from "../api/fetchProducts.js";

export default function ProductsDisplay() {

  const [products, setProducts] = useState([]);
/*
  useEffect(() => {
    // This function will run after the component renders for the first time
    // and after every subsequent render, unless you specify dependencies.

    // You can perform your side effects here, for example, fetching data:
    fetchProducts().then((result) => {
      setProducts(result);
    });

    // If you need to perform cleanup when the component unmounts or before
    // the effect runs again, you can return a cleanup function from this function.
    return () => {
      // Cleanup code here (e.g., clearing intervals, unsubscribing from subscriptions).
    };
  }, []); // An empty dependency array means the effect runs only once after the initial render.
*/
  return (
    <div className="productsDisplay">
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
      <SingleProduct
        price="42,99"
        product="Private Tutu-Korsett - Schwarz"
        imgLink="https://www.hunkemoller.at/dw/image/v2/BCHL_PRD/on/demandware.static/-/Sites-hkm-master/default/dwdd8903c4/images/large/164981_1.jpg"
        onClickCartButton={() => console.log("buy me <3")}
      />
    </div>
  );
}
