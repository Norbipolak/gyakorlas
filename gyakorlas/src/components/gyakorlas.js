import { useState } from "react";

function Gyakorlas() {
    const [valtozas, setValtozas] = useState(1);

    return(
        <div className="container">
            <h3>{valtozas}</h3>
            <select onChange={(e)=> setValtozas(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
        </div>
    );
}

export default Gyakorlas;