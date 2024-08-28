export default function Nutrition() {
  return (
    <div className="space-y-3 m-6 sm:m-10">
      <h1 className="text-3xl font-young-serif text-brown-800">Nutrition</h1>
      <p className="text-stone-900">The table below shows nutritional values per serving without the additional fillings.</p>
      <div className="flex max-w-100 justify-around">
        <p className="text-stone-900">Calories</p>
        <p className="text-brown-800 font-bold">277kcal</p>
      </div>
      <hr />
      <div className="flex max-w-100 justify-around">
        <p className="text-stone-900">Carbs</p>
        <p className="text-brown-800 font-bold">0g</p>
      </div>
      <hr />
      <div className="flex max-w-100 justify-around">
        <p className="text-stone-900">Protein</p>
        <p className="text-brown-800 font-bold">20g</p>
      </div>
      <hr />
      <div className="flex max-w-100 justify-around">
        <p className="text-stone-900">Fat</p>
        <p className="text-brown-800 font-bold">22g</p>
      </div>
    </div>
  )
}
