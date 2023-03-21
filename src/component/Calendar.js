
import { moment } from 'moment/moment';
const Calendar = (props) => {
    return ( 
        <div>
      <Calendar regbd={props.regbd} setRegbd={props.setRegbd} />
         <div className="text-gray-500 mt-4">
           {moment(props.regbd).format("YYYY년 MM월 DD일")} 
         </div>
    </div>
     );
}
 
export default Calendar;