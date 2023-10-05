import { Link } from "react-router-dom";

type NavigationProps = {
  option: string;
};

const Navigation = ({ option }: NavigationProps) => {
  const generatedPaths = {
    root: [
      { link: "/add", text: "Ajouter" },
      { link: "/download", text: "Télécharger" },
    ],
    other: [{ link: "/", text: "Accueil" }],
  };

  return (
    <div className="navigation">
      {generatedPaths[option as keyof typeof generatedPaths].map((path) => {
        return (
          <Link to={path.link} className="bouton">
            {path.text}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
