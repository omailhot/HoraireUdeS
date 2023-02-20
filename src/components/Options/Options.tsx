const lienUdes = "https://www.usherbrooke.ca/admission/fiches-cours/";

const options = [
    ["GIS360",	"Intelligence et géomatique d'affaires"],
    ["GTA631",	"Gestion de la sécurité de l'information"],
    ["IFT313",	"Introduction aux langages formels"],
    ["IFT501",	"Recherche d'information et forage de données"],
    ["IFT505",	"Planification et prévention en sécurité des TI"],
    ["IFT507",	"Sécurité des logiciels"],
    ["IFT512",	"Architecture de sécurité"],
    ["IFT604",	"Applications Internet et mobilité"],
    ["IFT615",	"Intelligence artificielle"],
    ["IFT702",	"Planification en intelligence artificielle"],
    ["IGE511",	"Aspects informatiques du commerce électronique"],
    ["IGL501",	"Méthodes formelles en génie logiciel"],
    ["IGL502",	"Techniques de vérification et de validation"],
    ["MAR331",	"Comportement du consommateur"],
    ["MQG332",	"Méthodes analytiques de gestion"]
]

const choixOptions = [
    ["CTB115",	"Introduction à la comptabilité générale I"],
    ["FIS301",	"Éléments de fiscalité"],
]

const Options = () => {
    return (
        <div className="flex justify-evenly text-left mt-4">
            <table className="border-collapse bg-gray-800 p-4 bo">
                <caption>Liste des cours à option au cheminement général</caption>
                <tbody>
                    {options.map((option, index) =>
                        <tr key={index}>
                            <td className="pb-1">{option[0]}</td>
                            <td><a className="no-underline text-blue-500" href={lienUdes + option[0]}>{option[1]}</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <table className="border-collapse bg-gray-800 p-4 bo">
                <caption>Liste des cours à option envisagés</caption>
                <tbody>
                    {choixOptions.map((option, index) =>
                        <tr key={index}>
                            <td className="pb-1">{option[0]}</td>
                            <td><a className="no-underline text-blue-500" href={lienUdes + option[0]}>{option[1]}</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Options;