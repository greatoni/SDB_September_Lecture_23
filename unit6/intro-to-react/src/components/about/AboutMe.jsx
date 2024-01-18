import React from "react";

function AboutMe() {
    
    const city = "Burlington"
    const state = "VT"
    

    let styles = {
        ul: {
            textAlign: 'left',
            color: 'red',
        },
        p: {
            fontSize: '20pt'
        }
    }

    return (
        <div>
            <p style={styles.p}>{city},{state}</p>

            <ul style={styles.ul}>
                <li>Store</li>
                <li>Gas Station</li>
            </ul>
        </div>
    )
}
export default AboutMe