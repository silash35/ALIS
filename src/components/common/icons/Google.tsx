const Love = () => (
  <svg height="46" viewBox="0 0 46 46" width="46" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter height="1.145" id="filter-1" width="1.12" x="-.06" y="-.06">
        <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="0.5" />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0"
        />
        <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2" />
        <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="0.5" />
        <feColorMatrix
          in="shadowBlurOuter2"
          result="shadowMatrixOuter2"
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="shadowMatrixOuter2" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <rect height="40" id="path-2" rx="2" width="40" />
    </defs>
    <g fill="none" fillRule="evenodd" id="Google-Button">
      <g id="btn_google_light_normal" transform="translate(-1 -1)">
        <g filter="url(#filter-1)" id="button" transform="translate(4 4)">
          <g id="button-bg">
            <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-2" />
            <g fill="none">
              <use xlinkHref="#path-2" />
              <use xlinkHref="#path-2" />
              <use xlinkHref="#path-2" />
            </g>
          </g>
        </g>
        <g id="logo_googleg_48dp" transform="translate(15 15)">
          <path
            d="m17.64 9.2045c0-0.63818-0.057273-1.2518-0.16364-1.8409h-8.4764v3.4814h4.8436c-0.20864 1.125-0.84273 2.0782-1.7959 2.7164v2.2582h2.9086c1.7018-1.5668 2.6836-3.8741 2.6836-6.615z"
            fill="#4285F4"
            id="Shape"
          />
          <path
            d="m9 18c2.43 0 4.4673-0.80591 5.9564-2.1805l-2.9086-2.2582c-0.80591 0.54-1.8368 0.85909-3.0477 0.85909-2.3441 0-4.3282-1.5832-5.0359-3.7105h-3.0068v2.3318c1.4809 2.9414 4.5245 4.9582 8.0427 4.9582z"
            fill="#34A853"
          />
          <path
            d="m3.9641 10.71c-0.18-0.54-0.28227-1.1168-0.28227-1.71s0.10227-1.17 0.28227-1.71v-2.3318h-3.0068c-0.60955 1.215-0.95727 2.5895-0.95727 4.0418 0 1.4523 0.34773 2.8268 0.95727 4.0418l3.0068-2.3318z"
            fill="#FBBC05"
          />
          <path
            d="m9 3.5795c1.3214 0 2.5077 0.45409 3.4405 1.3459l2.5814-2.5814c-1.5586-1.4523-3.5959-2.3441-6.0218-2.3441-3.5182 0-6.5618 2.0168-8.0427 4.9582l3.0068 2.3318c0.70773-2.1273 2.6918-3.7105 5.0359-3.7105z"
            fill="#EA4335"
          />
          <path d="m0 0h18v18h-18v-18z" />
        </g>
      </g>
    </g>
  </svg>
);

export default Love;
