type HeaderType = {
  children: string,
  addClassName: string|null
}

export const Header =(props: HeaderType)=> {

  return (
    <h1 className={`text-xl md:text-3xl font-medium text-very-dark-blue ${props.addClassName} `}>{props.children}</h1>
  )
}