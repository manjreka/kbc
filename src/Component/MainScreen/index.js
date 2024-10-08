import {QRCodeSVG} from 'qrcode.react'

import './index.css'

const MainScreen = () => (
  <div className="main-screen-container">
    <img
      src="https://res.cloudinary.com/dtzajnril/image/upload/v1728368830/kbc2024_circular_image_1_psjziv.jpg"
      alt="amit"
      className="cover-picture"
    />
    <div className="qr-container">
      <QRCodeSVG
        value="https://naikAshwarya.ccbp.tech/join"
        size={250}
        style={{
          margin: '20px',
          padding: '5px',
          border: '8px solid #b4bd0b',
        }}
      />
      <h1 style={{color: 'white', backgroundColor: 'indigo', padding: '15px'}}>
        PLAY ALONG
      </h1>
    </div>
  </div>
)

export default MainScreen
