import React from 'react'

const cardData=[
{
  icon: 'bx bxl-html5',
  title: 'HTML5',
  description: 'HTML5 is a markup language used for structuring and presenting',

},
{
  icon: 'bx bxl-css3',
  title: 'CSS3',
  description: 'CSS3 is the latest evolution of the Cascading Style Sheets ',

},
{
  icon:"bx bxl-javascript",
  title: 'JavaScript',

  description: 'JavaScript is a high-level, just-in-time compiled, multi-paradigm programming la ',
},
{
  icon:"bx bxl-react",
  title: 'React',

  description: 'JavaScript is a high-level, just-in-time compiled, multi-paradigm programming la ',
},
{
  icon:"bx bxs-data",
  title: 'Database',

  description: 'JavaScript is a high-level, just-in-time compiled, multi-paradigm programming la ',
},
{
  icon:"bx bxl-nodejs",
  title: 'Node Js',

  description: 'JavaScript is a high-level, just-in-time compiled, multi-paradigm programming la ',
},

];

const Cardlist= ({icon,title,description}) => {
  return (
    <div className='card-box'>
          <i class={icon}></i>

<h1>{title}</h1>

<p>{description}</p>

    </div>
  );
};
const Card=()=>{
   return(
      <div className='card-container'>
      {cardData.map((card,index)=>{
        return <Cardlist key={index} {...card} />
      })}
      </div>
    )
}

export default Card
