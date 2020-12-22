
let arr =['Maya', 'Leyla', 'Aman', "Mesut"]
let congrats = [<h2>Congragulation</h2>,<h3>React is awesome</h3>]; 

const blogPost = (
    <div className='card'> 
      <h1>Hello World</h1>
     <ol> {arr.map((name, index)=>{   
    return  <li key={index} className={index===0 ? "first" : index=== 1 ? "second" : index===2 ? "third" : ""}>{name}</li>;   
})  
}</ol>
<div>{congrats.map(function(element,index){
    return <div key={index}>{element}</div>
})}
</div>
    </div>
  );

ReactDOM.render(
    blogPost,
    document.getElementById("example")
);
