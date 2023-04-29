import ConnectMetamask from "./Metamask/Connect-Metamask";

const style = {
    headerItems: ` flex items-center justify-end`,
    logoContainer: `flex items-center cursor-pointer`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    space: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center`,
    wrapper: `bg-transparent w-screen px-[1.2rem] py-[0.8rem] flex before:blur`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
}

function Header() {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.logoContainer}>
                    <img src='./logo.png' alt='' height={48} width={48} />
                    <div className={style.logoText}>DevMeet</div>
                </div>

                <div className={style.space}>
                </div>

                <div className={style.headerItems}>
                    <div className={style.headerItem}> Home </div>
                </div>

                <div className={style.headerItems}>
                    <div className={style.headerItem}> About </div>
                </div>

                <div className={style.headerItems}>
                    <div className={style.headerItem}> Category </div>
                </div>

                <div className={style.headerItems}>
                    <div className={style.headerItem}> Contact </div>
                </div>
                
                <div className={style.headerItems}>
                    <ConnectMetamask />
                </div>

            </div>
        </>
    )
}

export default Header;