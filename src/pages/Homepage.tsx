export default function Homepage() {
  return (
    <>
      {/* Stack + Center */}
      <article className="flex flex-col items-center justify-center gap-5">
        <header className="flex flex-col gap-5 text-center">
          <img src="/public/assets/image-omelette.jpeg" />
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </header>
        {/* Stack + Center */}
        <main className="flex flex-col items-center justify-center gap-5">
          {/* Stack + Box */}
          <div className="flex max-w-[80%] flex-col bg-pink-50 p-8">
            <h3 className="text-xl font-bold text-rose-800">
              Preparation time
            </h3>
            <ul className="list-disc">
              <li>
                <span className="font-bold">Total</span>: Approximately 10
                minutes
              </li>
              <li>
                <span className="font-bold">Preparation</span>: 5 minutes
              </li>
              <li>
                <span className="font-bold">Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>
          {/* Stack + Center + Box */}
          <div className="flex max-w-[90%] flex-col gap-5">
            <h3 className="p-0 text-2xl font-bold">Ingredients</h3>
            <ul className="list-disc px-8">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          <hr className="my-5 w-full max-w-[80%] bg-black text-black" />
          {/* Stack + Center + Box*/}
          <div className="flex max-w-[90%] flex-col gap-5">
            <h3 className="text-3xl font-bold">Instructions</h3>
            <ol className="list-decimal px-8">
              <li>
                <span className="font-bold">Beat the eggs</span>: In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li>
                <span className="font-bold">Heat the pan</span>: Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li>
                <span className="font-bold">Cook the omelette</span>: Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li>
                <span className="font-bold">Add fillings (optional)</span>: When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>
              <li>
                <span className="font-bold">Fold and serve</span>: As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li>
                <span className="font-bold">Enjoy</span>: Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </div>
          <hr />
          {/* Stack + Center + Box */}
          <div className="flex max-w-[90%] flex-col gap-5">
            <h3 className="text-2xl font-bold">Nutrition</h3>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table>
              {/* Box */}
              <tr className="border-b-1 border-gray-300">
                <th>Calories</th>
                <td>277kcal</td>
              </tr>
              {/* Box */}
              <tr className="border-b-1 border-gray-300">
                <th>Carbs</th>
                <td>0g</td>
              </tr>
              {/* Box */}
              <tr className="border-b-1 border-gray-300">
                <th>Protein</th>
                <td>20g</td>
              </tr>
              {/* Box */}
              <tr className="border-b-1 border-gray-300">
                <th>Fat</th>
                <td>22g</td>
              </tr>
            </table>
          </div>
        </main>
      </article>
    </>
  );
}
