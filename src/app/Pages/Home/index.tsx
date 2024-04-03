
import React from 'react';
import { createClient } from '../../utils/server'
import { cookies } from 'next/headers'

import ModalComponent from '../../Components/modal';


export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  

  const { data: data } = await supabase.from('qulity_audit').select()


  
  
  return (
    <div className="container mt-4">
      <h1 className="text-2xl font-bold my-4">Quality Audit Checklist - March 2024</h1>
    <ModalComponent/>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Owner</th>
            <th scope="col">Status</th>
            <th scope="col">Comments</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <th>{item.item}</th>
              <td>{item.owner}</td>
              <td>{item.status}</td>
              <td>{item.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
