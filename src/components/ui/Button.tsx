import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  to?: never
  textOnly?: boolean
}

type LinkProps = ComponentPropsWithoutRef<typeof Link> & {
  to?: string
  textOnly?: boolean
}

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return 'to' in props
}

const Button = (props: ButtonProps | LinkProps) => {
  const content = isLinkProps(props) ? (
    <Link
      className={`button ${props?.textOnly ? 'button--text-only' : ''}`}
      {...props}
    />
  ) : (
    <button
      className={`button ${props?.textOnly ? 'button--text-only' : ''}`}
      {...props}
    />
  )

  return content
}

export default Button
