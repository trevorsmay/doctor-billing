import React from "react";
import "./style.css";
import { Footer } from "react-materialize";


export default () => ( 
<div className="footer">
<Footer
  copyright= "Copyright Text"
  moreLinks={<a>Trevor May</a>}
  links={<ul>Created by Trevor May</ul>}
  className="appFooter"
>
<h5 className="white-text">
Doctor Ledger
</h5>
<p className="grey-text text-lighten-4">
Bookkeeping, simpler.
</p>
</Footer>
</div>
);


// export default Footer;