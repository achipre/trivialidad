export default function IconSound({ handleSound, volume }) {
  return (
    <svg
      onClick={handleSound}
      className="icon_sound"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z"
        fill="#0B409C"
      />
      <path
        d="M47.1966 21.0049C46.4176 21.0073 45.5561 21.3568 44.7698 22.1406L30.891 37.8395H20.4268C19.0896 37.8395 18 38.9291 18 40.2662V59.6805C18 61.0176 19.0896 62.1072 20.4268 62.1072H30.8935L44.6946 77.7309C47.1213 80.1576 49.5481 78.9151 49.5481 75.6074V23.9583C49.5481 22.0387 48.4973 20.9928 47.1966 21V21.0049Z"
        fill="#F5F5F5"
      />
      {volume !== 0 ? (
        <>
          <path
            d="M63.4421 26.5844C63.8015 26.2031 64.2747 25.9485 64.7908 25.8585C64.8668 25.8549 64.9429 25.8549 65.0189 25.8585C65.4932 25.823 65.9674 25.9276 66.3828 26.1594C75.0997 30.5591 81.0963 39.5673 81.0963 49.9734C81.0963 60.3794 75.1022 69.3876 66.3828 73.7873C66.095 73.975 65.7707 74.0995 65.4313 74.1525C65.0919 74.2055 64.7451 74.1859 64.4138 74.0949C64.0826 74.0038 63.7744 73.8435 63.5097 73.6245C63.245 73.4055 63.0299 73.1328 62.8785 72.8244C62.7271 72.5161 62.6428 72.1791 62.6314 71.8357C62.6199 71.4924 62.6815 71.1505 62.812 70.8327C62.9426 70.515 63.1391 70.2285 63.3886 69.9924C63.6381 69.7562 63.9349 69.5757 64.2593 69.4628C71.3892 65.8688 76.2428 58.5253 76.2428 49.9734C76.2532 45.9325 75.1377 41.9687 73.0215 38.5262C70.9053 35.0838 67.872 32.299 64.2617 30.4839C63.7793 30.2796 63.3759 29.9247 63.1118 29.4722C62.8478 29.0197 62.7372 28.4939 62.7968 27.9734C62.8563 27.4528 63.0827 26.9656 63.4421 26.5844Z"
            fill="#F5F5F5"
          />
          <path
            d="M57.6131 35.8483C58.0086 35.5046 58.5047 35.2982 59.0272 35.2598C59.1032 35.2562 59.1793 35.2562 59.2553 35.2598C59.7377 35.2484 60.2125 35.381 60.6192 35.6408C65.5965 38.7301 68.9624 44.0011 68.9624 49.9734C68.9624 55.9821 65.5674 61.2239 60.5439 64.3059C60.2756 64.5069 59.9686 64.6501 59.6421 64.7265C59.3157 64.8029 58.977 64.8108 58.6474 64.7498C58.3177 64.6887 58.0043 64.5601 57.7269 64.3719C57.4494 64.1837 57.214 63.9401 57.0354 63.6564C56.8568 63.3727 56.7389 63.0551 56.6892 62.7235C56.6395 62.392 56.659 62.0538 56.7465 61.7302C56.834 61.4065 56.9876 61.1046 57.1976 60.8433C57.4076 60.582 57.6695 60.367 57.9667 60.2119C61.75 57.8871 64.1089 54.1523 64.1089 49.9734C64.1089 45.8236 61.7864 42.1373 58.0419 39.81C57.5821 39.5589 57.2158 39.1657 56.9979 38.6893C56.78 38.2128 56.7222 37.6786 56.8331 37.1665C56.944 36.6544 57.2176 36.192 57.6131 35.8483Z"
            fill="#F5F5F5"
          />
        </>
      ) : (
        <path
          d="M61.1213 38.8787C59.9497 37.7071 58.0503 37.7071 56.8787 38.8787C55.7071 40.0503 55.7071 41.9497 56.8787 43.1213L63.5338 49.7765L56.8787 56.4316C55.7071 57.6032 55.7071 59.5027 56.8787 60.6743C58.0503 61.8458 59.9497 61.8458 61.1213 60.6743L67.7765 54.0191L74.4316 60.6743C75.6032 61.8458 77.5027 61.8458 78.6743 60.6743C79.8458 59.5027 79.8458 57.6032 78.6743 56.4316L72.0191 49.7765L78.6743 43.1213C79.8458 41.9498 79.8458 40.0503 78.6743 38.8787C77.5027 37.7071 75.6032 37.7071 74.4316 38.8787L67.7765 45.5338L61.1213 38.8787Z"
          fill="#F5F5F5"
        />
      )}
    </svg>
  );
}
