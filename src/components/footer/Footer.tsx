import * as React from "react";
import "./footer.css";
import letfButton from "../../assets/icons/chevron-left-svgrepo-com.svg";
import rigthButton from "../../assets/icons/chevron-right-svgrepo-com (1).svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="option">
        <button className="left disabledButton">
          <img src={letfButton} alt="" />
        </button>
        <button className="rigth enablebutton">
          <img src={rigthButton} alt="" />
        </button>
      </div>
    </div>
  );
}

export default React.memo(Footer);
