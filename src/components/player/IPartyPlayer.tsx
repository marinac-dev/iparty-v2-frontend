import React from "react";

interface Props {}

export const IPartyPlayer: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-start items-center mx-4 my-2 rounded py-4">
      {/* Player | Search */}
      <div className="flex flex-col lg:flex-row bg-gray-300 dark:bg-erie-black-800 rounded-md p-2 w-full justify-center items-center">
        {/* Recommend & History | Player  */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-2/3"></div>
      </div>
      {/* PlayList */}
    </div>
  );
};
