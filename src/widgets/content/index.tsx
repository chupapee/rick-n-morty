import { IPreparedDataType } from "../../app/globalTypes";
import { Card } from "../card";
import { Wrap } from "./style";

export const Content: React.FC<{ data: IPreparedDataType[] }> = ({ data }) => {  
  return (
    <Wrap>
      {data.map(({ image, imageTitle, title, subtitle, detail, moreDetail }) => (
        <Card
          key={image}
          imageTitle={imageTitle}
          image={image} title={title}
          subtitle={subtitle}
          detail={detail}
          moreDetail={moreDetail}
        />
      ))}
    </Wrap>
  );
};