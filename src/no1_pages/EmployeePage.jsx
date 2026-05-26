import React, { useEffect , useContext} from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../no2_components/employee/EmployeeRegister'
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate'
import { EmployeeContext } from '../no0_context/EmployeeContext'



const EmployeePage = () => {
  const {state, dispatch} = useContext(EmployeeContext);
  const {selectedId, empTable, mode, emp} = state;

  useEffect(() => {
  if (selectedId) {
    dispatch({
      type: "set_emp",
      payload: empTable.filter(item => item.id === selectedId)[0]
    })
  }
}, [selectedId, empTable, dispatch])

const handleDelete = () => {
  if (!selectedId) {
    alert("삭제할 직원을 먼저 선택하세요.")
    return
  }

  dispatch({ type: "delete" })
  alert("삭제되었습니다.")
}

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Employee Management</h1>

      <div style={styles.layout}>
        <section style={styles.card}>
          <h2 style={styles.subTitle}>직원 목록</h2>
          <EmployeeList/>
        </section>

        <section style={{ ...styles.card, ...styles.tableCard }}>
          <h2 style={styles.subTitle}>직원 정보</h2>
          <EmployeeTable state={state} />
        </section>
      </div>

      <div style={styles.buttonGroup}>
        <button
          style={{ ...styles.button, ...styles.primary }}
          onClick={() => dispatch({type: "mode", payload: "register"})}
        >
          등록
        </button>

        <button
          style={{ ...styles.button, ...styles.warning }}
          onClick={() => dispatch({type: "mode", payload: "update"})}
        >
          수정
        </button>

        <button
          style={{ ...styles.button, ...styles.danger }}
          onClick={() => dispatch({type: "mode", payload: "delete"})}
        >
          삭제
        </button>
      </div>

      <section style={{ ...styles.card, ...styles.formCard }}>
        {
          mode === "register" ? (
            <EmployeeRegister dispatch={dispatch} />
          ) : mode === "update" ? (
            <EmployeeUpdate emp={emp} dispatch={dispatch} />
          ) : mode === "delete" ? (
            <div style={styles.deleteBox}>
              <p style={styles.deleteText}>선택한 데이터를 삭제하시겠습니까?</p>
              <button style={{ ...styles.button, ...styles.danger }} onClick={handleDelete}>
                삭제 확인
              </button>
            </div>
          ) : (
            <p style={styles.emptyText}>
              등록, 수정, 삭제 중 하나를 선택하세요.
            </p>
          )
        }
      </section>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    padding: '40px',
    backgroundColor: '#f4f6f8',
    fontFamily: 'Arial, sans-serif',
    color: '#222'
  },

  title: {
    marginBottom: '30px',
    textAlign: 'center',
    fontSize: '32px',
    color: '#2c3e50'
  },

  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '24px',
    marginBottom: '24px'
  },

  card: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '14px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
  },

  tableCard: {
    overflowX: 'auto'
  },

  subTitle: {
    marginTop: 0,
    marginBottom: '18px',
    fontSize: '20px',
    color: '#34495e'
  },

  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    margin: '24px 0'
  },

  button: {
    padding: '10px 22px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },

  primary: {
    backgroundColor: '#3498db',
    color: '#fff'
  },

  warning: {
    backgroundColor: '#f39c12',
    color: '#fff'
  },

  danger: {
    backgroundColor: '#e74c3c',
    color: '#fff'
  },

  formCard: {
    maxWidth: '700px',
    margin: '0 auto'
  },

  deleteBox: {
    textAlign: 'center'
  },

  deleteText: {
    marginBottom: '18px',
    fontSize: '17px',
    fontWeight: 'bold',
    color: '#c0392b'
  },

  emptyText: {
    textAlign: 'center',
    color: '#888',
    fontSize: '15px'
  }
}

export default EmployeePage