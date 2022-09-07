import { useEffect } from "react"
import { IPreparedDataType } from "../../../app/globalTypes"
import { useAppDispatch, useAppSelector } from "../../../store/types"
import { Content } from "../../../widgets/content"
import { FilterBar } from "../../../widgets/filter"
import { EpHeader } from "../../../widgets/header"
import { setEpisodePending } from "../model/slice"

export const Episodes = () => {
  const episodeData = useAppSelector(state => state.episode.episodeInfo)
  const contentData = useAppSelector(state => state.episode.charactersList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setEpisodePending(1))
  }, [dispatch])

  const prepContentData: IPreparedDataType[] = contentData.map(({image, location, name, gender, species, status}) => ({
    image: image,
    imageTitle: species,
    title: name,
    subtitle: location.name,
    detail: status,
    moreDetail: gender,
  }))

  const prepHeaderData = {
    name: episodeData[0].name,
    episode: episodeData[0].episode,
    air_date: episodeData[0].air_date,
  }

  return <>
    <EpHeader {...prepHeaderData} />
    <FilterBar />
    <Content data={prepContentData} />
  </>
}