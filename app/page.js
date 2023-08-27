"use client";
// import axios, { Axios } from "axios";
// import React from 'react'

// import Link from "next/link";
// import Header from "@/Components/Header";
// // import { useState } from 'react'
// // import Header from '@/Components/Header';
// const page = () => {
//   // let marks = 80; {We don't make var in react like this}

//   // const [marks, setMarks] = useState(80)
//   // we use useState for variables
//   // const markChange = () => {
//   //   setMarks(33)
//   // }

//   const [user, setUser] = useState("Saquib")
//   const [editore,setEditore]= useState("Ëdited");
//   return (

//    <>
//    {/* <Header user = {user} editor = {editore}/> */}
//    </>
//   )
// }

// export default page

//routing
// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <h1>This is Home Page</h1>
//     <Header/>
//     </div>
//   );
// };

// export default page;

// axios [use to call API]
import axios from "axios";
import React from "react";
import { useState } from "react";
import "./globals.css";

const page = () => {
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      let data = response.data;
      setImages(data);
      console.log(data);
    } catch (e) {
      console.log("error");
    }

    // console.log(response)
  };
  return (
    <div className="flex flex-col">
      <button
        onClick={getImages}
        className="px-5 py-3 bg-green-500  font-bold inline  justify-center"
      >
        Get Images
      </button>

      <div className="p-10 ">
        {Images.map((elem, i) => {
          return <img key={i} src={elem.download_url} 

          width={300}
          height={300}
          className="m-10 rounded inline-block"
          alt="" />;
        })}
      </div>
    </div>
  );
};

export default page;
