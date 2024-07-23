import "./App.css"
import React, { useState } from 'react'
import SocialMediaButton from "./components/SocialMediaButton/SocialMediaButton"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

function App() {

  const [data] = useState([
    { title: "facebook", icon: <FacebookIcon style={{fontSize: "2rem"}}/>, color: "#1877F2" },
    { title: "twitter", icon: <TwitterIcon style={{fontSize: "2rem"}}/>, color: "#1DA1F2" },
    { title: "whatsapp", icon: <WhatsAppIcon style={{fontSize: "2rem"}}/>, color: "#25D366" },
    { title: "github", icon: <GitHubIcon style={{fontSize: "2rem"}}/>, color: "#171515" },
    { title: "youtube", icon: <YouTubeIcon style={{fontSize: "2rem"}}/>, color: "#CD201F" },
  ])

  return (
    <div className="body">
      <div className="app-container">
        {data.map((data) => {
          return <SocialMediaButton key={data.title} {...data}/>
        })}
      </div>
    </div>
  )
}

export default App
