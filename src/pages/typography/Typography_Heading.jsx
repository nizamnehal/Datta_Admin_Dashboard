import React from 'react'

const Typography_Heading = () => {
  return (
    <>
        <div className="bg-white rounded shadow mb-12">

          {/* Header */}
          <div className="border-b border-[#f1f1f1] px-6 py-6 font-semibold">
            Headings
          </div>

          {/* Body */}
          <div className="p-6">

            <h1 className="text-6xl font-light mb-2">
              h1. Heading
            </h1>

            <h2 className="text-5xl font-light mb-4">
              h2. Heading
            </h2>

            <h3 className="text-2xl font-semibold">
              This is a H3
            </h3>

            <h4 className="text-xl">
              This is a H4
            </h4>

            <h5 className="text-lg">
              This is a H5
            </h5>

            <h6 className="text-sm text-gray-600">
              This is a H6
            </h6>

          </div>

        </div>

      
    </>
  )
}

export default Typography_Heading
