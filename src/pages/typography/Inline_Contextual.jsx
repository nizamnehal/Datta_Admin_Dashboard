import React from 'react'

const Inline_Contextual = () => {
  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-6">

        {/* Left Card */}
        <div className="bg-white h-auto rounded shadow">

          <div className="border-b border-[#f1f1f1] px-6 py-4 font-semibold">
            Inline Text Elements
          </div>

          <div className="p-6 text-gray-600 space-y-2">

            <p>Your title goes here</p>

            <p>
              You can use the mark tag to{" "}
              <mark className="bg-yellow-300 px-1">
                highlight
              </mark>{" "}
              text.
            </p>

            <p className="line-through">
              This line of text is meant to be treated as deleted text.
            </p>

            <p className="underline">
              This line of text is meant to be treated as an addition to the
              document.
            </p>

            <p className="font-bold">
              rendered as bold text
            </p>

            <p className="italic">
              rendered as italicized text
            </p>

          </div>

        </div>

        {/* Right Card */}
        <div className="bg-white rounded shadow">

          <div className="border-b border-[#f1f1f1] px-6 py-4 font-semibold">
            Contextual Text Colors
          </div>

          <div className="p-6 space-y-2">

            <p className="text-gray-600">
              Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
            </p>

            <p className="text-blue-500">
              Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>

            <p className="text-green-500">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <p className="text-cyan-500">
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </p>

            <p className="text-yellow-500">
              Etiam porta sem malesuada magna mollis euismod.
            </p>

            <p className="text-red-500">
              Donec ullamcorper nulla non metus auctor fringilla.
            </p>

            <p className="text-black">
              Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>

          </div>

        </div>

      </div>

    </>
  )
}

export default Inline_Contextual