import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2rem;
  padding-top: 20vh;
`

export const Form = styled.div`
  max-width: 600px;
  width: 95%;
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  flex-direction: column;
  border: 1px solid var(--light-grey);
  border-radius: 5px;
  background-color: #fff;

  & p {
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--bg-blue);
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  & input {
    width: 100%;
    font-size: 1rem;
    letter-spacing: 1px;
    margin: 10px 0;
    border-radius: 5px;
    border: 2px solid var(--light-grey);
    padding: 1rem 1rem;
    
    &:focus {
      border: 2px solid var(--hover-blue);
    }
  }

  @media screen and (max-width: 550px){
    padding: 2rem 1rem;
    font-size: 1.5rem;

    & input {
      font-size: .8rem;
      padding: .7rem;
      margin: 5px 0;
    }
  }
`

export const PayBtn = styled.button`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 15px 20px;
  transition: .1s linear;
  border: 2px solid green;

  background: linear-gradient(to right, lightgreen 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1s ease-out;

  &:hover, &:focus {
    background-position: left bottom;
    border-color: lightgreen;
  }

  &:disabled {
    background-position: left bottom;
    color: black;
    border: 2px solid lightgreen;
  }

  @media screen and (max-width: 550px){
    font-size: .9rem;
    padding: 15px 10px;
  }
`

