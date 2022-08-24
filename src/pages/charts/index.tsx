import { Content } from "../../widgets/content";
import { HeaderTitle } from "../../widgets/header/HeaderTitle";

export const Charts = () => {
  const data = [
    {
      photo: "https://designwizard.com/blog/album-cover-ideas/3-Design-Wizard-Album-Cover_1650885766730.jpg",
      title: "mbdtf",
      year: 2000,
    },
    {
      photo: 'https://media.npr.org/assets/img/2018/04/06/adele_sq-f40f2e233189657a924ca79bcc3a9bf65fb3a5c2-s1100-c50.jpg',
      title: 'Adele',
      year: 2004
    },
    {
      photo: "https://designwizard.com/blog/album-cover-ideas/3-Design-Wizard-Album-Cover_1650885766730.jpg",
      title: "mbdtf",
      year: 2000,
    },
    {
      photo: 'https://media.npr.org/assets/img/2018/04/06/adele_sq-f40f2e233189657a924ca79bcc3a9bf65fb3a5c2-s1100-c50.jpg',
      title: 'Adele',
      year: 2004
    },
    {
      photo: "https://designwizard.com/blog/album-cover-ideas/3-Design-Wizard-Album-Cover_1650885766730.jpg",
      title: "mbdtf",
      year: 2000,
    },
    {
      photo: 'https://media.npr.org/assets/img/2018/04/06/adele_sq-f40f2e233189657a924ca79bcc3a9bf65fb3a5c2-s1100-c50.jpg',
      title: 'Adele',
      year: 2004
    }
  ];
  return <>
    <HeaderTitle title="Charts" />
    <Content data={data} />
  </>
}