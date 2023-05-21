import {memo, useCallback, useState} from 'react'
import './Counter.css'

const Counter = props => {
  console.log('Counter is rendering')

  const {count, onChangeCount, containerClass, countClass, operatorClass} =
    props
  const [qty, setQty] = useState(count || 1)

  const handleQtyChange = useCallback(
    event => {
      const maxInputLength = 3
      const _value = event.target.value
      const _valueNo = Number(_value)
      if (_valueNo >= 1 && _value.length <= maxInputLength) {
        setQty(_value)
        onChangeCount(_valueNo)
      }
    },
    [onChangeCount]
  )

  const handleIncrement = useCallback(() => {
    const maxQty = 999
    if (qty < maxQty) {
      setQty(value => {
        const _value = Number(value) + 1
        onChangeCount(_value)
        return _value
      })
    }
  }, [qty, onChangeCount])

  const handleDecrement = useCallback(() => {
    if (qty > 1) {
      setQty(value => {
        const _value = Number(value) - 1
        onChangeCount(_value)
        return _value
      })
    }
  }, [qty, onChangeCount])

  return (
    <div className={`counter ${containerClass}`}>
      <span
        onClick={handleDecrement}
        className={`counter__operator ${operatorClass}`}>
        -
      </span>
      <input
        type='number'
        value={qty}
        onChange={handleQtyChange}
        className={`counter__input ${countClass}`}
      />
      <span
        onClick={handleIncrement}
        className={`counter__operator ${operatorClass}`}>
        +
      </span>
    </div>
  )
}

function areEquals(prevProps, nextProps) {
  return prevProps.count === nextProps.count
}

export default memo(Counter, areEquals)
