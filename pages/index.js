import head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
	  <div classname={styes.container}>
	    <Head>
	      <title>WaveBeat</title>
	      <link rel="icon" href="/favicon.ico" />
	    </Head>

	    <main classname={styles.main}>
		<WaveBeat />
	    </main>
	   </div>
	}
}
