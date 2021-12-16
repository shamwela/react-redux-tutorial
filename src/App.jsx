import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

const App = () => {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  )

  return (
    <main>
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </main>
  )
}

export default App
