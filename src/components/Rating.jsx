
function Rating(props) {

   
   

    return (
      <div>
      {[[...Array(Math.ceil(props.children))].map(()=><img src='https://cdn-icons-png.flaticon.com/512/118/118669.png' alt='estrellallena' width='25px' />),[...Array(5-Math.ceil(props.children))].map(()=><img src='https://www.svgrepo.com/show/172818/star-outline.svg' alt='estrellavacia' width='25px' />)]}
      
      
      </div>
      
      )
}

export default Rating