// src/components/common/WhiteBox.js
// WhiteBox: 배경이 흰색이고 살짝 둥근 테두리와 그림자가 있는 박스 레이아웃을 재사용하기 위해 만든 컴포넌트

import styled from "styled-components";
import palette from "../../lib/styles/palette";

const WhiteBox = styled.div`
    .logo-area{
                display: block;
                padding-bottom: 2rem;
                text-align: center;
                font-weight: bold;
                letter-spacing: 2px;
                }
                box-sizing :border-box;
                background: white;
                padding: 2rem;
                border-radius: 4px;
                box-shadow: 0 0 8(x rgba(0,0,0,0.25));
                `;

export default WhiteBox                