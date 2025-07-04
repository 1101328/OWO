import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import { Link } from "react-router-dom";

<<<<<<< HEAD
/**
 * 회원가입 또는 로그인 폼을 보여주는 컴포넌트
 */

const AuthFormBlock = styled.div`
   h3{
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
    }
    `;

/**
 * 스타일링 된 인풋
 */

const StyledInput = styled.input`
   fonst-size: 1rem;
   border: none;
   border-bottom: 1px solid ${palette.grat[5]}
   padding-bottom: 0.5rem;
   outline:none;
   width: 100%;
   &:focus {
   color:$oc-teal-7;
   border-bottom: 1px solid ${palette.gray[7]};
   }
     &+&{
     margin-top: 1rem;
     }
     `;

const Footer = styled.div`
    margin-top: 2rem;
    text-algin: right;
    a{
       color:${palette.gray[6]};
       text-decoration:underline;
       &:hovr{
              color:${palette.gray[9]}
=======
/** 
 * 회원가입 또는 로그인 폼을 보여주는 컴퓨넌트 
 */

const AuthFormBlock = styled.div`
    h3{
        margin:0;
        color:${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

/** 
 * 스타일링 된 인풋
 */
const StyledInput = styled.input`
    font-size: 1rem;
    border: nome;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        border-bottom: 1px solid ${palette.gray[7]};
    }
        & + & { 
            margin-top: 1rem;
        }
`;

const Footer= styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover {
            color: ${palette.gray[6]};
            text-decoration: underline;
            &:hover {
                color: ${palette.gray[9]};
            }
>>>>>>> f56e3f8 (제발되라)
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
<<<<<<< HEAD
    margin-top:1rem;
`;

const textMap = {
    login: '로그인',
    register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit}) => {
    const text = textMap[type];
=======
    margin-top: 1rem;
`;

const textMap ={
    login: '로그인',
    register: '회원가입'    
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
    const text = textMap[type];

>>>>>>> f56e3f8 (제발되라)
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput autoComplete="username" name="username"
<<<<<<< HEAD
placeholder="아이디" onChange={onChange} value={form.username} />
               <StyledInput autoComplete="new-password" name="password"
placeholder="비밀번호" type="password" onChange={onChange} value={form.password}
/>
               {type==='register'&&(
                 <StyledInput autoComplete="new-passowrd"
name="passwordConfirm" placeholder="비밀번호 확인" type="password"
onChange={onChange} value={form.passwordConfirm}/>    
               )}
              <ButtonWithMarginTop cyan fullWidth style={{marginTop:'1rem'}}>
                {text}
              </ButtonWithMarginTop>
            </form>
            <Footer>
                {type==='login'?(
                    <link to="/register">회원가입</link>
=======
                    placeholder="아이디" onChange={onChange} value={form.username} />
                <StyledInput autoComplete="new-password" name="password"
                    placeholder="비밀번호" type="password" onChange={onChange} value={form.password} />
                {type === 'register' && (
                    <StyledInput autoComplete="new-password" name="passwordConfirm" placeholder="비밀번호 확인" type="password" onChange={onChange} value={form.passwordConfirm} />
                )}
                <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
                    {text}
                </ButtonWithMarginTop>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
>>>>>>> f56e3f8 (제발되라)
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

<<<<<<< HEAD
export default AuthForm;
=======
export default AuthForm;
>>>>>>> f56e3f8 (제발되라)
