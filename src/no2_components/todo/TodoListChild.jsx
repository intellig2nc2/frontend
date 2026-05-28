import React, { useState } from 'react'
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline
} from "react-icons/md"
import styled from 'styled-components'
import { useTodo } from '../../no0_context/TodoContext'
import { useDispatch } from 'react-redux'
import { remove, toggle, update } from '../../no3_store/slices/todoSlice'

const TodoListChild = ({ item }) => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(item.subject)

  const handleToggle = () => {
  }

  const handleUpdate = () => {
    dispatch(update({id:item.id, value}))

    setEditing(false)
  }

  const handleDelete = () => {
    dispatch(remove(item.id))
  }

  return (
    <ItemBlock>
      <LeftArea>
        <CheckIcon onClick={() =>dispatch(toggle(item.id))}>
          {
            item.checked
              ? <MdCheckBox />
              : <MdCheckBoxOutlineBlank />
          }
        </CheckIcon>

        {
          editing ? (
            <EditInput
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleUpdate}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleUpdate()
              }}
              autoFocus
            />
          ) : (
            <Checked
              $checked={item.checked}
              onDoubleClick={() => setEditing(true)}
            >
              {item.subject}
            </Checked>
          )
        }
      </LeftArea>
      <DeleteButton onClick={()=>dispatch(remove(item.id))}>
        <MdRemoveCircleOutline />
      </DeleteButton>
    </ItemBlock>
  )
}

export default TodoListChild

const ItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 16px;
  border-radius: 12px;

  background: #f8fafc;
  border: 1px solid #e2e8f0;

  transition: 0.2s;

  &:hover {
    background: #f1f5f9;
    transform: translateY(-1px);
  }
`

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  flex: 1;
  min-width: 0;
`

const CheckIcon = styled.div`
  display: flex;
  align-items: center;

  font-size: 24px;
  color: #3b82f6;

  cursor: pointer;
`

const Checked = styled.div`
  flex: 1;

  font-size: 16px;
  color: ${({ $checked }) => $checked ? "#94a3b8" : "#1e293b"};
  text-decoration: ${({ $checked }) => $checked ? "line-through" : "none"};

  cursor: pointer;
  word-break: break-all;
`

const EditInput = styled.input`
  flex: 1;
  width: 100%;

  padding: 8px 10px;

  border: 1px solid #3b82f6;
  border-radius: 8px;
  outline: none;

  font-size: 15px;
  color: #1e293b;
`

const DeleteButton = styled.div`
  display: flex;
  align-items: center;

  font-size: 23px;
  color: #ef4444;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #dc2626;
    transform: scale(1.1);
  }
`