// styled-components 라이브러리 import
// -> CSS-in-JS 스타일을 작성할 수 있게 해줌
import styled from 'styled-components';

// 재사용 가능한 흰색 박스 UI 컴포넌트 import
import WhiteBox from "../common/WhiteBox";

// SPA 라우팅을 위한 Link 컴포넌트 import
import { Link } from "react-router-dom";

// 프로젝트 전반의 색상 일관성을 위한 색상 팔레트 import
import palette from "../../lib/styles/palette";

// 화면 전체를 중앙 정렬된 flex 컨테이너로 구성하는 스타일 정의
const AuthTemplateBlock = styled.div`
    position: absolute;           /* 화면 전체를 고정 배치 */
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${palette.gray[2]}; /* 연한 회색 배경 */
    display: flex;               /* Flexbox 레이아웃 사용 */
    flex-direction: column;     /* 세로 방향으로 쌓음 */
    justify-content: center;    /* 세로축 가운데 정렬 */
    align-items: center;        /* 가로축 가운데 정렬 */
`;

// 로그인/회원가입 레이아웃 템플릿 컴포넌트
const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            {/* 가운데 흰색 박스 안에 로고 영역과 자식 컴포넌트를 배치 */}
            <WhiteBox>
                <div className="logo-area">
                    {/* 메인 페이지로 이동하는 로고 링크 */}
                    <Link to="/">REACTERS</Link>
                </div>
                {/* 로그인/회원가입 폼 등 자식 컴포넌트를 렌더링 */}
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

// export를 통해 외부에서 AuthTemplate 컴포넌트를 import하여 재사용 가능하게 함
export default AuthTemplate;
