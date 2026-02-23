import {useState} from 'react'
import MainContainer from '../components/MainContainer'
import Link from 'next/link'
const Users = ({users}) => { 
    // const [loading, setLoading] = useState(false)
    return (
        <MainContainer keywords={'users page'}>
            <h1 style={{ color: '#2c5f2d', marginLeft: '20px' }}>users</h1> 
            {/* <p>{loading && 'loading...'}</p> */}
            <ul style={{ listStyle: 'none', padding: '0 20px' }}>
                {users.map(user => (
                    <div key={user.id} style={{ 
                        background: '#fff', 
                        marginBottom: '10px', 
                        padding: '15px',
                        borderRadius: '5px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <Link href={`/users/${user.id}`} style={{ 
                            marginRight: '15px',
                            color: '#2c5f2d',
                            textDecoration: 'none'
                        }}>jjj</Link>
                        <li style={{ display: 'inline-block' }}>{user.name}</li>
                    </div>
                ))}
            </ul>
        </MainContainer>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: { users },
        revalidate: 3600 // опционально ревалидация каждый час
    }
}


export default Users