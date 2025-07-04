import styled from 'styled-components';
// styled-components 불러오기 -> CSS-in-JS 스타일 작성 가능
import palette from '../../lib/styles/palette';
// 색상 팔레트 (프로젝트 공통 색상 모음 ) import
import { css } from "styled-components";
// css 헬퍼 함수 -> 조건부 스타일 작성에 활용 

//styledButton 실제 버튼에 적용될 스타일 정의 
const StyledButton = styled.button`
    border: none; /* 테두리 제거 */
    border-radius: 4px; /* 모서리 둥글게 */
    font-size: 1rem; /* 글자 크기 16px */
    font-weight: bold; /* 글자 두껍게 */
    padding: 0.25rem 1rem; /* 위아래 0.25rem, 좌우 1rem */
    color: white; /* 글자 색상 흰색 */ 
    outline: none; /* 포커스 시 테두리 제거 */
    cursor: pointer; /* 커서를 손가락 모양으로 */
    background: ${palette.gray[8]}; /* 기본 배경색: 짙은회색 */
    &:hover {
        background: ${palette.gray[6]}; /*  hover 시 배경색: 연한회색 */
    }
    
    //props에 fullWidth가 true일 때의 추가 스타일
    ${props =>
        props.fullWidth &&
        css`
            padding-top: 0.75rem; /* 위쪽 패딩 0.75rem 위쪽 여백 크게 */
            padding-bottom: 0.75rem; /* 아래쪽 패딩 0.75rem 아래쪽 여백 크게 */
            width: 100%; /* 버튼 가로폭을 100% 꽉 차게 */
            font-size: 1.125rem; /* 글자 크기 조금 키움 */
        `}

    //props에 cyan이 true일 때의 추가 스타일
    ${props =>
        props.cyan &&
        css`
            background: ${palette.cyan[5]}; /* 배경색: 청록색(cyan) 계열로 */
            &:hover {
                background: ${palette.cyan[4]}; /* hover 시 배경색: 청록색(cyan) 계열의 좀 더 밝은 색 */
            }
        `}
`;
// -> 조건부로 fullWidth나 cyan props 가 전달되면, 그에 맞는 스타일을 자동으로 적용
//Button: 실제로 쓸 컴포넌트 
const Button = ({ children, ...rest}) => {
    // children: 버튼 안에 들어갈 내용
    // ...rest: onClick, type 등 나머지 props
    //StyledButton에 그대로 전달 
    return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
//다른 컴포넌트에서 Button 컴포넌트를 import 해서 사용 가능 