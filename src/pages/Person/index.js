import React from 'react'
import { useParams } from 'react-router-dom' 

export default function Person() {
    const params = useParams();
    // console.log(params);
    return (
        <h4>{params.name}</h4>
    )
}
