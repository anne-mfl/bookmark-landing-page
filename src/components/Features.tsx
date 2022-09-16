import { useState } from "react";
import { Button } from "../atoms/button";
import { Description } from "../atoms/description";
import { Header } from "../atoms/header";
import { HeaderAndDescription } from "../molecules/header-and-description";

export default function Features() {
  const [selectedFeature, setSelectedFeatures] =
    useState<string>("bookmarking");

  const selectedStyle: string =
    'text-black after:content-[""] after:border-b-4 after:border-soft-red after:block after:w-6/12 after:mt-3 after:mx-auto pt-4 md:px-12 after:md:w-[calc(100%+6rem)] after:md:-ml-12';
  const notSelectedStyle: string = "text-slate-500 py-4 md:px-12";

  return (
    <div className="mt-28 md:mt-40" id="features">
      <HeaderAndDescription
        header={"Features"}
        description={
          "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
        }
      />

      <div className={`mb-6 text-center [&>*]:cursor-pointer px-6`}>
        <ul className="md:flex md:justify-center [&>*]:md:border-b md:border-t-0 [&>*]:md:border-t-0">
          <li
            className={`${
              selectedFeature === "bookmarking"
                ? selectedStyle
                : notSelectedStyle
            }  border-t hover:text-soft-red`}
            onClick={() => setSelectedFeatures("bookmarking")}
          >
            Simple BookMarking
          </li>
          <li
            className={`${
              selectedFeature === "searching" ? selectedStyle : notSelectedStyle
            }  border-t hover:text-soft-red`}
            onClick={() => setSelectedFeatures("searching")}
          >
            Speedy Searching
          </li>
          <li
            className={`${
              selectedFeature === "sharing" ? selectedStyle : notSelectedStyle
            }  border-y hover:text-soft-red`}
            onClick={() => setSelectedFeatures("sharing")}
          >
            Easy Sharing
          </li>
        </ul>
      </div>

      <div className="md:flex md:items-center">
        <div className="relative mt-12 after:absolute after:content-[''] after:bg-soft-blue after:h-4/5 after:w-4/5 after:top-0 after:left-0 after:mt-16 after:-z-10 after:rounded-r-full md:basis-1/2">
          <img
            src={require("../images/illustration-features-" +
              selectedFeature +
              ".svg")}
            alt=""
            className="w-4/5 mx-auto"
          />
        </div>

        <div className="pt-20 px-6 text-center md:basis-1/2 md:pl-12 md:text-left">
          {selectedFeature === "bookmarking" ? (
            // <HeaderAndDescription
            //   header={"Bookmark in one click"}
            //   description={
            //     "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite stes."
            //   }
            // />
            <>
              <Header addClassName={"text-3xl pb-6"}>
                Bookmark in one click
              </Header>
              <Description addClassName={"md:w-8/12 pb-8"}>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite stes.
              </Description>
            </>
          ) : selectedFeature === "searching" ? (
            // <HeaderAndDescription
            //   header={"Intelligent search"}
            //   description={
            //     "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            //   }
            // />
            <>
              <Header addClassName={"text-3xl pb-6"}>Intelligent search</Header>
              <Description addClassName={"md:w-8/12 pb-8"}>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </Description>
            </>
          ) : (
            selectedFeature === "sharing" && (
              // <HeaderAndDescription
              //   header={"Share your bookmark"}
              //   description={
              //     "Easily share your bookmarks and collection with others. Create a shareable link that you can send at the click of a button."
              //   }
              // />
              <>
                <Header addClassName={"text-3xl pb-6"}>
                  Share your bookmark
                </Header>
                <Description addClassName={"md:w-8/12 pb-8"}>
                  Easily share your bookmarks and collection with others. Create
                  a shareable link that you can send at the click of a button.
                </Description>
              </>
            )
          )}
          <Button
            bgcolor={"bg-soft-blue"}
            textcolor={"text-white"}
            width={"px-6"}
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
}
