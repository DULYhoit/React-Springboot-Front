import { Pagination } from 'react-bootstrap';

const Pagination1 = ({total,limit,page,setPage}) => {
    let numpages = Math.ceil(total/limit)
    return ( 
    
        <Pagination>
        <Pagination.Prev onClick={()=>{setPage(page-1)}} disabled={page===1}/>
       {
           Array(numpages)
           .fill()
           .map((_,i)=>(
            
               <Pagination.Item className="pagenation-btn" key={i+1} onClick={()=>{setPage(i+1)}}>{i+1}</Pagination.Item>
               ))
            }
        

        <Pagination.Next onClick={()=>{setPage(page+1)}} disabled={page === numpages}/>
      </Pagination>
      
     );
}
 
export default Pagination1;