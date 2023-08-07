import React from 'react'
import Layout from '../Components/Layout'
import {Link} from "react-router-dom"
import pic from "../images/pic.jpg"
import "../styles/Homestyle.css"

const Home  = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${pic})`}}>
          <div className='headercontainer'>

            <h1>Madurai Nesamani Kitchen</h1>

            <h3>The Orginal Taste Of Madurai</h3>

            <Link to="/menu">
                <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home 