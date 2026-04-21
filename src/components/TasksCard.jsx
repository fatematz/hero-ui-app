// import {CircleDollar} from "@gravity-ui/icons";
import { Card, Link } from '@heroui/react'

const TasksCard=({task}) => {
    // console.log( task )

    const {id, title, description} = task

    return (
    
       <Card className="max-w-[800px] w-full  p-5 gap-4  shadow-xl shadow-purple-300/50 rounded-2xl bg-white text-black">
            
            {/* Icon */}
            {/* <CircleDollar className="text-primary size-6" /> */}

            {/* Header */}
            <Card.Header className="flex flex-col items-start gap-1 p-0">
                <h4 className="text-base font-semibold text-default-900 text-purple-300">
                    {title}
                </h4>
                <p className="text-sm text-default-500 leading-relaxed">
                    {description}
                </p>
            </Card.Header>

            {/* Footer */}
            <Card.Footer className="p-0">
                <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="https://heroui.com"
                    isExternal
                    showAnchorIcon
                    className="text-sm text-black font-medium  gap-1"
                >
                    Creator Hub
                </Link>
            </Card.Footer>
            </Card>
    )
}

export default TasksCard
