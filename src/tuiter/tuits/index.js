import React from "react";
import TuitItem from "./tuits";
import {useSelector} from "react-redux";

const TuitLists = () => {
 const postsArray = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <TuitItem
           key={post._id}
           post={post}
         />
       )
     }
   </ul>
 );
};
export default TuitLists;