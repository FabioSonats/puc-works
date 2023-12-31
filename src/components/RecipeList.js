import { Link } from 'react-router-dom'


//styles
import './RecipeList.css'
import { projectFirestore } from '../firebase/config'

export default function RecipeList({ recipes }) {




  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  }


  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          {recipe.method && (
            <div>{recipe.method.substring(0, 100)}...</div>
          )}
          <Link to={`/recipes/${recipe.id}`}>Receita Completa</Link>
          <div
            className='delete'
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  )
}