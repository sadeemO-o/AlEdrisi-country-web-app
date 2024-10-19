import  Logo from './Logo';
import ThemeSwitcher from "./ThemeSwitcher";
const Header = () => {
  return (
    <header className="mb-6 bg-white dark:bg-gray-800 md:mb-12 shadow">
    <div className="container mx-auto px-5 md:px-0">
      <div className="flex justify-between items-center h-20">
        <Logo />
        <ThemeSwitcher />
      </div>
    </div>
    </header>
  )
}

export default Header