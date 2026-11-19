type Aula = { 
  id: number, 
  numero: string, 
  titulo: string, 
  description: string 
} 

const aulas: Aula[] = [ 
  { 
    id: 1, 
    numero: "01", 
    titulo: "Introdução a Son Gohan", 
    description: "Nessa aula apresenta as coisas básica sobre o Gohan" 
  },

  {
    id: 2,
    numero: "02",
    titulo: "História de Gohan",
    description: "Falaremos um pouco mais da incrivel históia de Gohan"
  },

  {
    id: 3,
    numero: "03",
    titulo: "Trunks - suas histórias e aventuras",
    description: "falaremos um pouco sobre as incriveis aventuras de Trunks/Trunks do futuro"
  },

  {
    id: 4,
    numero: "04",
    titulo: "Goku e Vegeta - transformações",
    description: "nessa aula vamos falar um pouco sobre as transformações que o goku e vegeta tem"
  },

  {
    id: 5,
    numero: "05",
    titulo: "Goku e Vegeta - fusões",
    description: "Vamos falar um pouco sobre as fusões metamoru(Dança) e potara(Brincos)"
  },

  {
    id: 6,
    numero: "06",
    titulo: "Goten e Trunks - transformações",
    description:"Vamos falar sobre as transformações que trunks criança tem e o Goten"
  },

  {
    id: 7,
    numero: "07",
    titulo: "Goten e Trunks - Fusoes",
    description: "Vamos falar da incrivel fusão entre Gonten e Trunks, que gera um novo Guerreiro"
  },

  {
    id: 8,
    numero: "08",
    titulo: "whis - por que ele seria um anjo",
    description: "Vamos falar porque o tão temido Whis é um anjo"
  },

  {
    id: 9,
    numero: "09",
    titulo: "Bills - por que ele seria o Deus da destruição e não outro",
    description: "Vamos falar porque foi escolhido o Bills como o Deus da Destruição"
  },

  {
    id: 10,
    numero: "10",
    titulo: "Batalha de transformações - Gogeta vs Vegeto",
    description: "Falaremos qual das fusões são as mais fortes, levando m conta o seu auge"
  }
] 

type AulaItemProps = { 
  aula: Aula 
} 

function AulaItem({ aula }: AulaItemProps) { 
  return ( 
    <article className="flex items-center w-full p-4 bg-white rounded-xl shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"> 
      <div className="flex items-center justify-center w-12 h-12 min-w-12 rounded-full bg-blue-600 mr-4"> 
        <span className="text-white text-sm font-bold"> 
          {aula.numero} 
        </span> 
      </div> 
      <div className="flex-1"> 
        <h2 className="text-[17px] font-bold text-slate-800 mb-1"> 
          {aula.titulo} 
        </h2> 
        <p className="text-[13px] leading-[18px] text-slate-500"> 
          {aula.description} 
        </p> 
      </div> 
    </article> 
  ) 
} 

export default function Aulas() { 
  return ( 
    <main className="min-h-screen bg-slate-100"> 
      <header className="bg-slate-800 px-5 pt-14 pb-8"> 
        <h1 className="text-3xl font-bold text-white">Aulas Mobile</h1> 
        <p className="mt-2 text-sm leading-5 text-slate-300">Aprenda desenvolvimento mobile passo a passo</p> 
      </header> 
      <section className="w-full max-w-4xl mx-auto px-5 py-8"> 
        <h2 className="mb-4 text-[21px] font-bold text-slate-800">Lista de aulas</h2> 
        <div className="flex flex-col gap-3"> 
          {aulas.map((aula) => ( 
            <AulaItem key={aula.id} aula={aula} /> 
          ))} 
        </div> 
      </section> 
    </main> 
  ); 
}