import { Passion_One } from "next/font/google";
import { ericaOne } from "@/app/page";
import "./modalInfo.css";

const coda = Passion_One({ weight: "700", subsets: ["latin"] });

export default function ModalInfo({ handleModalInfo, language }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <section className="section-info" onClick={handleModalInfo}>
      <article onClick={handleClick} className={ericaOne.className}>
        <h2 className="titleInfo">{language ? 'INFORMACION' : 'INFORMATION'}</h2>
        <hr />
        <p className={`${coda.className} aboutGame`}>
          {language ? 'Trivialida es un juegos sobre preguntas y respuestas de cultura general.' : 
          'Trivia is a game about general culture questions and answers.'}
        </p>
        <br />
        <p className={`${coda.className}`}>{language ?'Creado por:' : 'Created by:'} Alex Chipre</p>
        <p className={`${coda.className}`}>{language ?'Música por:' : 'Music by:'} Bobby Cole</p>
        <hr />
        <div className="socials">
          <a href="https://instagram.com/chipredev" target="_blank">
            <svg
              className="instagram"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="#F5F5F5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.4303 0C15.7481 -4.18995e-07 10.2984 2.2567 6.27971 6.27389C2.26098 10.2911 0.00218212 15.7399 0 21.4221V78.5697C0 84.2533 2.25783 89.7042 6.2768 93.7232C10.2958 97.7422 15.7467 100 21.4303 100H78.5779C84.2601 99.9978 89.7089 97.739 93.7261 93.7203C97.7433 89.7016 100 84.2519 100 78.5697V21.4221C99.9978 15.7413 97.7401 10.2937 93.7232 6.2768C89.7062 2.25985 84.2587 0.00218116 78.5779 0H21.4303ZM84.742 21.455C84.742 23.092 84.0917 24.662 82.9342 25.8195C81.7766 26.9771 80.2067 27.6274 78.5697 27.6274C76.9327 27.6274 75.3627 26.9771 74.2052 25.8195C73.0476 24.662 72.3973 23.092 72.3973 21.455C72.3973 19.818 73.0476 18.2481 74.2052 17.0905C75.3627 15.933 76.9327 15.2827 78.5697 15.2827C80.2067 15.2827 81.7766 15.933 82.9342 17.0905C84.0917 18.2481 84.742 19.818 84.742 21.455ZM50.0123 32.878C45.4724 32.878 41.1184 34.6814 37.9081 37.8917C34.6979 41.1019 32.8944 45.4559 32.8944 49.9959C32.8944 54.5358 34.6979 58.8899 37.9081 62.1001C41.1184 65.3103 45.4724 67.1138 50.0123 67.1138C54.5523 67.1138 58.9063 65.3103 62.1166 62.1001C65.3268 58.8899 67.1303 54.5358 67.1303 49.9959C67.1303 45.4559 65.3268 41.1019 62.1166 37.8917C58.9063 34.6814 54.5523 32.878 50.0123 32.878ZM24.6564 49.9959C24.6564 43.2733 27.327 36.826 32.0806 32.0723C36.8342 27.3187 43.2815 24.6482 50.0041 24.6482C56.7267 24.6482 63.174 27.3187 67.9277 32.0723C72.6813 36.826 75.3518 43.2733 75.3518 49.9959C75.3518 56.7185 72.6813 63.1658 67.9277 67.9194C63.174 72.673 56.7267 75.3436 50.0041 75.3436C43.2815 75.3436 36.8342 72.673 32.0806 67.9194C27.327 63.1658 24.6564 56.7185 24.6564 49.9959Z"
              />
            </svg>
          </a>
          <a href="https://twitter.com/chipredev" target="_blank">
            <svg
              className="twitter"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M0 7C0 3.13401 3.13401 0 7 0H93C96.866 0 100 3.13401 100 7V93C100 96.866 96.866 100 93 100H7C3.13401 100 0 96.866 0 93V7Z"
                fill="#F5F5F5"
              />
              <path
                d="M69.554 19H79.9811L57.2009 45.0362L84 80.4657H63.0134L46.5784 58.9779L27.773 80.4657H17.3396L41.7053 52.617L16 19H37.513L52.3688 38.6407L69.554 19ZM65.8944 74.2246H71.6722L34.3767 24.9133H28.1765L65.8944 74.2246Z"
                fill="#0B409C"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/alexchipre/" target="_blank">
            <svg
              className="linkedin"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="#F5F5F5"
            >
              <path d="M85.1958 85.2167H70.3875V62.0125C70.3875 56.4792 70.275 49.3583 62.6708 49.3583C54.95 49.3583 53.7708 55.3792 53.7708 61.6042V85.2167H38.9625V37.5H53.1875V44.0042H53.3792C55.3667 40.2542 60.2 36.2958 67.4208 36.2958C82.425 36.2958 85.2 46.1708 85.2 59.025L85.1958 85.2167ZM22.2375 30.9708C21.1078 30.9714 19.9891 30.7491 18.9454 30.3168C17.9018 29.8845 16.9536 29.2506 16.1552 28.4514C15.3567 27.6523 14.7238 26.7035 14.2925 25.6594C13.8612 24.6153 13.64 23.4963 13.6417 22.3667C13.6425 20.6657 14.1477 19.0033 15.0933 17.5895C16.039 16.1757 17.3827 15.074 18.9544 14.4239C20.5262 13.7737 22.2555 13.6043 23.9235 13.9369C25.5916 14.2695 27.1236 15.0893 28.3257 16.2927C29.5279 17.496 30.3462 19.0287 30.6772 20.6971C31.0083 22.3655 30.8371 24.0946 30.1854 25.6658C29.5338 27.2369 28.4308 28.5795 27.0161 29.5238C25.6014 30.4681 23.9384 30.9717 22.2375 30.9708ZM29.6625 85.2167H14.8125V37.5H29.6625V85.2167ZM92.6042 0H7.37917C3.3 0 0 3.225 0 7.20417V92.7958C0 96.7792 3.3 100 7.37917 100H92.5917C96.6667 100 100 96.7792 100 92.7958V7.20417C100 3.225 96.6667 0 92.5917 0H92.6042Z" />
            </svg>
          </a>
        </div>
      </article>
    </section>
  );
}
