import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
// import { EmployeeContext } from '../../no0_context/EmployeeContext'

const EmployeeTable = () => {

  const {emp} = useSelector(state=>state.emp);

  const labels = {
    id: 'ID',
    name: '이름',
    email: '이메일',
    job: '직업',
    pay: '급여'
  }

  if (!emp || !emp.id) {
    return (
      <div style={styles.emptyBox}>
        <p style={styles.emptyText}>직원을 선택하면 상세 정보가 표시됩니다.</p>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>직원 상세 정보</h2>

      <table style={styles.table}>
        <tbody>
          {Object.entries(emp).map(([key, value]) => (
            <tr key={key} style={styles.row}>
              <th style={styles.th}>{labels[key] || key}</th>
              <td style={styles.td}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    padding: '24px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif'
  },

  title: {
    margin: '0 0 20px',
    textAlign: 'center',
    fontSize: '24px',
    color: '#2c3e50'
  },

  table: {
    width: '100%',
    borderCollapse: 'collapse',
    overflow: 'hidden',
    borderRadius: '12px'
  },

  row: {
    borderBottom: '1px solid #ecf0f1'
  },

  th: {
    width: '30%',
    padding: '14px',
    backgroundColor: '#f4f6f8',
    color: '#34495e',
    fontSize: '15px',
    textAlign: 'left',
    fontWeight: 'bold'
  },

  td: {
    padding: '14px',
    color: '#2c3e50',
    fontSize: '15px',
    backgroundColor: '#ffffff'
  },

  emptyBox: {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
  },

  emptyText: {
    margin: 0,
    color: '#7f8c8d',
    fontSize: '15px'
  }
}

export default EmployeeTable