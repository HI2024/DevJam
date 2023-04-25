const style = {
    headerItems: ` flex items-center justify-end`,
    logoContainer: `flex items-center cursor-pointer`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    Text: ` ml-[0.8rem] text-white font-semibold text-2xl textAlign-centre`,
    space: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center`,
    wrapper: `bg-transparent w-screen px-[1.2rem] py-[0.8rem] flex before:blur`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
}
 
function Category() {
    return (
        <>
            <div  style={{textAlign:"center",marginTop:"300px"}}className={style.Text}>CATEGORY</div>        
        </>
    )
}

export default Category;