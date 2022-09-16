import { Button } from "../atoms/button";
import { HeaderAndDescription } from "./header-and-description";

type CardType = {
  browserName: string
  minimumVersion: number
  image: string
}

export const Card = (props: CardType) => {
  return (
    <div className="shadow-xl mx-6 mb-12 rounded-lg lg:w-80">
      <div className="flex justify-center pt-8 pb-6">
        <img src={props.image} alt="" />
      </div>
      <HeaderAndDescription
        header={`Add to ${props.browserName}`}
        description={`Minimum version ${props.minimumVersion}`}
      />
      <hr className="border-t-0 h-4 overflow-hidden after:content-['・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・'] after:text-grayish-blue after:tracking-widest" />
      <div className="py-8 px-4">
        <Button
          bgcolor={"bg-soft-blue hover:bg-white"}
          textcolor={"text-white hover:text-soft-blue"}
          width={"w-full border-2 border-soft-blue "}
        >
          Add & Install Extention
        </Button>
      </div>
    </div>
  );
};
