import { useState } from "react";
import { HeaderAndDescription } from "../molecules/header-and-description";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";
import { Button } from "../atoms/button";

export default function Faq() {
  const [openedQuestion, setOpenQuestion] = useState<string>("");

  const questionsAndAnswers = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="mt-28 md:mt-40">
      <HeaderAndDescription
        header={"Frequently Asked Questions"}
        description={
          "Here are some of our FAQ's. If you have any other questions you'd like answered please feel free to email us."
        }
      />

      {questionsAndAnswers.map((questionAndAnswer) => (
        <div
          className="border-b py-5 mx-6 hover:cursor-pointer lg:w-5/12 lg:mx-auto"
          key={questionAndAnswer.question}
          onClick={() =>
            setOpenQuestion(
              openedQuestion === questionAndAnswer.question
                ? ""
                : questionAndAnswer.question
            )
          }
        >
          <div className="flex justify-between items-center">
            <p className="text-slate-700 hover:text-soft-red">{questionAndAnswer.question}</p>

            <Arrow
              stroke={
                openedQuestion === questionAndAnswer.question
                  ? "hsl(0, 94%, 66%)"
                  : "hsl(231, 69%, 60%)"
              }
              className={`${
                openedQuestion === questionAndAnswer.question && "rotate-180"
              }`}
            />
          </div>

          <p
            className={
              openedQuestion === questionAndAnswer.question
                ? "text-grayish-blue pt-8 pb-3 h-full duration-500"
                : "max-h-0 duration-500 overflow-hidden"
            }
          >
            {questionAndAnswer.answer}
          </p>
        </div>
      ))}

      <div className="text-center my-12 md:mb-28">
        <Button bgcolor={"bg-soft-blue"} textcolor={"text-white"} width={"px-6"}>
          More Info
        </Button>
      </div>
    </div>
  );
}
