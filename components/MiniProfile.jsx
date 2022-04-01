const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      {/* <h1>This is MiniProfile</h1> */}
      <img className="rounded-full border p-[2px] w-16 h-16" src="https://yt3.ggpht.com/yti/APfAmoFV_G4Ix1hgko-tLXkyZdCGH-f9sqMWyOkedxOo=s88-c-k-c0x00ffffff-no-rj-mo" />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">Rehan Shaik</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  )
}

export default MiniProfile
