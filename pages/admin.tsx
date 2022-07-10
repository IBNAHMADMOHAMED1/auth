import React from 'react'
import type { NextPage } from 'next'
import { useKeycloak } from '@react-keycloak/ssr'
import type { KeycloakInstance, KeycloakTokenParsed } from 'keycloak-js'
import { Layout } from '../components/Layout'


const admin: NextPage = () => {
    return (
        <div>
            <div className="container">
                <p className="text-center">
                    admin Place
                </p>
                </div>
       
        </div>
    )
}
    
export default admin