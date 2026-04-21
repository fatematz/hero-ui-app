import {revalidatePath} from "next/cache";
import {postTask} from "./tasks";

export const createPost=async (FormData) => {
    'use server'
    // const name=FormData.get('name');

    const newTask = Object.fromEntries(FormData.entries())

    console.log("Adding a task with name:", newTask);
    
    const res=await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks');
    }
    return res;
}