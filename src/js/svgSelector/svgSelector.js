export function svgSelector(id) {
  switch (id) {
    case 'Rain' || 'Drizzle':
      return `    <svg viewBox="0 -7 463.84305 463" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m367.835938 288.960938h8c33.539062.003906 64.164062-19.058594 78.96875-49.15625 14.804687-30.09375 11.214843-65.988282-9.253907-92.554688-20.472656-26.570312-54.265625-39.191406-87.140625-32.546875-4.324218-21.582031-18.304687-39.992187-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429687-49.796875 18.082031-75.507812 73.105468-57.429687 122.902343-43.621094 1.375-78.078125 37.480469-77.4257815 81.117188.6562495 43.640625 36.1835935 78.691406 79.8281255 78.761719"
            fill="#d0dad9"
          />
          <g fill="#60a2d7">
            <path d="m127.835938 196.960938c8.835937 0 16 7.164062 16 16v192c0 8.835937-7.164063 16-16 16-8.839844 0-16-7.164063-16-16v-192c0-8.835938 7.160156-16 16-16zm0 0" />
            <path d="m191.835938 176.960938c8.835937 0 16 7.164062 16 16v240c0 8.835937-7.164063 16-16 16-8.839844 0-16-7.164063-16-16v-240c0-8.835938 7.160156-16 16-16zm0 0" />
            <path d="m255.835938 200.960938c8.835937 0 16 7.164062 16 16v192c0 8.835937-7.164063 16-16 16-8.839844 0-16-7.164063-16-16v-192c0-8.835938 7.160156-16 16-16zm0 0" />
            <path d="m319.835938 176.960938c8.835937 0 16 7.164062 16 16v240c0 8.835937-7.164063 16-16 16-8.839844 0-16-7.164063-16-16v-240c0-8.835938 7.160156-16 16-16zm0 0" />
          </g>
        </svg>`;
    case 'humidity':
      return `  <svg viewBox="-88 0 464 464" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m288 314.855469c0 82.367187-64.472656 149.144531-144 149.144531s-144-66.777344-144-149.144531c0-82.367188 144-314.855469 144-314.855469s144 232.488281 144 314.855469zm0 0"
            fill="#60a2d7"
          />
          <g fill="#a3d4f7">
            <path d="m104 392c-2.996094-.003906-5.738281-1.679688-7.105469-4.339844-1.371093-2.664062-1.136719-5.871094.601563-8.308594l80-112c2.566406-3.597656 7.5625-4.429687 11.160156-1.863281 3.597656 2.566407 4.429688 7.5625 1.863281 11.160157l-80 112c-1.503906 2.105468-3.933593 3.355468-6.519531 3.351562zm0 0" />
            <path d="m104 328c-13.457031 0-24-14.054688-24-32s10.542969-32 24-32 24 14.054688 24 32-10.542969 32-24 32zm0-48c-3.265625 0-8 6.230469-8 16s4.734375 16 8 16 8-6.230469 8-16-4.734375-16-8-16zm0 0" />
            <path d="m184 392c-13.457031 0-24-14.054688-24-32s10.542969-32 24-32 24 14.054688 24 32-10.542969 32-24 32zm0-48c-3.265625 0-8 6.230469-8 16s4.734375 16 8 16 8-6.230469 8-16-4.734375-16-8-16zm0 0" />
          </g>
        </svg>`;
    case 'windy':
      return ` <svg viewBox="0 0 464 464" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m8 464v-432c0-8.835938 7.164062-16 16-16s16 7.164062 16 16v432"
            fill="#92aeba"
          />
          <g fill="#ff5b42">
            <path d="m263.960938 48c-47.960938 0-47.960938-32-95.960938-32v128c48 0 48 32 95.960938 32 47.960937 0 48-32 96-32s48 32 96 32v-128c-48 0-48-32-96-32s-47.960938 32-96 32zm0 0" />
            <path d="m464 184h-8c-18.9375.296875-37.421875-5.816406-52.449219-17.34375-25.761719-19.542969-61.382812-19.542969-87.144531 0-31.132812 23.125-73.738281 23.125-104.871094 0-12.363281-9.804688-27.757812-14.988281-43.535156-14.65625h-1.886719l-128-64h-30.113281v-16h30.113281l128-64h1.886719c18.929688-.296875 37.402344 5.816406 52.414062 17.34375 12.367188 9.804688 27.769532 14.988281 43.546876 14.65625 15.785156.335938 31.191406-4.847656 43.566406-14.65625 31.144531-23.117188 73.753906-23.117188 104.898437 0 12.375 9.808594 27.785157 14.992188 43.574219 14.65625h8zm-294.078125-48c18.265625.128906 35.996094 6.210938 50.492187 17.328125 25.75 19.542969 61.363282 19.542969 87.113282 0 31.144531-23.117187 73.753906-23.117187 104.898437 0 10.257813 8.050781 22.597657 13.019531 35.574219 14.328125v-111.953125c-16.144531-1.308594-31.570312-7.226563-44.449219-17.046875-25.761719-19.542969-61.382812-19.542969-87.144531 0-15.027344 11.527344-33.507812 17.640625-52.445312 17.34375-18.929688.296875-37.40625-5.816406-52.425782-17.34375-11.863281-9.40625-26.539062-14.566406-41.679687-14.65625l-112 56zm0 0" />
            <path d="m160 16h16v128h-16zm0 0" />
          </g>
          <path
            d="m16 0h16c8.835938 0 16 7.164062 16 16v16c0 8.835938-7.164062 16-16 16h-16c-8.835938 0-16-7.164062-16-16v-16c0-8.835938 7.164062-16 16-16zm0 0"
            fill="#92aeba"
          />
        </svg>`;
    case 'Thunderstorm':
      return `  <svg viewBox="0 -39 463.84305 463" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m367.835938 288.960938h8c33.539062.003906 64.164062-19.058594 78.96875-49.15625 14.804687-30.09375 11.214843-65.988282-9.253907-92.554688-20.472656-26.570312-54.265625-39.191406-87.140625-32.546875-4.324218-21.582031-18.304687-39.992187-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429687-49.796875 18.082031-75.507812 73.105468-57.429687 122.902343-43.621094 1.375-78.078125 37.480469-77.4257815 81.117188.6562495 43.640625 36.1835935 78.691406 79.8281255 78.761719"
            fill="#a3d4f7"
          />
          <path
            d="m207.835938 176.960938h-64l-32 96h72l-22.59375 112 94.59375-144h-64zm0 0"
            fill="#ffa754"
          />
          <path
            d="m335.835938 336.960938c0 17.671874-14.328126 32-32 32-17.675782 0-32-14.328126-32-32 0-24 32-80 32-80s32 56 32 80zm0 0"
            fill="#60a2d7"
          />
          <path
            d="m335.835938 192.960938c0 17.671874-14.328126 32-32 32-17.675782 0-32-14.328126-32-32 0-17.671876 14.324218-32 32-32 17.671874 0 32 14.328124 32 32zm0 0"
            fill="#b7f9fe"
          />
        </svg>`;
    case 'Mist' || 'Smoke' || 'Haze' || 'Fog':
      return `<svg viewBox="0 -47 463.84305 463" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m367.835938 288.960938h8c33.539062.003906 64.164062-19.058594 78.96875-49.15625 14.804687-30.09375 11.214843-65.988282-9.253907-92.554688-20.472656-26.570312-54.265625-39.191406-87.140625-32.546875-4.324218-21.582031-18.304687-39.992187-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429687-49.796875 18.082031-75.507812 73.105468-57.429687 122.902343-43.621094 1.375-78.078125 37.480469-77.4257815 81.117188.6562495 43.640625 36.1835935 78.691406 79.8281255 78.761719"
            fill="#a3d4f7"
          />
          <g fill="#92aeba">
            <path d="m319.835938 320.960938h-80c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h80c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
            <path d="m159.835938 320.960938h-64c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h64c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
            <path d="m207.835938 320.960938h-16c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h16c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
            <path d="m223.835938 368.960938h-96c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h96c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
            <path d="m351.835938 368.960938h-32c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h32c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
            <path d="m287.835938 368.960938h-32c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h32c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
            <path d="m319.835938 224.960938h-80c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h80c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
            <path d="m159.835938 224.960938h-64c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h64c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
            <path d="m207.835938 224.960938h-16c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h16c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
            <path d="m223.835938 272.960938h-96c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h96c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
            <path d="m351.835938 272.960938h-32c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h32c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
            <path d="m287.835938 272.960938h-32c-4.421876 0-8-3.582032-8-8 0-4.417969 3.578124-8 8-8h32c4.417968 0 8 3.582031 8 8 0 4.417968-3.582032 8-8 8zm0 0" />
          </g>
        </svg>`;
    case 'Clouds':
      return `   <svg viewBox="1 0 471 472" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m400.335938 192c0 66.273438-53.726563 120-120 120-66.277344 0-120-53.726562-120-120s53.722656-120 120-120c66.273437 0 120 53.726562 120 120zm0 0"
            fill="#fdd020"
          />
          <path
            d="m280.335938 48c-4.421876 0-8-3.582031-8-8v-32c0-4.417969 3.578124-8 8-8 4.417968 0 8 3.582031 8 8v32c0 4.417969-3.582032 8-8 8zm0 0"
            fill="#fdd020"
          />
          <path
            d="m464.335938 200h-32c-4.421876 0-8-3.582031-8-8s3.578124-8 8-8h32c4.417968 0 8 3.582031 8 8s-3.582032 8-8 8zm0 0"
            fill="#fdd020"
          />
          <path
            d="m376.335938 296c-5.851563 0-11.691407.585938-17.425782 1.742188-4.324218-21.582032-18.304687-39.992188-37.933594-49.957032-19.625-9.964844-42.738281-10.382812-62.714843-1.136718-18.078125-49.796876-73.101563-75.507813-122.898438-57.429688-49.796875 18.082031-75.507812 73.105469-57.429687 122.902344-43.621094 1.378906-78.078125 37.480468-77.425782 81.121094.65625 43.636718 36.183594 78.6875 79.828126 78.757812h296c48.597656 0 88-39.398438 88-88s-39.402344-88-88-88zm0 0"
            fill="#a3d4f7"
          />
          <g fill="#fdd020">
            <path d="m168.335938 80-32-32" />
            <path d="m168.335938 88c-2.125 0-4.15625-.84375-5.65625-2.34375l-32-32c-2.082032-2.007812-2.914063-4.984375-2.183594-7.78125.734375-2.796875 2.917968-4.980469 5.714844-5.710938 2.796874-.734374 5.769531.101563 7.78125 2.179688l32 32c2.285156 2.289062 2.96875 5.730469 1.730468 8.71875-1.238281 2.988281-4.152344 4.9375-7.386718 4.9375zm0 0" />
            <path d="m392.335938 80 32-32" />
            <path d="m392.335938 88c-3.238282 0-6.152344-1.949219-7.390626-4.9375-1.238281-2.988281-.554687-6.429688 1.734376-8.71875l32-32c2.007812-2.078125 4.980468-2.914062 7.777343-2.179688 2.796875.730469 4.984375 2.914063 5.714844 5.710938s-.101563 5.773438-2.179687 7.78125l-32 32c-1.5 1.5-3.535157 2.34375-5.65625 2.34375zm0 0" />
          </g>
        </svg>`;
    case 'Clear':
      return `  <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
          <g fill="#fdd020">
            <path d="m376 240c0 75.109375-60.890625 136-136 136s-136-60.890625-136-136 60.890625-136 136-136 136 60.890625 136 136zm0 0" />
            <path d="m240 480c-4.417969 0-8-3.582031-8-8v-64c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v64c0 4.417969-3.582031 8-8 8zm0 0" />
            <path d="m240 80c-4.417969 0-8-3.582031-8-8v-64c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v64c0 4.417969-3.582031 8-8 8zm0 0" />
            <path d="m120 120-48-48" />
            <path d="m120 128c-2.121094 0-4.15625-.84375-5.65625-2.34375l-48-48c-3.03125-3.140625-2.988281-8.128906.097656-11.214844 3.085938-3.085937 8.074219-3.128906 11.214844-.097656l48 48c2.285156 2.289062 2.972656 5.730469 1.734375 8.71875s-4.15625 4.9375-7.390625 4.9375zm0 0" />
            <path d="m408 408-48-48" />
            <path d="m408 416c-2.121094 0-4.15625-.84375-5.65625-2.34375l-48-48c-3.03125-3.140625-2.988281-8.128906.097656-11.214844 3.085938-3.085937 8.074219-3.128906 11.214844-.097656l48 48c2.285156 2.289062 2.972656 5.730469 1.734375 8.71875s-4.15625 4.9375-7.390625 4.9375zm0 0" />
            <path d="m360 120 48-48" />
            <path d="m360 128c-3.234375 0-6.152344-1.949219-7.390625-4.9375s-.550781-6.429688 1.734375-8.71875l48-48c3.140625-3.03125 8.128906-2.988281 11.214844.097656 3.085937 3.085938 3.128906 8.074219.097656 11.214844l-48 48c-1.5 1.5-3.535156 2.34375-5.65625 2.34375zm0 0" />
            <path d="m472 248h-64c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h64c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m72 248h-64c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h64c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m72 408 48-48" />
            <path d="m72 416c-3.234375 0-6.152344-1.949219-7.390625-4.9375s-.550781-6.429688 1.734375-8.71875l48-48c3.140625-3.03125 8.128906-2.988281 11.214844.097656 3.085937 3.085938 3.128906 8.074219.097656 11.214844l-48 48c-1.5 1.5-3.535156 2.34375-5.65625 2.34375zm0 0" />
          </g>
        </svg>`;
    case 'Snow':
      return `    <svg viewBox="0 -47 463.84305 463" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m367.835938 288.960938h8c33.539062.003906 64.164062-19.058594 78.96875-49.15625 14.804687-30.09375 11.214843-65.988282-9.253907-92.554688-20.472656-26.570312-54.265625-39.191406-87.140625-32.546875-4.324218-21.582031-18.304687-39.992187-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429687-49.796875 18.082031-75.507812 73.105468-57.429687 122.902343-43.621094 1.375-78.078125 37.480469-77.4257815 81.117188.6562495 43.640625 36.1835935 78.691406 79.8281255 78.761719"
            fill="#a3d4f7"
          />
          <g fill="#b7f9fe">
            <path d="m263.835938 336.960938c0 17.671874-14.328126 32-32 32-17.675782 0-32-14.328126-32-32 0-17.671876 14.324218-32 32-32 17.671874 0 32 14.328124 32 32zm0 0" />
            <path d="m247.835938 240.960938c0 17.671874-14.328126 32-32 32-17.675782 0-32-14.328126-32-32 0-17.671876 14.324218-32 32-32 17.671874 0 32 14.328124 32 32zm0 0" />
            <path d="m175.835938 296.960938h-12.691407l10.347657-10.34375c3.03125-3.140626 2.988281-8.128907-.097657-11.214844-3.085937-3.085938-8.078125-3.128906-11.214843-.097656l-10.34375 10.34375v-12.6875c0-4.417969-3.582032-8-8-8-4.421876 0-8 3.582031-8 8v12.6875l-10.34375-10.34375c-3.140626-3.03125-8.128907-2.988282-11.214844.097656-3.085938 3.085937-3.132813 8.074218-.097656 11.214844l10.34375 10.34375h-12.6875c-4.421876 0-8 3.582031-8 8 0 4.417968 3.578124 8 8 8h12.6875l-10.34375 10.34375c-2.082032 2.007812-2.914063 4.984374-2.183594 7.78125.734375 2.796874 2.917968 4.980468 5.714844 5.710937 2.796874.734375 5.769531-.101563 7.78125-2.179687l10.34375-10.34375v12.6875c0 4.417968 3.578124 8 8 8 4.417968 0 8-3.582032 8-8v-12.6875l10.34375 10.34375c3.136718 3.03125 8.128906 2.988281 11.214843-.097657 3.085938-3.085937 3.128907-8.074219.097657-11.214843l-10.347657-10.34375h12.691407c4.417968 0 8-3.582032 8-8 0-4.417969-3.582032-8-8-8zm0 0" />
            <path d="m335.835938 264.960938h-12.691407l10.347657-10.34375c3.03125-3.140626 2.988281-8.128907-.097657-11.214844-3.085937-3.085938-8.078125-3.128906-11.214843-.097656l-10.34375 10.34375v-12.6875c0-4.417969-3.582032-8-8-8-4.421876 0-8 3.582031-8 8v12.6875l-10.34375-10.34375c-3.140626-3.03125-8.128907-2.988282-11.214844.097656-3.085938 3.085937-3.132813 8.074218-.097656 11.214844l10.34375 10.34375h-12.6875c-4.421876 0-8 3.582031-8 8 0 4.417968 3.578124 8 8 8h12.6875l-10.34375 10.34375c-2.082032 2.007812-2.914063 4.984374-2.183594 7.78125.734375 2.796874 2.917968 4.980468 5.714844 5.710937 2.796874.734375 5.769531-.101563 7.78125-2.179687l10.34375-10.34375v12.6875c0 4.417968 3.578124 8 8 8 4.417968 0 8-3.582032 8-8v-12.6875l10.34375 10.34375c3.136718 3.03125 8.128906 2.988281 11.214843-.097657 3.085938-3.085937 3.128907-8.074219.097657-11.214843l-10.347657-10.34375h12.691407c4.417968 0 8-3.582032 8-8 0-4.417969-3.582032-8-8-8zm0 0" />
          </g>
        </svg>`;
    case 'temperatureLow':
      return `        <svg viewBox="-144 0 464 464" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m88 360v-328c0-17.671875-14.328125-32-32-32s-32 14.328125-32 32v328c-15.109375 11.332031-24 29.113281-24 48 0 30.929688 25.070312 56 56 56s56-25.070312 56-56c0-18.886719-8.890625-36.667969-24-48zm0 0"
            fill="#a3d4f7"
          />
          <g fill="#92aeba">
            <path d="m168 336h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 304h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 272h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 240h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 208h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 176h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 144h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 112h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 80h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
          </g>
          <path
            d="m64 377.015625v-41.015625c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v41.015625c-14.175781 3.050781-24.222656 15.6875-24 30.183594 0 17.675781 14.328125 32 32 32s32-14.324219 32-32c.222656-14.496094-9.824219-27.132813-24-30.183594zm0 0"
            fill="#ff5b42"
          />
        </svg>`;
    case 'temperatureHigh':
      return `     <svg viewBox="-144 0 464 464" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m88 360v-328c0-17.671875-14.328125-32-32-32s-32 14.328125-32 32v328c-15.109375 11.332031-24 29.113281-24 48 0 30.929688 25.070312 56 56 56s56-25.070312 56-56c0-18.886719-8.890625-36.667969-24-48zm0 0"
            fill="#a3d4f7"
          />
          <g fill="#92aeba">
            <path d="m168 336h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 304h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 272h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 240h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 208h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 176h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 144h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 112h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 80h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
          </g>
          <path
            d="m64 377.015625v-313.015625c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v313.015625c-14.175781 3.050781-24.222656 15.6875-24 30.183594 0 17.675781 14.328125 32 32 32s32-14.324219 32-32c.222656-14.496094-9.824219-27.132813-24-30.183594zm0 0"
            fill="#ff5b42"
          />
        </svg>`;
    case 'temperatureNormal':
      return `       <svg viewBox="-144 0 464 464" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m88 360v-328c0-17.671875-14.328125-32-32-32s-32 14.328125-32 32v328c-15.109375 11.332031-24 29.113281-24 48 0 30.929688 25.070312 56 56 56s56-25.070312 56-56c0-18.886719-8.890625-36.667969-24-48zm0 0"
            fill="#a3d4f7"
          />
          <g fill="#92aeba">
            <path d="m168 336h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 304h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 272h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 240h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 208h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 176h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 144h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m152 112h-32c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h32c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
            <path d="m168 80h-48c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8h48c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0" />
          </g>
          <path
            d="m64 377.015625v-185.015625c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v185.015625c-14.175781 3.050781-24.222656 15.6875-24 30.183594 0 17.675781 14.328125 32 32 32s32-14.324219 32-32c.222656-14.496094-9.824219-27.132813-24-30.183594zm0 0"
            fill="#ff5b42"
          />
        </svg>`;

    default:
      return `  <svg
          viewBox="0 0 463 463"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M367.167 295.844H375.153C408.631 295.848 439.2 276.82 453.978 246.777C468.756 216.738 465.173 180.909 444.741 154.39C424.306 127.868 390.574 115.27 357.759 121.903C353.442 100.36 339.487 81.9832 319.894 72.0365C300.305 62.0897 277.233 61.6725 257.293 70.9018C239.248 21.1954 184.325 -4.46877 134.618 13.5765C84.9118 31.6257 59.2476 86.5491 77.2929 136.255C33.751 137.628 -0.64336 173.668 0.00779792 217.225C0.662855 260.787 36.1256 295.774 79.6908 295.844"
              fill="#D0DAD9"
            />
            <path
              d="M127.604 204.011C136.423 204.011 143.575 211.162 143.575 219.982V411.633C143.575 420.453 136.423 427.604 127.604 427.604C118.78 427.604 111.633 420.453 111.633 411.633V219.982C111.633 211.162 118.78 204.011 127.604 204.011Z"
              fill="#4D80A9"
            />
            <path
              d="M191.487 184.047C200.307 184.047 207.458 191.198 207.458 200.018V439.582C207.458 448.402 200.307 455.553 191.487 455.553C182.663 455.553 175.516 448.402 175.516 439.582V200.018C175.516 191.198 182.663 184.047 191.487 184.047Z"
              fill="#4D80A9"
            />
            <path
              d="M255.371 208.004C264.191 208.004 271.342 215.155 271.342 223.975V415.626C271.342 424.446 264.191 431.597 255.371 431.597C246.547 431.597 239.4 424.446 239.4 415.626V223.975C239.4 215.155 246.547 208.004 255.371 208.004Z"
              fill="#4D80A9"
            />
            <path
              d="M319.255 184.047C328.074 184.047 335.226 191.198 335.226 200.018V439.582C335.226 448.402 328.074 455.553 319.255 455.553C310.431 455.553 303.284 448.402 303.284 439.582V200.018C303.284 191.198 310.431 184.047 319.255 184.047Z"
              fill="#4D80A9"
            />
          </g>
          <g filter="url(#filter0_d)">
            <rect
              width="321"
              height="320"
              transform="translate(71 71)"
              fill="white"
              fill-opacity="0.7"
            />
            <path
              d="M231.5 316L212.75 353.5L231.5 391C252.211 391 269 374.211 269 353.5C269 332.789 252.211 316 231.5 316Z"
              fill="#0A77E8"
            />
            <path
              d="M194 353.5C194 374.211 210.789 391 231.5 391V316C210.789 316 194 332.789 194 353.5Z"
              fill="#0F9AF0"
            />
            <path
              d="M231.5 71L194 108.5L231.5 146C243.907 146 254 156.093 254 168.5C254 175.111 251.098 181.369 246.038 185.669L231.5 198.029L206.5 247.639L231.5 297.25H269V264.589L294.61 242.816C316.465 224.244 329 197.158 329 168.5C329 114.738 285.262 71 231.5 71V71Z"
              fill="#0A77E8"
            />
            <path
              d="M194 229.911V297.25H231.5V198.029L194 229.911Z"
              fill="#0F9AF0"
            />
            <path
              d="M134 168.5V177.875H209V168.5C209 156.093 219.093 146 231.5 146V71C177.738 71 134 114.738 134 168.5Z"
              fill="#0F9AF0"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="67"
              y="71"
              width="329"
              height="328"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <clipPath id="clip0">
              <rect width="463" height="463" fill="white" />
            </clipPath>
          </defs>
        </svg>`;
      break;
  }
}
