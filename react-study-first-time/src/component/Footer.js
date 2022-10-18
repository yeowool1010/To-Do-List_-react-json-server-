import React from 'react'
import styled from 'styled-components';

const FooterBox = styled.div`
    width: 100%;
    height: 20%;
    position: absolute;  
    bottom: 0;
    left: 0;
    background-color: beige;

    .textBox {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
    }
    .text {
        margin: 10px;
        color: blueviolet;
        font-weight: 700;
    }
    .text1 {
        margin: 10px;
        color: red;
        font-weight: 700;
        
    }
`

const Footer = () => {

    return (
        <FooterBox>
            <div className='textBox'>
                <div className='text1'>
                    json server localhost:3001 설정必
                </div>
                <div className='text'>
                    안녕하세요 여울의 투두두두 리스트입니다
                    울면서 만들었습니다. &#x1F602;
                </div>
                <div className='text'>
                    create 2022.10.18
                </div>
            </div>
        </FooterBox>
    )
}

export default Footer;