import * as React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export default function RecipeList({ recipes }) {
    console.log(recipes);

    return (
        <div>
            <h1 className="text-4xl my-3">Recipe List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    recipes && recipes?.length > 0 ? recipes.map(recipe => (
                        <Link key={recipe?.id} href={`/recipe/${recipe.id}`}>
                            <Card className="w-[350px]" key={recipe.id}>
                                <CardContent>
                                    <img
                                        src={recipe?.image}
                                    />
                                </CardContent>
                                <CardHeader>
                                    <CardTitle>{recipe?.name}</CardTitle>
                                    <div className="flex justify-between">
                                        <CardDescription>{recipe?.mealType}</CardDescription>
                                        <Badge>{recipe?.cuisine}</Badge>
                                    </div>
                                    <p className="text-sm py-2">Rating: {recipe?.rating}</p>
                                </CardHeader>
                            </Card>
                        </Link>
                    )) : null
                }
            </div>
        </div>
    );
}