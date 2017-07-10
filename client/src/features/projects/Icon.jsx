import React from 'react';

const Icon = (props) => {

  let svgPath;
  if (props.iconType.toLowerCase() === 'github') {
    svgPath = githubSVGPath;
  } else if (props.iconType.toLowerCase() === 'chrome') {
    svgPath = chromeSVGPath;
  } else {
    throw new Error('Props.iconType was not found or is not a valid choice!');
  }

  return (
    <a href={props.linkTo} target="_blank">
      <svg version="1.1" width="16" height="16" viewBox="0 0 512 512" style={{"margin":"0 8px"}}>
        <path
          style={{"fill": (props.fill ? props.fill : "white")}}
          d={svgPath}
          />
      </svg>
    </a>);
}

const githubSVGPath = "M256.004 6.321c-141.369 0-256.004 114.609-256.004 255.999 0 113.107 73.352 209.066 175.068 242.918 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-0.24-26.271-0.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232-56.865-6.471-116.638-28.425-116.638-126.516 0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751 0.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.975-116.895 126.312 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-0.298 61.822-0.298 70.254 0 6.814 4.611 14.797 17.586 12.283 101.661-33.888 174.921-129.813 174.921-242.884 0-141.39-114.617-255.999-255.996-255.999z"

const chromeSVGPath = "M129.139 223.271l-73.266-126.901c46.909-58.732 119.117-96.37 200.127-96.37 93.716 0 175.655 50.368 220.266 125.5h-208.885c-3.752-0.325-7.546-0.5-11.381-0.5-60.937 0-112.289 41.822-126.861 98.271zM347.653 162.5h146.73c11.37 28.965 17.617 60.502 17.617 93.5 0 140.413-113.050 254.402-253.093 255.963l104.697-181.339c14.74-21.189 23.396-46.913 23.396-74.624 0-36.585-15.082-69.71-39.347-93.5zM163 256c0-51.28 41.72-93 93-93s93 41.72 93 93c0 51.28-41.72 93-93 93s-93-41.72-93-93zM291.091 382.221l-73.289 126.939c-123.266-18.442-217.802-124.758-217.802-253.16 0-45.609 11.942-88.423 32.848-125.512l104.515 181.027c20.934 44.556 66.238 75.485 118.637 75.485 12.15 0 23.918-1.67 35.091-4.779z";

export default Icon;
