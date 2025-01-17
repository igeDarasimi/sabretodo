"use client"
import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { getData } from "@/actions";
import Link from "next/link";

export default function FilterTodo() {
  const [data, setData] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">("all");

  // Fetch filtered data whenever the filter changes
  useEffect(() => {
    async function fetchData() {
      const filteredData = await getData(filter); // Get filtered todos based on the selected filter
      setData(filteredData);
    }
    fetchData();
  }, [filter]); // Dependency on filter to trigger re-fetching

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">Todo App</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        SabreCWA
      </h1>
      <Link href="/about">about</Link>

      <div className="flex justify-center flex-col items-center">
        {/* Filter Dropdown */}
        <div className="my-5">
          <label htmlFor="filter" className="mr-3 font-semibold">
            Filter by Status:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value as "all" | "completed" | "uncompleted")}
            className="p-2 border rounded-md"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>

        {/* Add todo */}
        <AddTodo />

        {/* Map todos */}
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
