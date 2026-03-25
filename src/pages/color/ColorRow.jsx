import React from 'react'

function ColorRow({ title, colors }) {
  return (
    <div className="mb-6">

      <div className="flex items-center gap-6">

        {/* Title */}
        <div className="w-24 text-sm font-medium">
          {title}
        </div>

        {/* Color Boxes */}
        <div className="flex gap-3 flex-wrap">

          {colors.map((color, index) => (
            <div key={index} className="text-center">

              <div
                className="w-20 h-12 rounded"
                style={{ backgroundColor: color.value }}
              ></div>

              <p className="text-xs mt-1">{color.label}</p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ColorRow;