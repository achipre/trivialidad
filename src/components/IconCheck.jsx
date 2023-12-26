export default function IconCheck({handleCheckMiscelanea, isCheckMiscelanea}) {
  return (
    
    <svg onClick={handleCheckMiscelanea} width="41" height="32" viewBox="0 0 145 113" fill="none">
    <rect x="9" y="13" width="100" height="100" rx="7" fill="white"/>
    {isCheckMiscelanea && 
    <path d="M44.3515 101.238L45.4023 102H46.7006H65.3841H66.9645L68.1181 100.92L135.734 37.6064L138.83 34.7076L135.755 31.7866L111.874 9.1L108.797 6.17669L106.061 9.42161L57.4638 67.0607L43.1036 47.2633L40.5069 43.6835L37.2048 46.6253L10.3392 70.5602L6.62871 73.8659L10.6509 76.7843L44.3515 101.238Z" fill="#0B409C" stroke="white" stroke-width="8"/>}
    </svg>



  )
}
