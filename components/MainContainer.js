import Link from "next/link"
import Head from "next/head.js";
import globalStyles from '../styles/global.js';

const MainContainer = ({ children, keywords }) => { 
    return <>
        <Head>
            <meta keywords="julia dev, next.js, keywords"></meta>
            <title>main page</title>
        </Head>

       <div className="navbar">
            <Link href='/' style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>home</Link>
            <Link href='/users' style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>users</Link>
        </div>
        <div>{children}</div>

         <style global jsx>
                {globalStyles}
        </style>
    </>
}

export default MainContainer