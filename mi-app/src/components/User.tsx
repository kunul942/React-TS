import { useState } from "react"

interface User {
    uid: string,
    name: string;
}

export const User = () => {
    
    const [user, setUser] = useState<User>()

    const login = () =>{
        setUser({
            uid: 'ABC123',
            name: 'fernando herrera'
        })
    }

    return (
        <div>
            <h2>
                Usuario
            </h2>

            <button onClick={ login }>
                Login
            </button>
            {
                ( !user )
                    ? <pre>No hay usuario</pre>
                    :<pre>{ JSON.stringify( user )}</pre>
            }

        </div>
    )
}
