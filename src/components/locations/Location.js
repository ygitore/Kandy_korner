import React from "react";

export default (props) => {
   return (
      <section className="location">
         <h3 className="location__address">{ props.location.address }</h3>
         <div className="location__square_footage">{ props.location.square_footage}</div>
         <div className="location__">{ props.location.weelchair_accessible}</div>
      </section>     
   )
}