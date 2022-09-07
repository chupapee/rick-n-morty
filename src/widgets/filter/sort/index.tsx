import { setCharacters } from "../../../pages/episodes/model/slice"
import { useAppDispatch, useAppSelector } from "../../../store/types"
import { List, Wrap } from "./style"

export const Sort = () => {
  const dispatch = useAppDispatch()
  const sortList = [
    { title: 'status', id: 1, },
    { title: 'name', id: 2, },
    { title: 'species', id: 3, },
    { title: 'gender', id: 4, },
  ]

  const data = useAppSelector(state => state.episode.charactersList)

  const sortData = (id: number) => {
    let array = [...data]
    let newData;
    switch(id){
      case 1:
        newData = array.sort((a, b) => a.status.localeCompare(b.status))
        break
      case 2:
        newData = array.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 3:
        newData = array.sort((a, b) => a.species.localeCompare(b.species))
        break
      case 4:
        newData = array.sort((a, b) => a.gender.localeCompare(b.gender))
        break
    }
    dispatch(setCharacters(newData))
  }

  return (
    <>
    <Wrap>
        <span>sort by:</span>
      <List>
        {sortList.map(({title, id}) => (
          <li onClick={() => sortData(id)} key={id}>{title}</li>
        ))}
      </List>
    </Wrap>
    </>
  )
}