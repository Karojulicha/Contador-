import React, { useEffect, useState } from "react";


const Contador =()=> {
    const [cuenta, setCuenta] = useState(100);
    
    const aumentar = () => {
        setCuenta (cuenta + 1);
    };
    const disminuir = () => {
        setCuenta (cuenta - 1);

    };
    const reset = () => {
        setCuenta(100);

    };

    useEffect(() => {
        console.log(" El contador va en ${cuenta}");
    })


    return (
     <div>
        <center>
            <h1> la cuenta es {cuenta}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}> Disminuir </button>
            <button onClick={reset}> reset </button>
        </center>
     </div>
    );
};

export default Contador