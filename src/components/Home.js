const style = {
    Body: ` flex items-center`,
    logoContainer: `flex items-center cursor-pointer`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    Text: ` ml-[0.9rem] text-white font-semibold text-3xl textAlign-centre`,
    space: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center`,
    wrapper: `bg-transparent w-screen px-[1.2rem] py-[0.8rem] flex before:blur`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
}
 
function Home() {
    return (
        <>
        <div style={{margin:"200px 0px 0px 20px"}} >
            <div  style={{display:"flex",width:"400px",textAlign:"center",justifyContent:"flex-end",flexWrap:"wrap"}} className={style.Text}>CONNECT, SHARE & COLLABORATE with like minded developers</div>        
            </div>
            </>
    )
}

export default Home;