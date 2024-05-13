'use client'

import { ConnectButton } from "thirdweb/react"
import { chain, client } from "../utils/constant"

const Login: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <ConnectButton 
                client={client}
                chain={chain}
                connectModal={{
                    size:"compact"
                }}
            />
            
        </div>
    )
}

export default Login