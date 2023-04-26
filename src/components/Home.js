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
        <div style={{margin:"200px 0px 0px 70px"}} >
            <div  style={{display:"flex",maxWidth:"500px",textAlign:"left",flexWrap:"wrap"}} className={style.Text}>Connect, Share and <br/> Collaborate with like-minded developers</div>        
            <div  style={{color:"white",marginLeft:"0.9rem", fontSize:"20px",display:"flex",maxWidth:"500px",textAlign:"left",flexWrap:"wrap"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque lorem, posuere sit amet imperdiet vitae, tincidunt eu ipsum. Duis ornare tincidunt dui a bibendum.</div>
            
            </div>

            </>
    )
}

export default Home;