import { useState, useEffect } from 'react';
import axios from 'axios';
import { country } from '../pages/create_account/country';

export const countryAndState = () => {
    const [state, setState] = useState([]);
    const [callcode, setCallcode] = useState("")

    const Config = {
        headers: {
            'X-CSCAPI-KEY': 'cGp3dGp0YVE5ZGZ6UVVUa0J1RDJDcElWc2VzOXhnUmZBdWtkUUhRRA=='
        }
    }

    const handleCodeSelect = async(prop) => {
        try {
            setCallcode(country[prop].dial_code)
            const response = await axios.get(`https://api.countrystatecity.in/v1/countries/${country[prop].code}/states`,Config)
            setState(response.data)
        } catch (error) {
            console.error('Error fetching states:', error);
        }
    }

    const getCallcode = async(prop) => {
        setCallcode(country[prop].dial_code)
    }

    useEffect(() => {
        handleCodeSelect(0)
    },[])


  return { callcode, state, handleCodeSelect, getCallcode };
};


