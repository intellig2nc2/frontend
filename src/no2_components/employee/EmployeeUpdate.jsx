import React, { useState, useEffect, useContext } from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const initialEmp = {
  id: '',
  name: '',
  email: '',
  job: '',
  pay: ''
}

const EmployeeUpdate = () => {
    const {state,dispatch} = useContext(EmployeeContext);
    const {emp} = state;
  const [newEmp, setNewEmp] = useState(initialEmp);

  useEffect(() => {
    if (emp) {
      setNewEmp(emp)
    }
  }, [emp])

  const handleChange = (event) => {
    const { name, value } = event.target

    setNewEmp(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!newEmp.id) {
      alert('수정할 직원을 먼저 선택하세요.')
      return
    }

    if (!newEmp.name || !newEmp.email || !newEmp.job || !newEmp.pay) {
      alert('모든 항목을 입력해주세요.')
      return
    }

    dispatch({
      type: 'update',
      payload: newEmp
    })

    alert('수정되었습니다.')
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>직원 정보 수정</h2>
      <p style={styles.description}>
        선택한 직원의 정보를 수정한 뒤 수정 버튼을 눌러주세요.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>이름</label>
          <input
            style={styles.input}
            type="text"
            name="name"
            value={newEmp.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>이메일</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            value={newEmp.email}
            onChange={handleChange}
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>직업</label>
          <input
            style={styles.input}
            type="text"
            name="job"
            value={newEmp.job}
            onChange={handleChange}
            placeholder="직업을 입력하세요"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>급여</label>
          <input
            style={styles.input}
            type="number"
            name="pay"
            value={newEmp.pay}
            onChange={handleChange}
            placeholder="급여를 입력하세요"
          />
        </div>

        <button type="submit" style={styles.button}>
          수정하기
        </button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '520px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    fontFamily: 'Arial, sans-serif'
  },

  title: {
    margin: '0 0 8px',
    textAlign: 'center',
    fontSize: '26px',
    color: '#2c3e50'
  },

  description: {
    marginBottom: '28px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#7f8c8d'
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },

  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },

  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#34495e'
  },

  input: {
    padding: '12px 14px',
    border: '1px solid #dcdde1',
    borderRadius: '10px',
    fontSize: '15px',
    outline: 'none',
    backgroundColor: '#f9fafb'
  },

  button: {
    marginTop: '10px',
    padding: '13px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#f39c12',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
}

export default EmployeeUpdate