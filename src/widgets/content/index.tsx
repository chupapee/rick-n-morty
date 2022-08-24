import { Card } from "./card";
import { Wrap } from "./style";

type ContentType = {
  data: {
    photo: string;
    title: string;
    year?: number | string;
  }[];
};

export const Content = ({ data }: ContentType) => {

  // data = useSelector(state => ...)

  return (
    <Wrap>
      {data.map(({ photo, title, year }) => (
        <Card photo={photo} title={title} detailInfo={year}/>
      ))}
    </Wrap>
  );
};

