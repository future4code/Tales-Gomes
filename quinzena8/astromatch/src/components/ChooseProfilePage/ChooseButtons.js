import React from "react";
import styled from "styled-components";

const ButonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

function ChooseButtons(props) {

    return (
        <ButonsContainer>
            <button onClick={props.onClickNo}>Não</button>
            <button onClick={props.onClickYes}>Sim</button>
        </ButonsContainer>
    )
}

export default ChooseButtons;