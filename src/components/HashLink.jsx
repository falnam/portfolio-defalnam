import { forwardRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { scrollToHash } from '../utils/scrollToHash'

const HashLink = forwardRef(function HashLink({ to, onClick, ...props }, ref) {
  const navigate = useNavigate()
  const location = useLocation()

  const [path, hash] = to.split('#')
  const targetPath = path || '/'

  const handleClick = (e) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    e.preventDefault()

    if (location.pathname === targetPath) {
      if (hash) {
        scrollToHash(`#${hash}`)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      navigate(to)
    }
  }

  return <Link ref={ref} to={to} onClick={handleClick} {...props} />
})

export default HashLink