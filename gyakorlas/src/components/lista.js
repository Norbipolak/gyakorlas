import { useState } from "react";

function Lista() {
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");

    const addToList = () => {
        setList([...list, value]);

        setValue("");
    };

    const deleteItem = (itemToDelete) => {
        const newList = list.filter((item) => item !== itemToDelete);
        setList(newList);

        return (
            <div className="container">
                <input type="text" value={value}
                    onChange={(e) => setValue(e.target.value)} />

                <button onClick={addToList}>Nyomd meg!</button>

                <ul>
                    {
                        list.map((l, i) => <li key={i}>
                            {l}
                        </li>)
                    }
                </ul>

                <button onClick={() => deleteItem}></button>
            </div>
        )
    }

};

/*
feladat: Van egy input mező, abba beírunk egy szöveget, megnyomunk egy gombot, és a beírt szöveg megjelenik egy listában.

Két useState-es változó kell, az egyik egy tömb, amibe bele lesznek töltve azok az elemek, amiket beírtunk az input mezőbe
és az a másik useState-es változó a value, amit majd megadunk a input mező value-ként 
*/

export default Lista;