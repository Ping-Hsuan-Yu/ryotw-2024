// https://vike.dev/Head

import logoUrl from "../assets/ryo-logo.ico";
import iconMobile from "../assets/logo/ryo-logo.svg";
import previewImage from "../assets/kv/Ryo_KV.webp";

export default function HeadDefault() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <link rel="apple-touch-icon" href={iconMobile}/>
      <meta property="og:image" content={previewImage}/>
    </>
  );
}
