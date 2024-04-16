import { useEffect, useState } from "react";
import Product from "../../Components/Products/Product";

import { Circles } from "react-loader-spinner";
function Home(){

    const [Data,setData]=useState([])
    const [Loading,setLoading]=useState('')

    async function pro(){
        try {
            setLoading(true)
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setData(data)
            setLoading(false)

        
            
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        pro()
    },[])






    return (
        <div>
          {Loading ? (
            <div className="min-h-screen w-full flex justify-center items-center">
              <Circles
                height={"120"}
                width={"120"}
                color="rgb(127,29,29)"
                visible={true}
              />
            </div>
          ) : (
            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
              {Data && Data.length
                ? Data.map((productItem) => (
                    <Product product={productItem} />
                  ))
                : null}
            </div>
          )}
        </div>
      );
    }
export default Home