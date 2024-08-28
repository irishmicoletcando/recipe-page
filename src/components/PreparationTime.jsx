export default function PreparationTime() {
  return (
    <div className="bg-rose-50 rounded-xl p-5 m-6 sm:m-10">
      <h1 className="text-xl font-semibold text-rose-800 mb-3">Preparation Time</h1>
      <ul className="ml-4 list-disc list-outside space-y-2 sm:ml-10">
        <li className="marker: text-rose-800">
          <p className="text-stone-900">
            <span className="ml-1 font-bold text-stone-600 sm:ml-5">Total:</span> Approximately 10 minutes
          </p>
        </li>
        <li className="marker: text-rose-800">
          <p className="text-stone-900">
            <span className="ml-1 font-bold text-stone-600 sm:ml-5">Preparation:</span> 5 minutes
          </p>
        </li>
        <li className="marker: text-rose-800">
          <p className="text-stone-900">
            <span className="ml-1 font-bold text-stone-600 sm:ml-5">Cooking:</span> 5 minutes
          </p>
        </li>
      </ul>
    </div>
  )
}
