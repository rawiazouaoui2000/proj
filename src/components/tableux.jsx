function Animals({items})
{
return (
<div> 
    <h3>Liste des animaux</h3>
    <ul>{items.map((item,index)=>(<li key={index}>{item}</li>))}</ul>
</div>

)

}
export default Animals