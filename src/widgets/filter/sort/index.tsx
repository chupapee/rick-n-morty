import { setCharacters } from "../../../pages/episodes/model/slice"
import { useAppDispatch, useAppSelector } from "../../../store/types"
import { SelectWrap } from "../SelectWrap"

export const Sort = () => {
  const dispatch = useAppDispatch()
  const sortList = [
    {
      title: 'status',
      id: 1,
    },
    {
      title: 'name',
      id: 2,
    },
    {
      title: 'species',
      id: 3,
    },
    {
      title: 'gender',
      id: 4,
    },
  ]

  const data = useAppSelector(state => state.episode.charactersList)

  const sort = (id: number) => {
    let array = [...data]
    let newData;
    switch(id){
      case 1:
        newData = array.sort((a, b) => {
          if(a.status > b.status) return 1
          else return - 1
        })
        break
      case 2:
        newData = array.sort((a, b) => {
          if(a.name > b.name) return 1
          else return - 1
        })
        break
      case 3:
        newData = array.sort((a, b) => {
          if(a.species > b.species) return 1
          else return - 1
        })
        break
      case 4:
        newData = array.sort((a, b) => {
          if(a.gender > b.gender) return 1
          else return - 1
        })
        break
    }
    dispatch(setCharacters(newData))
  }

  return (
    <>
    <SelectWrap title="sort by" data={sortList} callback={sort}/>
    </>
  )
}