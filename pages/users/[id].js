// import { useRouter } from 'next/router'

export default function User({user}) { 
    // const {query} = useRouter()
    return (
        <div>
            <div style={{ padding: '20px', background: '#f0f0f0', marginBottom: '20px' }}>
                <a href="/" style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>home</a>
                <a href="/users" style={{ color: '#333', textDecoration: 'none' }}>users</a>
            </div>
            <div style={{ padding: '20px' }}>
                
                <h1 style={{ color: '#2c5f2d' }}>Пользователь {user.id}</h1>
                 <h3>{user.name}</h3>
            </div>
        </div>
    )
}
export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return {
        props: {user}
    }
}