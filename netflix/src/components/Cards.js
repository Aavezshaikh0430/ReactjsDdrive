function Cards (props){
    console.log(props)
    return(
        <>
        <div style={{marginTop:'40px' ,padding:'0rem,1rem'}}>

        <img src={props.img_src} alt='pic' style={{width:'250px'}}/>
        

        <h2 style={{fontFamily:'sans-serif',textAlign:'center',color:'white'}}>{props.title}</h2>

        </div>
        </> 
    )
}
export default Cards;