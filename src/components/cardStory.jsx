

// import Stories from "../assets/stories.json";
// import {
//   AiOutlineLike,
//   AiOutlineDislike,
// } from "react-icons/ai";
// import {
//   FaRegCommentAlt,
//   FaDownload,
// } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
// import { useState } from "react";

// function CardStory() {
//   const [commentStory, setCommentStory] = useState(null);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState({});
//   const [replyComment, setReplyComment] = useState(null);
//   const [reply, setReply] = useState("");
//   const Action = [
//     { icon: <AiOutlineLike />, text: "23" },
//     { icon: <AiOutlineDislike />, text: "3" },
//     { icon: <FaRegCommentAlt />, text: "1k" },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (comment.trim() === "") return;

//     setComments((prev) => ({
//       ...prev,
//       [commentStory]: [
//         ...(prev[commentStory] || []),
//         {
//           text: comment,
//           likes: 0,
//           dislikes: 0,
//           replies: [],
//         },
//       ],
//     }));

//     setComment("");
//   };

//   const handleReply = (e, commentIndex) => {
//     e.preventDefault();

//     if (reply.trim() === "") return;

//     setComments((prev) => {
//       const storyComments = [...(prev[commentStory] || [])];

//       storyComments[commentIndex] = {
//         ...storyComments[commentIndex],
//         replies: [
//           ...(storyComments[commentIndex].replies || []),
//           reply,
//         ],
//       };

//       return {
//         ...prev,
//         [commentStory]: storyComments,
//       };
//     });

//     setReply("");
//     setReplyComment(null);
//   };

//   const handleLike = (storyIndex, commentIndex) => {
//     setComments((prev) => {
//       const storyComments = [...(prev[storyIndex] || [])];

//       storyComments[commentIndex] = {
//         ...storyComments[commentIndex],
//         likes: storyComments[commentIndex].likes + 1,
//       };

//       return {
//         ...prev,
//         [storyIndex]: storyComments,
//       };
//     });
//   };

//   const handleDislike = (storyIndex, commentIndex) => {
//     setComments((prev) => {
//       const storyComments = [...(prev[storyIndex] || [])];

//       storyComments[commentIndex] = {
//         ...storyComments[commentIndex],
//         dislikes:
//           storyComments[commentIndex].dislikes + 1,
//       };

//       return {
//         ...prev,
//         [storyIndex]: storyComments,
//       };
//     });
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-13 gap-7 w-full">
//       {Stories.map((story, storyIndex) => (
//         <div
//           key={storyIndex}
//           className="shadow w-[250px] relative bg-white"
//         >
          
//           <img
//             src={story.image}
//             alt={story.title}
//             className="w-full"
//           />

//           <h3 className="font-bold py-3 px-2">
//             {story.title}
//           </h3>

//           <div className="flex items-center gap-5 pb-3 px-2">
//             {Action.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2"
//               >
//                 <span
//                   className={
//                     item.icon.type === FaRegCommentAlt
//                       ? "cursor-pointer"
//                       : ""
//                   }
//                   onClick={() => {
//                     if (
//                       item.icon.type === FaRegCommentAlt
//                     ) {
//                       setCommentStory(
//                         commentStory === storyIndex
//                           ? null
//                           : storyIndex
//                       );
//                     }
//                   }}
//                 >
//                   {item.icon}
//                 </span>

//                 <span className="font-bold">
//                   {item.text}
//                 </span>
//               </div>
//             ))}

//             <FaDownload />
//           </div>

         
//           {commentStory === storyIndex && (
//             <>
             
//               <div
//                 className="fixed inset-0 bg-black/40 z-40"
//                 onClick={() => setCommentStory(null)}
//               ></div>

              
//               <form
//                 onSubmit={handleSubmit}
//                 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[650px] h-[800px] bg-gray-100 shadow-2xl rounded-lg p-5 z-50 flex flex-col"
//               >
                
//                 <div className="flex items-center justify-between border-b border-gray-300 pb-3">
//                   <h2 className="font-bold text-xl">
//                     Comments
//                   </h2>

