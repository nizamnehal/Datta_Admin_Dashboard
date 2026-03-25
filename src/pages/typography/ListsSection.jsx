import React from 'react'

function ListsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 bg-gray-100">

      {/* Unordered */}
      <div className="bg-white rounded shadow">

        <div className="border-b border-[#f1f1f1] px-6 py-4 font-semibold">
          Unordered
        </div>

        <div className="p-6 text-gray-600">

          <ul className="list-disc pl-5 space-y-1">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>

            <ul className="list-disc pl-6">
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>

            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>

        </div>

      </div>

      {/* Ordered */}
      <div className="bg-white rounded shadow">

        <div className="border-b border-[#f1f1f1] px-6 py-4 font-semibold">
          Ordered
        </div>

        <div className="p-6 text-gray-600">

          <ol className="list-decimal pl-5 space-y-1">

            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>

            <ul className="list-disc pl-6">
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>

            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>

          </ol>

        </div>

      </div>

      {/* Unstyled */}
      <div className="bg-white rounded shadow">

        <div className="border-b border-[#f1f1f1] px-6 py-4 font-semibold">
          Unstyled
        </div>

        <div className="p-6 text-gray-600 space-y-2">

          <p>Lorem ipsum dolor sit amet</p>
          <p>Integer molestie lorem at massa</p>

          <ul className="pl-5">
            <li>Phasellus iaculis neque</li>
          </ul>

          <p>Faucibus porta lacus fringilla vel</p>
          <p>Eget porttitor lorem</p>

          <h4 className="font-semibold mt-4">Inline</h4>

          <hr className="my-3 border border-[#f1f1f1]" />

          <div className="flex gap-4">
            <span>Lorem ipsum</span>
            <span>Phasellus iaculis</span>
            <span>Nulla volutpat</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ListsSection;
