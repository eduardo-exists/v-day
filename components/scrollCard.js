import Image from "next/image";
import Button from "./button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faLongArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import { forwardRef } from "react";

// TODO:
// Add the content and photos. Going to stick with this layout.
// maybe go back to snap scroll and add x overflow for pics? def for now, add content and cute gifs n shit

export default forwardRef(function ScrollCard(props, ref) {
  return (
    <div
      style={props.cardStyle}
      ref={ref}
      className="border-x-2 border-y border-pink-100 max-w-md px-3 py-6 text-xl flex flex-col text-center justify-center"
      id={props.id}
    >
      <div className="min-h-full">
        {props.prevButton ? (
          <div>
            <Button
              onClick={() =>
                props.prevRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FontAwesomeIcon
                icon={faLongArrowUp}
                className="text-slate-600"
              />
            </Button>
          </div>
        ) : null}
        <div className="mb-4">
          <h1 className="text-3xl">{props.title}</h1>
        </div>
        {props.imagePaths ? (
          <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-10">
            {props.imagePaths.map((path, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 first:pl-4 last:pr-4"
              >
                <Image
                  className="shrink-0 w-fit rounded-lg shadow-xl bg-white"
                  src={path}
                  height={400}
                  width={300}
                />
                {/* <Image
                  className=""
                  src={path}
                  width={3}
                  height={4}
                  layout="responsive"
                  quality={100}
                  alt="pic"
                /> */}
              </div>
            ))}
          </div>
        ) : null}
        <div className="text-left text-sm mb-5 px-4">
          <p>{props.text}</p>
        </div>

        {props.nextButton ? (
          <div className="mb-2">
            <Button
              onClick={() =>
                props.nextRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FontAwesomeIcon
                icon={faLongArrowDown}
                className="text-slate-600"
              />
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
});
