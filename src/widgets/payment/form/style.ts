import styled from "styled-components";

export const Wrap = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2rem;
`

export const Form = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  flex-direction: column;
  border: 1px solid var(--light-grey);
  border-radius: 5px;

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
      border: 2px solid var(--bg-blue);
    }
  }
  `

export const PayBtn = styled.button`
  font-size: 1rem;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 15px 20px;
  transition: .1s linear;
  border: 2px solid green;

  background: linear-gradient(to right, lightgreen 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1s ease-out;

  &:hover {
    background-color: green;
  }

  &:disabled {
    background-position: left bottom;
    color: white;
    border: 2px solid lightgreen;
  }
`