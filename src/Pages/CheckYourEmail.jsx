import React from 'react'
import styled from 'styled-components'

export default function CheckYourEmail() {
    return (
        <Wrapper>
            <p> Check your email for activate your account!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div `
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
`