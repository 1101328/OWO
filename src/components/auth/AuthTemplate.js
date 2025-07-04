import styled from "styled-components";
// styled-components 라이브러리 import
// -> CSS-in-JSS 스타일을 작성할 수 있게 함

import WhiteBox from "../common/WhiteBox"
// 재사용 가능한 흰색 박스 UI 컴포넌트 import

import { Link } from 'react-router-dom'
// SPA 라우팅을 위한 링크 컴포넌트 import

import palette from "../../lib/styles/palette";
import { Children } from "react";
// 색상 팔레트 -> 프로젝트 전반의 색상 일관성을 유지

const AuthTemplateBlock = styled.div`
    position:absolute; /* 화면을 꽉 채우도록 고정 배치 */
    left:0; /* 왼쪽 끝부터 */
    top:0; /* 위쪽 끝부터 */
    bottom:0; /* 아래쪽 끝까지 */
    right:0; /* 오른쪽 끝까지 */
    background:${palette.gray[2]}; /* 연한 회색 배경 */
    display:flex; /* flex 레이아웃 사용 */
    flex-direction:column; /* 세로로 쌓는 방향 */
    justify-content:center; /* 세로축 가운데 정렬 */
    align-items: center; /* 가로축 가운데 정렬 */
`;

// -> 즉, 화면 전체를 중앙 정렬된 felx 컨테이너로 구성

const AuthTemplate = ({Children}) => {
    // AuthTemplate 컴포넌트
    // children -> 내부에 들어올 컴포넌트나 JSX를 props로 받음
    return (
        <AuthTemplate>
        {/*WhiteBox 안에 로고영역+children을 감싸도록 배치 */}
        <WhiteBox>
            <div className="logo-area">
                <Link to="/">REACTERS</Link>
            </div>
            {Children}
            {/*로그인/회원가입 폼 등 자식 컴포넌트를 렌더링*/}
        </WhiteBox>
        </AuthTemplate>
    );
};

// -> AuthTemplateBlock 안에 WhiteBox를 두고 그 안에 children과 로고를 표시하는 구조

export default AuthTemplate;
// 다른 곳에서 AuthTemplate를 import해서 재사용할 수 있도록 export