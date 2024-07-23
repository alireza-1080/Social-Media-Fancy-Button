import "./SocialMediaButton.css";
import React, { useRef } from 'react'

function SocialMediaButton({ title, icon, color }) {

    const socialMediaButtonContainer = useRef(null);
    const tooltipButtonContainer = useRef(null);

    const mouseOverHandler = () => {
        socialMediaButtonContainer.current.style.color = "#fff"
        socialMediaButtonContainer.current.style.backgroundColor = `${color}`
        tooltipButtonContainer.current.classList.add("active")
    }

    const mouseOutHandler = () => {
        socialMediaButtonContainer.current.style.color = "black"
        socialMediaButtonContainer.current.style.backgroundColor = "#fff"
        tooltipButtonContainer.current.classList.remove("active")
    }

    return (
        <div className="social-media-button-container" ref={socialMediaButtonContainer} onMouseOver={() => mouseOverHandler()} onMouseOut={() => mouseOutHandler()}>
            <div className="icon-container">{icon}</div>
            <div className="button-tool-tip" ref={tooltipButtonContainer} style={{ backgroundColor: `${color}` }}>
                <div className="tool-tip-title">
                    {title}
                </div>
                <div className="tool-tip-feature" style={{ backgroundColor: `${color}` }}></div>
            </div>
        </div>
    )
}

export default SocialMediaButton