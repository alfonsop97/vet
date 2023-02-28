import React, { useState } from "react";

type props = {
    counters: number
}

const Counter = ({counters}: props) => {

    const [value, setValue] = useState(1);

    return  (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue(( counters + value + 1))}>Increment</button>
        </div>
    );
};
export default Counter;