const Loading = () => {
   return (
      <div
         className={`fixed inset-0 bg-white z-50 flex justify-center items-center transition-opacity duration-500 ease-in-out`}
      >
         <div className="w-16 h-16 border-4 border-t-4 border-gray-600 rounded-full animate-spin"></div>
      </div>
   )
}

export default Loading
