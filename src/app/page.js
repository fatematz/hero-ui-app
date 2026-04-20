import TasksCard from "@/components/TasksCard";
import {GetTasks} from "@/lib/tasks";

export default async function Home () {

    const tasks = await GetTasks()
  

  return (
    <div className="container py-[60px] ">
      <main className="">
       
         <h1> tasks:  {tasks.length} </h1>

            
            <div className=" grid grid-cols-3 py-[30px]  gap-6">
                {
                    tasks.map(task => <TasksCard key={task.id} task={task}></TasksCard>)
                 }
                    </div>
      
      </main>
    </div>
  );
}
