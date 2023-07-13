import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
    return (
        <StaticImage
            src="../images/shed_still.jpg"
            alt="Exterior of the Yellow Shed."
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                width: "100%"
            }}    
        />
    )
}
