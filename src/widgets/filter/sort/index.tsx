import { Options, Select } from "../choose/style"

export const Sort = () => {

  const sortList = []

  return (
    <>
    <Select>
      <p>Sort</p>
      <Options>
        <span>name</span>
        <span>species</span>
        <span>gender</span>
      </Options>
    </Select>
    </>
  )
}