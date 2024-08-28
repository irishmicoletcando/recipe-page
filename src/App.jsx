import Title from "./components/Title"
import PreparationTime from "./components/PreparationTime"
import Ingredients from "./components/Ingredients"
import Instructions from "./components/Instructions"
import Nutrition from "./components/Nutrition"
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
  return (
    <main className="space-y-5">
      <div className="m-0 p-0 overflow-hidden sm:rounded-2xl sm:m-10">
        <img
          src="src/assets/images/image-omelette.jpeg"
          alt="omelette image"
          className="w-full h-auto object-cover"
        />
      </div>
      <Title />
      <PreparationTime />
      <Ingredients />
      <hr className="m-6 sm:m-10"/>
      <Instructions />
      <hr className="m-6 sm:m-10"/>
      <Nutrition />
      <br />
      <p className="text-sm text-center">Coded by: Irish Micole Cando</p>
      <SpeedInsights />
    </main>
  )
}