import React from 'react'

const NumberCounter = () => {
    const numbers = [];
    const createNumbers = () =>
    {
        for(let i = 1; i < 10; i++)
        {
            numbers.push
            (
                <button key={i}>
                    {i.toString()}
                </button>
            )
        }
        return numbers;
    }   

    return (
        <>
            {createNumbers()}
        </>
    )
}

export default NumberCounter