import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  let products = {
    products: [
      {
        id: 1,

        name: "Bluetooth Speaker",

        price: 18.99,

        availableCount: 14,
      },

      {
        id: 2,

        name: "Samsung Tab",

        price: 411,

        availableCount: 5,
      },

      {
        id: 3,

        name: "Kindle Paperwhite",

        price: 59.99,

        availableCount: 7,
      },

      {
        id: 4,

        name: "Sony Headphones",

        price: 329.8,

        availableCount: 3,
      },

      {
        id: 5,

        name: "Apple Mac Mini",

        price: 799.99,

        availableCount: 3,
      },

      {
        id: 6,

        name: "Legion Laptop",

        price: 1290.99,

        availableCount: 8,
      },

      {
        id: 7,

        name: "Dell Latitude",

        price: 1600,

        availableCount: 2,
      },
    ],
  };
  function getRandomDelay() {
    return Math.floor(Math.random() * 2500 + 500);
  }
  function getProducts() {
    const delay = getRandomDelay();

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, delay);
    });
  }
  useEffect(() => {
    setLoader(true);
    getProducts().then((val) => {
      let x = val.products;
      x = x.map((a) => {
        return { ...a, quantity: 0 };
      });
      console.log(x);
      setData(x);
      setLoader(false);
    });
  }, []);
  const [totalPrice, setTotalPrice] = useState(0);
  function incrementHandler(id) {
    let sum = 0;
    let x = data.map((val) => {
      if (val.id == id) {
        const obj = { ...val, quantity: val.quantity + 1 };
        sum += obj.quantity * obj.price;
        return obj;
      } else {
        sum += val.quantity * val.price;
        return { ...val };
      }
    });
    setData(x);
    setTotalPrice(sum);
    //console.log(x);
  }
  function decrementHandler(id) {
    let sum = 0;
    let x = data.map((val) => {
      if (val.id == id) {
        const obj = { ...val, quantity: val.quantity - 1 };
        sum += obj.quantity * obj.price;
        return obj;
      } else {
        sum += val.quantity * val.price;
        return { ...val };
      }
    });
    setData(x);
    setTotalPrice(sum);
    //console.log("clicked");
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Ecommerce Checkout</h1>
      <div className="data">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available Qty</th>
              <th>Selected Qty</th>
              <th>Action</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.price}</td>
                    <td>{val.availableCount}</td>
                    <td>{val.quantity}</td>
                    <td>
                      <button
                        disabled={val.quantity === 0 ? true : false}
                        onClick={() => {
                          decrementHandler(val.id);
                        }}
                      >
                        -
                      </button>
                      <button
                        disabled={
                          val.quantity === val.availableCount ? true : false
                        }
                        onClick={() => {
                          incrementHandler(val.id);
                        }}
                      >
                        +
                      </button>
                    </td>
                    <td>{val.price * val.quantity}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {totalPrice < 1000 ? (
          <div style={{ margin: "20px auto" }}>Total-price:- {totalPrice}</div>
        ) : (
          <>
            <div style={{ margin: "20px auto" }}>
              Total-price:- {Math.floor(totalPrice - totalPrice / 10)}
            </div>
            <div style={{ margin: "20px auto" }}>
              Discount Price:- {Math.floor(totalPrice / 10)}
            </div>
          </>
        )}
      </div>

      {loader ? (
        <div
          style={{
            height: "250px",
            width: "250px",
            margin: "auto",
          }}
        >
          <img
            src="loader_gif.gif"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
