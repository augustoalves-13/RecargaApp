import { useState } from "react";

export default function SelectStates(){
    const [optionsValue , setOptionsValue] = useState(1)
    const [optionsValueYear , setOptionsValueYear] = useState(1)

    return{
        optionsValue,
        setOptionsValue,
        optionsValueYear,
        setOptionsValueYear
    }
}
