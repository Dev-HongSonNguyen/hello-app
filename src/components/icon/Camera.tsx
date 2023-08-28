import React from "react";

const Camera = () => {
  return (
    <div className="bg-[#F1F1F5] p-2 rounded-[50%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="26"
        viewBox="0 0 30 26"
        fill="none"
      >
        <g filter="url(#filter0_d_127_5909)">
          <path
            d="M24.1875 7.85725H20.907L18.675 4.51435C18.4125 4.25725 18.0195 4 17.625 4H12.375C11.982 4 11.5875 4.25725 11.325 4.51435L9.09448 7.85725H5.8125C5.025 7.85725 4.5 8.37145 4.5 9.1429V20.7144C4.5 21.4858 5.025 22 5.8125 22H24.1875C24.975 22 25.5 21.4858 25.5 20.7144V9.1429C25.5 8.37145 24.975 7.85725 24.1875 7.85725ZM15 18.1429C12.7695 18.1429 11.0625 16.4715 11.0625 14.2858C11.0625 12.1 12.7695 10.4285 15 10.4285C17.232 10.4285 18.9375 12.1 18.9375 14.2858C18.9375 16.4715 17.232 18.1429 15 18.1429Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_127_5909"
            x="-1"
            y="-3"
            width="32"
            height="32"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_127_5909"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_127_5909"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Camera;
