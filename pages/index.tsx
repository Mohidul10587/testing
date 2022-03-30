import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Users from './components/Users'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Users></Users>
    </div>
  )
}

export default Home
