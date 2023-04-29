const style = {
    headerItems: ` flex items-center justify-end`,
    logoContainer: `flex items-center cursor-pointer`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    CCardBody: ` ml-[0.8rem] text-white font-semibold text-l textAlign-centre`,
    space: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center`,
    CCard:`w-[400px] ml-[2rem] `,
    CCardTitle: `ml-[0.8rem] text-white font-semibold text-2xl textAlign-centre`,
    CCardBtn:' ml-[0.8rem] w-[90px] h-[30px] textAlign-center',
}
 
function Category() {
    return (
        <>
            <div  style={{textAlign:"center"}} className={style.CCardBody}>CATEGORY</div>        
           <div className={style.CCard} style={{border:"blue 1px solid", borderRadius:"20px",background:"linear-gradient(rgba(0,0,0,0.5) , rgba(0,0,0,1))"}}>
            <div className={style.CCardTitle}>WeB3 Devs</div>
             <div className={style.CCardBody}>This is some text within a card body.</div>
                   <div className={style.CCardBtn} style={{backgroundColor:'blue', color:"white",borderRadius:"10px",textAlign:"center"}}>Let's Meet</div>
           </div>
        
        </>
    )
}

export default Category;