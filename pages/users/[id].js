import { useRouter } from 'next/router'

export default function () { 
    const {query} = useRouter()
    console.log(query.id)
    return (
        <div>
            <div style={{ padding: '20px', background: '#f0f0f0', marginBottom: '20px' }}>
                <a href="/" style={{ marginRight: '15px', color: '#333', textDecoration: 'none' }}>home</a>
                <a href="/users" style={{ color: '#333', textDecoration: 'none' }}>users</a>
            </div>
            <div style={{ padding: '20px' }}>
                <h1 style={{ color: '#2c5f2d' }}>Пользователь {query.id}</h1>
            </div>
        </div>
    )
}