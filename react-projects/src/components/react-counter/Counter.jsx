import { useState } from "react";

const Counter = () => {

    const [pear, setPear] = useState(0);
    const [banana, setBanana] = useState(0);
    const [apple, setApple] = useState(0);

    const updatePear = () => {
        setPear(pear +1);
    };

    const updateBanana = () => {
        setBanana(banana +1);
    };

    const updateApple = () => {
        setApple(apple +1);
    };

    const decrementPear = () =>{
        setPear(pear-1);
    };

    const decrementBanana = () => {
        setBanana(banana-1);
    };

    const decrementApple = () => {
        setApple(apple-1);
    };

    const resetPear = () => {
        setPear(0);
    };

    const resetBanana = () => {
        setBanana(0);
    };

    const resetApple = () => {
        setApple(0);
    };

    

    return(
        <section className="counter-container">
            <h1>En simulation till att räkna frukter</h1>

            <article className="pear">
                <h2>Päron i lager:</h2>
                <p>{pear}</p>
                <button onClick={updatePear}>Öka</button>
                <button onClick={decrementPear}>Minska</button>
                <button onClick={resetPear}>Töm</button>
            </article>

            <article className="banana">
                <h2>Bananer i lager:</h2>
                <p>{banana}</p>
                <button onClick={updateBanana}>Öka</button>
                <button onClick={decrementBanana}>Minska</button>
                <button onClick={resetBanana}>Töm</button>
            </article>

            <article className="apple">
                <h2>Äpplen i lager:</h2>
                <p>{apple}</p>
                <button onClick={updateApple}>Öka</button>
                <button onClick={decrementApple}>Minska</button>
                <button onClick={resetApple}>Töm</button>
            </article>

        </section>
    );

}

export default Counter