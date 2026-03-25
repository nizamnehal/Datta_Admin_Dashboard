import React from 'react'

function QuotesDescription() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100">

      {/* Blockquotes Card */}
      <div className="bg-white rounded shadow">
        <div className="border-b border-[#f1f1f1] px-6 py-4 font-semibold">
          Blockquotes
        </div>

        <div className="p-6 text-gray-600 space-y-6">

          <p>Your awesome text goes here.</p>

          {/* Left Blockquote */}
          <blockquote className="border-l-4 border-gray-200 pl-4 italic">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="text-sm mt-2 text-gray-500">
              — Someone famous in <cite>Source Title</cite>
            </footer>
          </blockquote>

          <p>
            Add <span className="text-red-500">.text-right</span> for a blockquote
            with right-aligned content.
          </p>

          {/* Right Blockquote */}
          <blockquote className="border-r-4 border-gray-200 pr-4 italic text-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="text-sm mt-2 text-gray-500">
              — Someone famous in <cite>Source Title</cite>
            </footer>
          </blockquote>

        </div>
      </div>


      {/* Horizontal Description Card */}
      <div className="bg-white rounded shadow">

        <div className="border-b border-[#f1f1f1] px-6 py-4 font-semibold">
          Horizontal Description
        </div>

        <div className="p-6 text-gray-600 space-y-4">

          <div className="grid grid-cols-3 gap-4">
            <dt className="font-semibold">Description lists</dt>
            <dd className="col-span-2">
              A description list is perfect for defining terms.
            </dd>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <dt className="font-semibold">Euismod</dt>
            <dd className="col-span-2">
              Vestibulum id ligula porta felis euismod semper eget lacinia
              odio sem nec elit.
            </dd>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <dd className="col-span-2">
              Donec id elit non mi porta gravida at eget metus.
            </dd>
            <dt className="font-semibold text-right">
              Malesuada porta
            </dt>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <dd className="col-span-2">
              Etiam porta sem malesuada magna mollis euismod.
            </dd>
            <dt className="font-semibold text-right">
              Truncated term is truncated
            </dt>
          </div>

          <p className="pt-4">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </p>

        </div>
      </div>

    </div>
  );
}

export default QuotesDescription;