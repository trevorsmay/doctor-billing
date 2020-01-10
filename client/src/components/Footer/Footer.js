import React from "react";
import "./style.css";
import { Footer } from "react-materialize";

// function Footer() {
//     return(
//         <footer className="footer">
//             <a id="biller" href="" target="blank"><i className="fa fa-balance-scale"></i></a>
//         </footer>
//     )
// }
export default () => ( 
<div className="footer">
<Footer
  copyright= "Copyright Text"
  moreLinks={<a>Trevor May</a>}
  links={<ul>Created by Trevor May</ul>}
  className="appFooter"
>
<h5 className="white-text">
Doctor Pro-Biller
</h5>
<p className="grey-text text-lighten-4">
Simple biller 
</p>
</Footer>
</div>
);


// export default Footer;