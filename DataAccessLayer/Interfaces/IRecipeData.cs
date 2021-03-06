﻿using Objects;
using Objects.Generics;
using Objects.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataAccessLayer.Interfaces
{
    public interface IRecipeData
    {
        Task<IResult<IEnumerable<Recipe>>> GetSavedRecipes();
        Task<IError> SaveRecipe(Recipe recipe);
        Task<IError> DeleteRecipe(Id<Recipe> recipeId);
    }
}
