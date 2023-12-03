const Ingredients = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-10 gap-20">
      <div className="self-start m-4 text-2xl font-bold">
        냉장고에 있는 재료를
        <br />
        모두 입력해 주세요.
      </div>
      <div className="flex justify-between w-3/4">
        <input
          className="p-1 text-sm border-b border-slate-300"
          name="ingredients"
          placeholder="재료를 입력하세요."
        />
        <button className="w-12 p-1 text-black bg-pink-100 rounded-md">
          추가
        </button>
      </div>
      <div className="w-3/4">
        <button className="w-full p-1.5 text-white bg-pink-500 rounded-md">
          입력 완료
        </button>
      </div>
    </div>
  );
};

export default Ingredients;
