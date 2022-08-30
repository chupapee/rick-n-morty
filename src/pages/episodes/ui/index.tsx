import { useEffect } from "react"
import { IPreparedDataType } from "../../../app/globalTypes"
import { useAppDispatch, useAppSelector } from "../../../store/types"
import { Content } from "../../../widgets/content"
import { HeaderTitle } from "../../../widgets/header/HeaderTitle"
import { setCharactersPending } from "../../characters/model/slice"
import { setEpisodePending } from "../model/slice"

export const Episodes = () => {
  const episodeData = useAppSelector(state => state.episode.episodeInfo)
  const contentData = useAppSelector(state => state.characters.charactersList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setEpisodePending(2))
  }, [dispatch])

  useEffect(() => {
    const characters = episodeData.map(({characters}) => (characters)).join(',')
    dispatch(setCharactersPending(characters))
  }, [episodeData, dispatch])

  const preparedData: IPreparedDataType[] = contentData.map(item => ({
    image: item.image,
    title: item.name,
    subtitle: item.location,
    detail: item.status
  }))

  return <>
    <HeaderTitle title='' />
    <Content data={preparedData} />
  </>
}