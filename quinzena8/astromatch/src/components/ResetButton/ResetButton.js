import axios from "axios";
import React from "react";

function ResetButton() {
    
    const aluno = "tales"

    const onClickReset = () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`).then((response) => {
            console.log(response)
        })
    }

    return (
        <div><button onClick={onClickReset}>resetar curtidas e matches</button></div>
    )
}

export default ResetButton