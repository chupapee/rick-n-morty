import { useState } from 'react'
import { Options, Select } from "./choose/style"

interface Data extends Record<string, string | number> {
  id: number;
}

type Props = {
  title: string;
  data: {title: string; id: number}[];
  callback: (item: number) => void;
}

export const SelectWrap: React.FC<Props> = ({title, data, callback}) => {
  const [opened, setOpened] = useState(false)
  const handleSelect = () => {    
    setOpened(!opened)
  }
  
  const handleClick = (id: any) => {    
    callback(id)
    setOpened(false)
  }

  return (
    <>
      <Select>
        <p onClick={handleSelect}>{title}</p>
        {opened ? (
          <>
            <img src="https://i.postimg.cc/5tjmCHPF/pngegg.png" alt="select" />
            <Options>
              {data.map(({title, id}) => {
                return <span onClick={() => handleClick(id)} key={id}>{title}</span>
              })}
            </Options>
          </>
        ) : (
          <img src="https://i.ibb.co/v3zf2dM/pngegg.png" alt="select" />
        )
        }
      </Select>
    </>
  )
}