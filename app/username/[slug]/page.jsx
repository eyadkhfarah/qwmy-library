import Head from 'next/head'

export default function User() {
    return (
        <div className="main">
            <Head>
                <title>@eyad_farah | Commerece Student</title>
            </Head>
            <h1>Username</h1>
            <div className="follow">
                <div className="data">
                    <h4>Followers :</h4>
                    <h4>2.5K</h4>
                </div>
                <div className="data">  
                    <h4>Following :</h4>
                    <h4>200</h4>
                </div>

            </div>
        </div>
    )
}
