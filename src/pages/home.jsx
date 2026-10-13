
// import CardStory from "../components/cardStory";
// import Header from "../components/header";
// import TopStory from "../components/topStory";

// function Home() {
//   return (
//     <div className="bg-gray-300 min-h-screen">
//       <Header />

//       <div className="flex flex-col lg:flex-row bg-white gap-10 mx-5 lg:mx-20 my-10 p-5 lg:p-10 rounded-[10px]">

//         <div className="w-full lg:w-1/3">
//           <TopStory />
//         </div>

//         <div className="w-full lg:w-2/3">
//           <CardStory />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Home;








import CardStory from "../components/cardStory";
import Header from "../components/header";
import TopStory from "../components/topStory";

function Home() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Header />

      <main className="flex flex-col lg:flex-row bg-white gap-10 mx-5 lg:mx-20 my-10 p-5 lg:p-10 rounded-[10px]">
        <section className="w-full lg:w-1/3">
          <TopStory />
        </section>

        <section className="w-full lg:w-2/3">
          <CardStory />
        </section>
      </main>
    </div>
  );
}

export default Home;












