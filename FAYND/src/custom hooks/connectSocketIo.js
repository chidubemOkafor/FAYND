import React from 'react'
import io from 'socket.io-client'

    const url = import.meta.env.VITE_REACT_APP_ENDPOINT_URL
    export const socket = io.connect(url)


