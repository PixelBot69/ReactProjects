import React, { useCallback, useState } from "react";
import data from "./data";

function Acc() {
    const [select, setSelect] = useState(null);

    function reactss(dataid) {
       
        setSelect(select===dataid?null:dataid)
    }

    return (
        <div className="acco">
            {
                data.map(datas => (
                    <div className="main" key={datas.id}>
                        <div className="title" onClick={() => reactss(datas.id)}>
                            <p>{datas.question}</p>
                        </div>
                        {select === datas.id ?
                            <div>{datas.answer}</div> : null}
                    </div>
                ))
            }
        </div>
    );
}

export default Acc;
