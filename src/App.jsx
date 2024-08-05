import "./App.css";

import { useEffect } from "react";
import { useState } from "react";
// import { data } from "autoprefixer";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productResponse = await fetch("https://fakestoreapi.com/products");

      if (productResponse.ok) {
        const res = await productResponse.json();
        setData(res);
      }
    };
    fetchData();
  }, []);
  const handledAddProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    });
    if (res.ok) {
      alert("clicked");
    }
  };
  console.log("data..", data);
  return (
    <>
      <button
        className="bg-red-600 text-white p-2 m-4 rounded-md"
        onClick={handledAddProduct}
      >
        Add New Item
      </button>
      <h1>fetching data</h1>
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <h2>{item.image}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
// const [user, setUser] = useState([]);
// const fetchData = () => {
//   fetch("https://fakestoreapi.com/products")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       setUser(data);
//     });
// };

// useEffect(() => {
//   fetchData();
// }, []);

// return (
<>
  {/* <div>
        <h1> name list</h1>
      </div> */}

  {/* {user.map((item) => { */}
  {/* <button key={item.id}> {item.tittle} Click me</button>; */}
  {/* })} */}
</>;
// );
// }

export default App;
