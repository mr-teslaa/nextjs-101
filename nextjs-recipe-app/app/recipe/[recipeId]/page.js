import RecipeDetailsItem from "@/components/recipe-details";

const fetchRecipeDetails = async (recipeId) => {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/1`)
        const respone = await apiResponse.json()

        return respone
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }

}

export default async function RecipeDetails({ params }) {
    const recipeDetails = await fetchRecipeDetails(params?.recipeId);

    return <RecipeDetailsItem recipeDetails={recipeDetails} />
}