'use client';

import useSWR from "swr";
import Loading from "../loading";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import RecipeList from "@/components/recipe-list";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Recipies() {
    const { data, error, isLoading } = useSWR('https://dummyjson.com/recipes', fetcher)


    if (isLoading) {
        <Loading />
    }

    if (error) {
        return (
            <div className="px-5 py-3">
                <Alert variant="destructive">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Recipes couldn't load. Try again.
                    </AlertDescription>
                </Alert>
            </div>
        )
    }

    return (
        <div className="px-5 py-3">
            <RecipeList recipes={data?.recipes} />
        </div>
    );
}