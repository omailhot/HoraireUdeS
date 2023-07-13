const lienUdes = "https://www.usherbrooke.ca/admission/fiches-cours/";

const sessions = [
  ["S2", "T2", "S3", "T3", "S4", "T4", "S5", "S6"],
  ["A21", "H22", "E22", "A22", "H23", "E23", "A23", "H24"],
];

const cours = [
  ["IFT209", "IFT232", "IFT339", "MAT115", "IFT203"],
  ["", "", "", "", ""],
  ["IFT287", "IFT320", "IFT436", "ADM124", "MAR221"],
  ["GRH121", "", "", "", ""],
  ["IFT585", "IFT606", "IGE401", "IGL601", "STT418"],
  ["", "", "", "", ""],
  [
    "IGL301 - Spécification et vérification des exigences",
    "IGE487 - Modélisation de bases de données",
    "IFT604 - Applications Internet et mobilité",
    "IGE592 - Projet en informatique de gestion I",
    "CTB115-1 - Introduction à la comptabilité générale I",
  ],
  [
    "IGE502 - Systèmes d'information dans les entreprises",
    "IGE511 - Aspects informatiques du commerce électronique",
    "IFT512 - Architecture de sécurité OU IFT507 - Sécurité des logiciels",
    "IGL691 - Projet multidisciplinaire II (6 crédits",
    "",
  ],
];

const transpose = (m: string[][]) =>
  m[0].map((x, i) => m.map((x: { [x: string]: any }) => x[i]));

const Horaire = () => {
  return (
    <table className="border-collapse w-full" id="cours">
      <thead>
        <tr>
          {sessions[0].map((session, index) => (
            <th
              className="bg-blue-600 text-blue-50 pt-3 pb-3 text-center"
              key={index}
            >
              {session}
            </th>
          ))}
        </tr>

        <tr>
          {sessions[1].map((saison, index) => (
            <th
              className="bg-gray-300 text-slate-900 pt-3 pb-3 text-center"
              key={index}
            >
              {saison}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {transpose(cours).map((c: string[], index: number) => (
          <tr
            className="bg-gray-50 [&:nth-child(odd)]:bg-gray-100
                                  [&>td]:hover:bg-gray-200
                                  text-center [&>td]:p-2"
            key={index}
          >
            {c.map((choix: string, index: number) => (
              <td
                className={`${c[index] === undefined ? "bg-slate-900" : ""}`}
                key={index}
              >
                <a
                  className="no-underline text-blue-600"
                  target="_blank"
                  href={lienUdes + choix?.substring(0, 6)}
                >
                  {choix}
                </a>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Horaire;