//                   <button
//                     type="button"
//                     onClick={() => setCommentStory(null)}
//                     className="text-2xl text-gray-600 hover:text-red-600 cursor-pointer"
//                   >
//                     <IoClose />
//                   </button>
//                 </div>

               
//                 <div className="flex-1 overflow-y-auto mt-5 pr-2">
//                   {(comments[storyIndex] || []).map(
//                     (item, index) => (
//                       <div
//                         key={index}
//                         className="bg-white rounded-lg p-4 mb-4 shadow-sm"
//                       >
                        
//                         <p className="text-gray-800">
//                           {item.text}
//                         </p>

                      
//                         <div className="flex items-center gap-5 mt-3 text-gray-600">
//                           {/* Like */}
//                           <button
//                             type="button"
//                             onClick={() =>
//                               handleLike(
//                                 storyIndex,
//                                 index
//                               )
//                             }
//                             className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
//                           >
//                             <AiOutlineLike />
//                             <span>{item.likes}</span>
//                           </button>

                       
//                           <button
//                             type="button"
//                             onClick={() =>
//                               handleDislike(
//                                 storyIndex,
//                                 index
//                               )
//                             }
//                             className="flex items-center gap-1 cursor-pointer hover:text-red-600"
//                           >
//                             <AiOutlineDislike />
//                             <span>{item.dislikes}</span>
//                           </button>

                          
//                           <button
//                             type="button"
//                             onClick={() =>
//                               setReplyComment(
//                                 replyComment === index
//                                   ? null
//                                   : index
//                               )
//                             }
//                             className="cursor-pointer hover:text-blue-600"
//                           >
//                             Reply
//                           </button>
//                         </div>

                        
//                         {replyComment === index && (
//                           <div className="mt-3">
//                             <textarea
//                               value={reply}
//                               onChange={(e) =>
//                                 setReply(e.target.value)
//                               }
//                               placeholder="Write a reply..."
//                               className="w-full h-[50px] bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 outline-none resize-none"
//                             ></textarea>

//                             <button
//                               type="button"
//                               onClick={(e) =>
//                                 handleReply(e, index)
//                               }
//                               className="mt-2 px-4 py-1.5 bg-blue-600 text-white rounded-lg cursor-pointer"
//                             >
//                               Reply
//                             </button>
//                           </div>
//                         )}

                      
//                         {item.replies?.length > 0 && (
//                           <div className="ml-6 mt-3 border-l-2 border-gray-200 pl-3">
//                             {item.replies.map(
//                               (replyItem, replyIndex) => (
//                                 <div
//                                   key={replyIndex}
//                                   className="bg-gray-50 rounded-lg p-2 mb-2"
//                                 >
//                                   {replyItem}
//                                 </div>
//                               )
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     )
//                   )}
//                 </div>

              
//                 <div className="mt-auto pt-3 border-t border-gray-300">
//                   <textarea
//                     value={comment}
//                     onChange={(e) =>
//                       setComment(e.target.value)
//                     }
//                     placeholder="Add your comment here"
//                     className="w-full h-[50px] bg-white border border-gray-300 rounded-lg px-3 py-2 outline-none resize-none"
//                   ></textarea>

//                   <button
//                     type="submit"
//                     className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
//                   >
//                     Comment
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}

       
//           <p className="px-2">
//             {story.description}
//           </p>

          
//           <span className="block py-3 px-2 text-blue-600 cursor-pointer">
//             View More...
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CardStory;




































































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

                        {/* Like, Dislike na Reply ntibikora */}
                        <div className="flex items-center gap-5 mt-3 text-gray-400">
                          <button
                            type="button"
                            disabled
                            className="flex items-center gap-1 cursor-not-allowed"
                          >
                            <AiOutlineLike />
                            <span>0</span>
                          </button>

                          <button
                            type="button"
                            disabled
                            className="flex items-center gap-1 cursor-not-allowed"
                          >
                            <AiOutlineDislike />
                            <span>0</span>
                          </button>

                          <button
                            type="button"
                            disabled
                            className="cursor-not-allowed"
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







