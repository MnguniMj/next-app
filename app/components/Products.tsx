import React from 'react'
import AddtoCard from './AddtoCard'
import styles from "./Products.module.css"



const Products = () => {
  return (
    <><h1>Products</h1>
        <div className={styles.card}>
            <AddtoCard />
        </div>
    </>
  )
}

export default Products