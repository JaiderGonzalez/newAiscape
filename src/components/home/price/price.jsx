import React from "react"
import Heading from "../../main/Heading"
import "./price.css"
import RecentCard from "./priceCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Vuelos Recientes' subtitle='' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent