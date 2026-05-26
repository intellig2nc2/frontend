import React, { useContext, useState } from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const initialEmp = {
  id: '',
  name: '',
  email: '',
  job: '',
  pay: ''
}

const EmployeeRegister = () => {
  const {dispatch} = useContext(EmployeeContext)
  const [emp, setEmp] = useState(initialEmp)

  const handleChange = (event) => {
    const { name, value } = event.target

    setEmp(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!emp.name || !emp.email || !emp.job || !emp.pay) {
      alert('모든 항목을 입력해주세요.')
      return
    }

    const newId = Date.now().toString()

    dispatch({
      type: 'register',
      payload: {
        newId,
        emp
      }
    })

    alert('등록되었습니다.')
    setEmp(initialEmp)
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>직원 등록</h2>
      <p style={styles.description}>
        새로운 직원 정보를 입력한 뒤 등록 버튼을 눌러주세요.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>이름</label>
          <input
            style={styles.input}
            type="text"
            name="name"
            value={emp.name}
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
            value={emp.email}
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
            value={emp.job}
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
            value={emp.pay}
            onChange={handleChange}
            placeholder="급여를 입력하세요"
          />
        </div>

        <button type="submit" style={styles.button}>
          등록하기
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
    backgroundColor: '#f9fafb',
    transition: '0.2s'
  },

  button: {
    marginTop: '10px',
    padding: '13px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
}

export default EmployeeRegister