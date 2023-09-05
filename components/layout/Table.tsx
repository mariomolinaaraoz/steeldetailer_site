"use client";

// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function ClientComponent() {
  const [todos, setTodos] = useState<any[]>([]);

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getTodos = async () => {
      // This assumes you have a `todos` table in Supabase. Check out
      // the `Create Table and seed with data` section of the README 👇
      // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
      const { data } = await supabase.from("205").select();
      if (data) {
        setTodos(data);
      }
    };

    getTodos();
  }, [supabase, setTodos]);

  // return <pre>{JSON.stringify(todos, null, 2)}</pre>
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Plano</th>
            <th>Link</th>
            <th>Elemento</th>
          </tr>
        </thead>
        <tbody>
        {todos.map((x, i) => (
          <tr key={i}>
            <td >{x.plano}</td>
            <td >{x.href}</td>
          </tr>          
        ))}
        </tbody>
        
   
  

        
 
      
      </table>
      {/* <div>
        {todos.map((x, i) => (
          <div key={i}>
            <div>
              <span>{x.plano}</span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
