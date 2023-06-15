import {memo, useCallback, useState} from 'react'
import './Counter.scss'

const Counter = props => {
  const {count, onChangeCount, containerClass, countClass, operatorClass} =
    props
  const [qty, setQty] = useState(count || 1)

  const handleQtyChange = useCallback(
    event => {
      const maxInputLength = 3
      let _value = event.target.value
      if (Number(_value) < 1) {
        _value = Math.abs(_value) || 1
      }
      if (_value.length > maxInputLength) {
        _value = _value.slice(0, 3)
      }
      setQty(_value)
      onChangeCount(Number(_value))
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
        data-testid='button-minus'
        onClick={handleDecrement}
        className={`counter__operator ${operatorClass}`}>
        -
      </span>
      <input
        data-testid='count'
        type='number'
        value={qty}
        onChange={handleQtyChange}
        className={`counter__input ${countClass}`}
      />
      <span
        data-testid='button-plus'
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
