'use server';

import { prisma } from "@/app/utils/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData){
    const input = formData.get('input') as string;
    if(!input.trim()){
        return;
    }

    await prisma.todo.create({
        data: {
            title: input,
        }
    });
    revalidatePath("/")
}

export async function  changeStatus(formData:FormData) {
    const inputId = formData.get("inputId") as string;
    const todo = await prisma.todo.findUnique({
        where: {
            id: inputId,
        }
    })

    const updateStatus = !todo?.isCompleted;
    await prisma.todo.update({
        where: {
            id: inputId,
        },
        data: {
            isCompleted: updateStatus,
        }
    });
    revalidatePath('/')
}

export async function editTodo(formData: FormData){
    const newTitle = formData.get('newTitle') as string;
    const inputId = formData.get("inputId") as string

    await prisma.todo.update({
        where: {
            id: inputId,
        },
        data: {
            title: newTitle
        }
    })

    revalidatePath('/')
}

export async function deleteTodo(formData:FormData) {
    const inputId = formData.get('inputId') as string;
    await prisma.todo.delete({
        where: {
            id: inputId,
        },
    });

    revalidatePath('/');
}



export async function filterTodo(status: 'completed' | 'uncompleted' | 'all'): Promise<Todo[]> {
    let whereClause = {};
    
    if (status === 'completed') {
      whereClause = { isCompleted: true };
    } else if (status === 'uncompleted') {
      whereClause = { isCompleted: false };
    }
    const filteredData = prisma.todo.findMany({
        where: whereClause,
        orderBy: {createdAt: "desc"}
    });

    return filteredData;
    
  }

export  async function getData(status?: 'all' | 'completed' | 'uncompleted'){
    if(status){
        return await filterTodo(status)
    }
    const data = await prisma.todo.findMany({
      select: {
        title: true,
        id: true,
        isCompleted: true,
      },
      orderBy: {
        createdAt: "desc"
      },
    });
  
    return data;
  }
  