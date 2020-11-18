export interface Task {    
    id?: number;
    name?: string;
    isCompleted?: boolean;
    userid?: number;
    created_at?: Date;
    update_at?: Date;
}

export interface User {
    id: number;
    username: string;
    name: string;
    lastname: string;
    tasks: Task[];
    created_at: Date;
    update_at: Date;
}