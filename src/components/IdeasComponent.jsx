import Post from "../components/Post";

const IdeasComponent = () => (
  <>
    <main className="w-main pl-[17.5rem]">
      <div className=" p-0 flex justify-center">
        <div className=" post-margin-left w-full max-w-[44rem]">
          <Post />
        </div>
        <div className="my-4 ml-[1.2rem] max-w-[18.625rem] border-[#ebedf1] rounded-2xl post-margin-right bg-white border w-full" />
      </div>
    </main>
  </>
);

export default IdeasComponent;
