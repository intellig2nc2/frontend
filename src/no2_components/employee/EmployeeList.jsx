// import React, { useContext } from 'react'
// import { EmployeeContext } from '../../no0_context/EmployeeContext'
import { useDispatch, useSelector } from 'react-redux';
import { select } from '../../no3_store/slices/employeeSlice';

const EmployeeList = () => {
  const {empTable,selectedId} = useSelector(state=>state.emp);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      {empTable?.map(item => (
        <button
          key={item.id}
          onClick={() => dispatch(select(item.id))}
          style={{
            ...styles.button,
            ...(selectedId === item.id ? styles.activeButton : {})
          }}
        >
          <div style={styles.name}>{item.name}</div>
          <div style={styles.job}>{item.job}</div>
        </button>
      ))}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },

  button: {
    width: '100%',
    padding: '16px',
    border: '1px solid #dcdde1',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    textAlign: 'left',
    cursor: 'pointer',
    transition: '0.2s',
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.06)'
  },

  activeButton: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
    color: '#ffffff',
    transform: 'scale(1.02)'
  },

  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '6px'
  },

  job: {
    fontSize: '13px',
    opacity: 0.8
  }
}

export default EmployeeList