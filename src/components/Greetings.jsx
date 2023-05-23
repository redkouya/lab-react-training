
function Greetings(props) {

    const saludo = ()=>{
        switch(props.lang)
        {
            case "de":  return`Hallo ${props.children}`
           
            case "en" :return`Hello ${props.children}`
            
            case "es" :return`Hola ${props.children}`
            
            case "fr" :return`Bonjour ${props.children}`
            
            default : return " "
           
        }
    }


  return (
    <p>{saludo()}</p>
    
  )
}

export default Greetings