import { useEffect } from "react"
import { IPreparedDataType } from "../../../app/globalTypes"
import { useAppDispatch, useAppSelector } from "../../../store/types"
import { Content } from "../../../widgets/content"
import { HeaderTitle } from "../../../widgets/header/HeaderTitle"
import { setEpisodePending } from "../model/slice"

export const Episodes = () => {
  const episodeData = useAppSelector(state => state.episode.episodeInfo)
  const contentData = useAppSelector(state => state.episode.charactersList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setEpisodePending(1))
  }, [dispatch])

  const preparedData: IPreparedDataType[] = contentData.map(item => ({
    image: item.image,
    title: item.name,
    subtitle: item.location.name,
    detail: item.status
  }))

  return <>
    <HeaderTitle title='Episode' />
    <Content data={preparedData} />
  </>
}