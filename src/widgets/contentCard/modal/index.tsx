import styled from "styled-components"

export const Modal: React.FC<{image: string, setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;}> = ({image, setIsModalOpened}) => {
  const handleClick = () => {
    setIsModalOpened(false)
  }

  return (
    <>
      <Wrap onClick={handleClick}>
        <div onClick={e => e.stopPropagation()}>
          <img src={image} alt={image} />
          <a href={image} download>download</a>
        </div>
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #00000094;
  z-index: 10;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & img {
    padding: 0 15px;
    cursor: pointer;
    width: 500px;
    object-fit: cover;
    padding-bottom: 10px;
    border-radius: 10px;

    @media screen and (max-width: 515px) {
      width: 430px;
    }
    @media screen and (max-width: 430px) {
      width: 380px;
    }
    @media screen and (max-width: 380px) {
      width: 340px;
    }
  }

  & a {
    padding: 1rem;
    background-color: #fff;
    text-decoration: none;
    color: var(--dark-blue);
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 5px;
    transition: border .1s linear;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      color: var(--hover-blue);
      border: 3px solid blue;
    }

    @media screen and (max-width: 430px){
      padding: .8rem;
      font-size: .8rem;
    }
  }
`