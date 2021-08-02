import { useEffect } from 'react'

const Stork = ({
  name,
  placeholder,
  wrapperStyles,
  wrapperClassnames,
  inputStyles,
}) => {
  useEffect(() => {
    window.stork.register(name, '/post-index.st')
  }, [])
  return (
    <div
      className={['stork-wrapper'].concat(wrapperClassnames).join(' ')}
      style={wrapperStyles}
    >
      <input
        data-stork={name}
        className="stork-input"
        placeholder={placeholder}
        style={inputStyles}
      />
      <div data-stork={`${name}-output`} className="stork-output">
        {' '}
      </div>
    </div>
  )
}

export default Stork