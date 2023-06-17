import List2 from './List2';

const List1 = ({items,onDelete,onToggle}) => {
    return ( <ol>
        {items.map((i,index)=>{
          return<List2 i={i}
          key={index} 
          id={index}
          onDelete={onDelete} 
          onToggle={onToggle}/>
        })}
      </ol> );
}
 
export default List1;
