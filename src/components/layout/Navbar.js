
const Navbar = ({ pageNo }) => {
  return (
    <nav className="flex flex-row justify-between items-center">
       <div> 
        <img src="/logo.svg" alt="mr-tangerine logo" className="w-[50px] lg:w-[80px] h-auto"></img>
       </div>
       <div className="nav-no">
        <p className="text-xl text-tagline">{pageNo}/3</p>
    </div> 
    </nav>
  );
}

export default Navbar;

