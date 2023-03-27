import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartReducer";

function Cart() {
  document.title = ` Cart | LuxeHarmony `;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);
  let total = 0;

  useEffect(() => {
    for (let product of cart) {
      total += product.price;
      setSubtotal(total);
    }
  }, [cart]);

  return (
    <div className="pt-[70px]">
      <div className="bg-bgFourthColor h-[100px] w-full pl-32 flex items-center">
        <h3 className="text-4xl">Shopping Cart</h3>
      </div>
      <div className="flex m-10 justify-center gap-5">
        {/*      Items Cart */}
        <div className="bg-bgPrimaryColorgrid gap-3 grid">
          {cart.map((product, i) => {
            return (
              <div key={i}>
                <div className="flex gap-3 px-25 mr-52">
                  <div className="border border-bgFourthColor rounded p-3 px-5">
                    <img className="w-20" src={product.image[0]} alt="" />
                  </div>
                  <div className="grid items-center">
                    <div>
                      <h3 className="font-medium">
                        {product.model}, {product.brand.name}
                      </h3>
                      <h3 className="text-xl font-light">
                        ${product.price.toFixed(2)}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex items-center w-[150px] justify-between">
                        <button className="bg-bgTertiaryColor px-3 text-textPrimary rounded-l">
                          -
                        </button>
                        <h4 className="border-bgFourthColor border-t border-b w-full justify-center flex">
                          1
                        </h4>
                        <button className="bg-bgTertiaryColor px-3 text-textPrimary rounded-r">
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => dispatch(removeProduct(product))}
                          className="border-bgFourthColor border rounded px-3"
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-bgFourthColor mt-5"></div>
              </div>
            );
          })}
        </div>
        <div className="bg-bgFourthColor h-[200px] w-[1px]"></div>
        <div className="">
          <div className="flex w-full justify-between items-center mb-5">
            <h3 className="text-sm font-semibold">Subtotal</h3>
            <h4 className="font-bold">${subtotal.toFixed(2)}</h4>
          </div>
          <p className="max-w-[300px]">
            This order is in USD. Applicable taxes, shipping, coupons or special
            offers will be applied at Checkout.
          </p>
          <div className="mt-10">
            <button className="bg-bgTertiaryColor text-textPrimary px-20 py-2 rounded text-sm">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
