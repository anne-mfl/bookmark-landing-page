import { Description } from "../atoms/description";
import { Header } from "../atoms/header";

type HeaderAndDescriptionType = {
  header: string;
  description: string;
};

export const HeaderAndDescription = (props: HeaderAndDescriptionType) => {
  return (
    <div className="text-center md:w-5/12 md:mx-auto">
      <Header addClassName={''}>{props.header}</Header>
      <Description addClassName={"pt-6 pb-8 px-6"}>
        {props.description}
      </Description>
    </div>
  );
};
