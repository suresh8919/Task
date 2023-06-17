import { FaTimes} from 'react-icons/fa'
const List2 = ({i,onDelete,onToggle,id}) => {

    return (  
        <div className={`task`}
         onDoubleClick={ontoggle}>
            <h3 >
                {i} 
            <FaTimes style={{color:'red',cursor:'pointer'}}
            onClick={() =>{onDelete(id)}}/>
            </h3>

        </div>
    );
}
 
export default List2;
