import { useEffect } from "react";
import { useState } from "react"



const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // funktionen som ska köras varje gång satet (count) ändras
        console.log("Nu är count: ", count);
        
    }, [count]); //beroende-array som bestämmer när funktionen ska köras

    return(
        <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count+1)}>Öka</button>
        <button onClick={() => setCount(count-1)}>Minska</button>
        </>
    );
};

export default UseEffect