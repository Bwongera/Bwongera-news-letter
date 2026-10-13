
import Stories from "../assets/stories.json";
import {
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import {
  FaRegCommentAlt,
  FaDownload,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function CardStory() {
  const [commentStory, setCommentStory] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState({});

  const Action = [
    { icon: <AiOutlineLike />, text: "23" },
    { icon: <AiOutlineDislike />, text: "3" },
    { icon: <FaRegCommentAlt />, text: "1k" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.trim() === "") return;

    setComments((prev) => ({
      ...prev,
      [commentStory]: [
        ...(prev[commentStory] || []),
        {
          text: comment,
        },
      ],
    }));

    setComment("");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-13 gap-7 w-full">
      {Stories.map((story, storyIndex) => (
        <div
          key={storyIndex}
          className="shadow w-[250px] relative bg-white"
        >
          <img
            src={story.image}
            alt={story.title}
            className="w-full"
          />

          <h3 className="font-bold py-3 px-2">
            {story.title}
          </h3>

          <div className="flex items-center gap-5 pb-3 px-2">
            {Action.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                <span
                  className={
                    item.icon.type === FaRegCommentAlt
                      ? "cursor-pointer"
                      : ""
                  }
                  onClick={() => {
                    if (
                      item.icon.type === FaRegCommentAlt
                    ) {
                      setCommentStory(
                        commentStory === storyIndex
                          ? null
                          : storyIndex
                      );
                    }
                  }}
                >
                  {item.icon}
                </span>

                <span className="font-bold">
                  {item.text}
                </span>
              </div>
            ))}

            <FaDownload />
          </div>

          {commentStory === storyIndex && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setCommentStory(null)}
              ></div>

              <form
                onSubmit={handleSubmit}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[650px] h-[800px] bg-gray-100 shadow-2xl rounded-lg p-5 z-50 flex flex-col"
              >
                <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                  <h2 className="font-bold text-xl">
                    Comments
                  </h2>

                  <button
                    type="button"
                    onClick={() => setCommentStory(null)}
                    className="text-2xl text-gray-600 hover:text-black-600 cursor-pointer"
                  >
                    <IoClose />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto mt-5 pr-2">
                  {(comments[storyIndex] || []).map(
                    (item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-4 mb-4 shadow-sm"
                      >
                        <p className="text-gray-800">
                          {item.text}
                        </p>

                        <div className="flex items-center gap-5 mt-3 text-gray-600">
                         
                          <button
                            type="button"
                            className="flex items-center gap-1"
                          >
                            <AiOutlineLike />
                          </button>

                          
                          <button
                            type="button"
                            className="flex items-center gap-1"
                          >
                            <AiOutlineDislike />
                          </button>

                          
                          <button
                            type="button"
                            className="cursor-pointer"
                          >
                            Reply
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-auto pt-3 border-t border-gray-300">
                  <textarea
                    value={comment}
                    onChange={(e) =>
                      setComment(e.target.value)
                    }
                    placeholder="Add your comment here"
                    className="w-full h-[50px] bg-white border border-gray-300 rounded-lg px-3 py-2 outline-none resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
                  >
                    Comment
                  </button>
                </div>
              </form>
            </>
          )}

          <p className="px-2">
            {story.description}
          </p>

          <span className="block py-3 px-2 text-blue-600 cursor-pointer">
            View More...
          </span>
        </div>
      ))}
    </div>
  );
}

export default CardStory;




































































