"use client"

// Image assets from Figma - using Next.js public folder
const imgCover = "/assets/69740d6f92cbd5a97c4e9725e20850203547ee4e.png"
const imgAvatar = "/assets/c6136688c1842babd49c8a588501bb9777e13767.png"
const imgGroup60 = "/assets/4378a358ce5d5986982cf998a902817d48fdaf73.svg"
const imgGroup100 = "/assets/cdd8a318d7ecab21b58f21780cb8228563819a85.svg"
const imgLexipolType = "/assets/7d9ebdab933b591cb6b7258cf173b9364f53bfbb.svg"
const imgLibraryIcon = "/assets/d4fd511bfd788f1070f9c75c34864cff1dade5d1.svg"

function ColorShieldMark({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute bottom-0 left-[49.95%] right-0 top-0">
        <img alt="" className="block max-w-none size-full" src={imgGroup60} />
      </div>
      <div className="absolute bottom-0 left-0 right-[49.97%] top-0">
        <img alt="" className="block max-w-none size-full" src={imgGroup100} />
      </div>
    </div>
  )
}

function FileType({ typeOfFile = "Internal" }: { typeOfFile?: "Internal" | "Research" }) {
  if (typeOfFile === "Internal") {
    return (
      <div className="bg-[#005af0] box-border flex gap-6 items-center px-6 py-[17px] rounded-[5px]">
        <p className="font-semibold leading-[28px] text-[36px] text-white uppercase tracking-[0.72px] whitespace-nowrap">
          ⚡️ INTERNAL
        </p>
      </div>
    )
  }
  return (
    <div className="bg-[#005af0] box-border flex gap-6 items-center px-6 py-[17px] rounded-[5px]">
      <p className="font-semibold leading-[28px] text-[36px] text-white uppercase tracking-[0.72px] whitespace-nowrap">
        🔍 RESEARCH
      </p>
    </div>
  )
}

export function CoverPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background with dot pattern */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div 
          className="absolute bg-repeat bg-[length:22.4px_22.4px] bg-top-left inset-0 mix-blend-difference" 
          style={{ backgroundImage: `url('${imgCover}')` }} 
        />
        <div className="absolute bg-gradient-to-b from-white/80 inset-0 to-white/40" />
      </div>

      {/* LEXIPOL Logo - Top Right */}
      <div className="absolute h-16 overflow-clip right-[108.92px] top-[104px] w-[317.205px]">
        <ColorShieldMark className="absolute bottom-0 left-0 overflow-clip right-[82.14%] top-0" />
        <div className="absolute bottom-[20.79%] left-[21.11%] right-0 top-[3.14%]">
          <img alt="LEXIPOL" className="block max-w-none size-full" src={imgLexipolType} />
        </div>
      </div>

      {/* Main Content - Left Side */}
      <div className="absolute flex flex-col gap-6 items-start left-[128px] top-[320px] max-w-[1343px]">
        <FileType typeOfFile="Internal" />
        
        <h1 className="capitalize font-semibold leading-[130px] text-[#212121] text-[110px] tracking-[-3.3px]">
          Design System
        </h1>
        
        <div className="box-border flex gap-4 items-center p-4 rounded-[6px]">
          <div className="relative shrink-0 size-12">
            <img alt="Library icon" className="block max-w-none size-full" src={imgLibraryIcon} />
          </div>
          <p className="font-normal leading-[48px] text-[#212121] text-[36px] tracking-[-1.44px] whitespace-nowrap">
            Design system
          </p>
        </div>
      </div>

      {/* Collaborators Section */}
      <div className="absolute flex flex-col gap-3 items-start left-[128px] top-[751px]">
        <p className="font-semibold leading-4 text-[#747474] text-base uppercase tracking-[1px] whitespace-nowrap">
          Collaborators
        </p>
        <div className="flex gap-8 items-start">
          <div className="box-border flex gap-4 items-center p-4 rounded-[6px]">
            <div className="relative shrink-0 size-[72px]">
              <img 
                alt="Avatar" 
                className="block max-w-none size-full rounded-full object-cover" 
                height="72" 
                src={imgAvatar} 
                width="72" 
              />
            </div>
            <p className="font-normal leading-[48px] text-[#212121] text-[36px] tracking-[-1.44px] whitespace-nowrap">
              Everyone
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

