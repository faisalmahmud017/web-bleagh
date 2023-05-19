import React from "react"
import MenuNavbar from "../components/navbar/MenuNavbar"

const LayoutLanding = (props) => {

    return(
        <div style={{maxWidth: "1200px"}} className="container mx-auto flex flex-col justify-between">
            <MenuNavbar />
            {props.children}
        </div>
    )

}

export default LayoutLanding