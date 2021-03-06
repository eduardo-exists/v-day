import Image from "next/image";
import Button from "./button";
import ReactPlayer from "react-player/lazy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faLongArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import { forwardRef } from "react";
import GifOnCard from "./gifOnCard";

// TODO:
// Add all the content
// Add cute gifs n shit

export default forwardRef(function ScrollCard(props, ref) {
  return (
    <div
      style={props.cardStyle}
      ref={ref}
      className=" max-w-md px-3 pt-8 text-xl flex flex-col text-center justify-center"
      id={props.id}
    >
      <div className="p-4 min-h-full bg-pink-100 border-2  border-solid border-pink-300 rounded-lg shadow-xl">
        {props.prevButton ? (
          <div className="inline-flex w-full">
            {props.gifs ? <GifOnCard {...props.gifs[0]} /> : null}
            <div className="flex-grow">
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
            {props.gifs ? <GifOnCard {...props.gifs[1]} /> : null}
          </div>
        ) : null}
        <div className="mb-3">
          <h1 className="text-4xl">{props.title}</h1>
          {props.date ? (
            <h4>
              &mdash;{" "}
              {props.date.toLocaleString("default", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              &mdash;
            </h4>
          ) : null}
        </div>
        {props.media ? (
          props.media.length > 1 ? (
            <div className="w-11/12 flex gap-4 snap-x snap-mandatory overflow-x-auto ml-auto mr-auto">
              {props.media.map((media, idx) => {
                return media.type === "video" ? (
                  <div
                    key={idx}
                    className="snap-center shrink-0 first:pl-4 last:pr-4 rounded-lg"
                    style={{
                      margin: "0 auto",
                      borderRadius: "0.5rem",
                      overflow: "hidden",
                    }}
                  >
                    <ReactPlayer
                      loop={true}
                      playing={true}
                      muted={true}
                      playsinline={true}
                      url={media.path}
                      height={media.height || 400}
                      width={media.width || 300}
                      className="shrink-0 w-fit rounded-lg"
                      style={{
                        margin: "0 auto",
                        borderRadius: "0.5rem",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    key={idx}
                    className="snap-center shrink-0 first:pl-4 last:pr-4"
                  >
                    <Image
                      className="shrink-0 w-fit rounded-lg"
                      src={media.path}
                      height={media.height || 400}
                      width={media.width || 300}
                      alt="Picture"
                      // priority={true}
                      quality={100}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div key={0} className="w-full ml-auto mr-auto">
              {props.media[0].type === "video" ? (
                <div
                  className="snap-center shrink-0 first:pl-4 last:pr-4 rounded-lg"
                  style={{
                    margin: "0 auto",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                  }}
                >
                  <ReactPlayer
                    loop={true}
                    playing={true}
                    muted={true}
                    playsinline={true}
                    url={props.media[0].path}
                    height={props.media[0].height || 400}
                    width={props.media[0].width || 300}
                    className="shrink-0 w-fit rounded-lg"
                    style={{
                      margin: "0 auto",
                      borderRadius: "0.5rem",
                      overflow: "hidden",
                    }}
                  />{" "}
                </div>
              ) : (
                <Image
                  className="shrink-0 w-fit rounded-lg"
                  src={props.media[0].path}
                  height={props.media[0].height || 400}
                  width={props.media[0].width || 300}
                  alt="Picture"
                  // priority={true}
                  quality={100}
                />
              )}
            </div>
          )
        ) : null}
        <div className="text-left mt-4 mb-2 mx-2 px-4">
          <p className="text-base">{props.text}</p>
        </div>

        {props.nextButton ? (
          <div className="inline-flex w-full">
            {props.gifs ? <GifOnCard {...props.gifs[2]} /> : null}
            <div className="flex-grow">
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
            {props.gifs ? <GifOnCard {...props.gifs[3]} /> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
});
