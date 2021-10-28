import {
  Button as BaseButton,
  ButtonProps,
  Card as BaseCard,
  CardProps,
  Table as BaseTable,
  TableProps,
} from 'react-bootstrap'

import { useSelector } from 'react-redux'
import { selectTheme } from '@redux/slices/theme'

export const H4 = (props: { text: string }) => {
  const theme = useSelector(selectTheme)
  return <h4 className={`pb-2 text-${theme.textMode}`}>{props.text}</h4>
}

export const Button = (props: ButtonProps) => {
  const theme = useSelector(selectTheme)
  return (
    <BaseButton
      variant={`${theme.darkMode ? 'secondary' : 'primary'}`}
      {...props}
    />
  )
}

export const Card = (props: CardProps) => {
  const theme = useSelector(selectTheme)
  return (
    <BaseCard
      className={`rounded shadow-sm text-${theme.textMode} p-3`}
      style={{ backgroundColor: theme.bgSoftColor }}
      {...props}
    />
  )
}

export const Table = (props: TableProps) => {
  const theme = useSelector(selectTheme)
  return (
    <div className="table-responsive-lg">
      <BaseTable
        className={`table-borderless text-${theme.textMode}`}
        {...props}
      />
    </div>
  )
}
