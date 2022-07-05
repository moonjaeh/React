import React, { Fragment } from 'react';
import '../App.css';

const HelloReact = () => {
    //
    const name = "리액트";
    return (
        <Fragment>
            <h1 className='react'>{name}</h1>
            {/* 주석은 이렇게 사용한다. */}
            //이런 주석은 다 표출됨
            /* 이런 주석은 다 표출됨 */  
        </Fragment>
    );
};

export default HelloReact;