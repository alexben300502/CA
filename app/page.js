export default function Home() {
  return (
    <div className="flex h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="m-auto text-center p-10 border rounded-xl shadow-lg bg-white/80">
        <h1 className="text-3xl font-bold text-gray-800 drop-shadow-md">
          Bonjour mademoiselle la secretaire generale.
        </h1>
        <br />
        <h2 className="text-3xl font-bold text-gray-800 drop-shadow-md">
          C'est avec joie que je vous confirme ma présence au CA !
        </h2>
        <br />
        <h2 className="text-3xl font-bold text-gray-800 drop-shadow-md">
          Merveilleuse soirée,
        </h2>
        <br />
        <h2 className="text-3xl font-bold text-gray-800 drop-shadow-md">
          Monsieur le Responsable Qualité.
        </h2>
        <br />
        <button className="mt-5 bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 transform hover:scale-105" type="button">
          Trop heureuse !
        </button>
      </div>
    </div>
  )
}
