import TasksCard from "@/components/TasksCard";
import {GetTasks} from "@/lib/tasks";

export default async function Home () {

    const tasks = await GetTasks()
  

  return (
    <div className="container py-[60px] ">
      <main className="">
       
         <h1 className="bg-green-400 max-w-[200px] w-full text-center text-white p-1 rounded-full"> tasks length : {tasks.length} </h1>

            
            <div className=" grid grid-cols-1 md:grid-cols-3 py-[30px]  gap-6">
                {
                    tasks.map(task => <TasksCard key={task.id} task={task}></TasksCard>)
                 }
                    </div>
      
      </main>
    </div>
  );
}
