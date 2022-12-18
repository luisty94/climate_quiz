import { useState, useEffect } from "react";
import styled from 'styled-components';

import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Title from "../components/Title";
import NavItem from "../components/NavItem";
import Input from "../components/Input";


const StartScreen = ({nextStage}) => {

    const [nickname, changeNickname] = useState("");

    const openLeaderboard = () => {
        return;
    }

    const onInputChange = (evt) => {
        changeNickname(evt.target.value);
    }

    const onStartClick = () => {
        nextStage("General");
    }

    return (
        <Container>
            <Navigation>
                <NavItem><a href="/about">About</a></NavItem>
                <NavItem onClick={openLeaderboard}>Leaderboard</NavItem>
            </Navigation>
            <Title>Welcome</Title>
            <TextBox>This is example text</TextBox>
            <Input nickname={nickname} onChange={onInputChange}/>
            <Button onClick={onStartClick}>Start</Button>
        </Container>
    )
}

const Container = styled.div`
`

const Navigation = styled.div`
`

export default StartScreen;