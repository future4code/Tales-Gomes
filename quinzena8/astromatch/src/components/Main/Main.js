import React, {useState} from "react";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
import AppBar from "../AppBar/AppBar";
import MatchListPage from "../MatchListPage/MatchListPage";
import styled from "styled-components"

const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  height: 600px;
  margin: 30px;
`;

function Main() {
  const [selectedPage, setSelectPage] = useState('choose-profile')

  const renderSelectedPage = () => {
    switch(selectedPage) {
      case 'choose-profile':
        return <ChooseProfilePage/>
        case 'match-list':
          return <MatchListPage/>
          default:
            return <ChooseProfilePage/>
    }
  }

  const goToChooseProfilePage = () => {
    setSelectPage('choose-profile')
  }

  const goToMatchListPage = () => {
    setSelectPage('match-list')
  }
    return (
        <MainContainer>
          <AppBar goToChooseProfilePage={goToChooseProfilePage} goToMatchListPage={goToMatchListPage} />
          {renderSelectedPage()}
        </MainContainer>
    )
}

export default Main