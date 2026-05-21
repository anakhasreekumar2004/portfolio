import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [Value, setValue] = useState(1);
  function Increment() {
    setCount(count + Number(Value));
  }

  function Decrement() {
    if (count > 0){

    setCount(count - Number(Value));
  }
}

  function Reset() {
    setCount(0);
  }
  useEffect(()=>{
    console.log('count changed to',count)
  },[count]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">

      <div className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 w-80 text-center text-white">

        <h1 className="text-2xl font-semibold mb-6 tracking-wide">

        </h1>
      
        <div className="text-7xl font-bold mb-8 drop-shadow-lg">
          {count}
        </div>
<input type="Number" Value={value} onchanged={(x) => setValue(x.target.value)} className="rounded-lg p-2 text-black"/>
        <div className="flex flex-col gap-4">

          <button
            onClick={Increment}
            className="bg-green-500 hover:bg-green-600 active:scale-95 transition-all py-3 rounded-xl font-semibold shadow-lg"
          >
             Increment +
          </button>

          <button
            onClick={Decrement}
            className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all py-3 rounded-xl font-semibold shadow-lg"
          >
             Decrement -
          </button>

          <button
            onClick={Reset}
            className="bg-gray-800 hover:bg-gray-900 active:scale-95 transition-all py-3 rounded-xl font-semibold shadow-lg"
          >
            Reset to back 
          </button>

        </div>

        <p className="mt-6 text-sm text-white/80">
          Limit: 0 to 20
        </p>

      </div>
    </div>
  );
}

export default Counter;