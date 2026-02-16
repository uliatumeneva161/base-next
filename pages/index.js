import Link from "next/link"

const Index = () => { 
    return (
        <div>
            <div style={{ padding: '20px', background: '#f0f0f0', marginBottom: '20px' }}>
                <Link href='/' style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>home</Link>
                <Link href='/users' style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>users</Link>
            </div>
            <h1>main</h1>
            <style jsx>
                { 
                `
                body{
                    background-color: #e8f0e5; 
                    margin: 0;
                    font-family: Arial, sans-serif;
                }
                h1{
                    color: #2c5f2d;
                    margin-left: 20px;
                }
                `
                }
            </style>
        </div>
    )
}
export default Index