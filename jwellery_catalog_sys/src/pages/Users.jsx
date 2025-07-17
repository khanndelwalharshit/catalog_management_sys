import React, { useState } from "react"
import UsersFormModal from "@/components/user/UsersFormModal"
import UsersTable from "@/components/user/UsersTable"
import { Button } from "@/components/ui/button"

const Users = () => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAdd = () => {
    setSelectedUser(null)
    setIsModalOpen(true)
  }

  const handleEdit = (user) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const handleSave = (user) => {
    if (selectedUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)))
    } else {
      setUsers([...users, { ...user, id: Date.now() }])
    }
    setIsModalOpen(false)
  }

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Users</h2>
        <Button onClick={handleAdd}>Add User</Button>
      </div>
      <UsersTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      <UsersFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        user={selectedUser}
      />
    </div>
  )
}

export default Users
