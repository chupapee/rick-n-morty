import { useEffect } from "react"
import { IPreparedDataType } from "../../../app/globalTypes"
import { useAppDispatch, useAppSelector } from "../../../store/types"
import { Content } from "../../../widgets/content"
import { EpHeader } from "../../../widgets/header/EpHeader"
import { setEpisodePending } from "../model/slice"

export const Episodes = () => {
  const episodeData = useAppSelector(state => state.episode.episodeInfo)
  const contentData = useAppSelector(state => state.episode.charactersList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setEpisodePending(1))
  }, [dispatch])

  const prepContentData: IPreparedDataType[] = contentData.map(item => ({
    image: item.image,
    title: item.name,
    subtitle: item.location.name,
    detail: item.status
  }))

  const prepHeaderData = {
    name: episodeData[0].name,
    episode: episodeData[0].episode,
    air_date: episodeData[0].air_date,
  }

  return <>
    <EpHeader {...prepHeaderData} />
    <Content data={prepContentData} />
  </>
}