import React from 'react'
import styled from 'styled-components'

export default function CheckYourEmail() {
    
    return (
        <Wrapper>
            <Paragraf> Check your email for activate your account!</Paragraf>
        </Wrapper>
    )
}

const Wrapper = styled.div `
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
`

const Paragraf = styled.div`
margin-top:16em;
`
